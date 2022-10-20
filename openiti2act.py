
import re
import openiti
from openiti.helper import ara,, rgx
import pandas as pd
import json
import os.path
import requests
import sys

class OpenITI2ACT:
    milestone="ms\d+"
    page="PageV[^P]{2}P\d{3}|d{4}"
    tomilstone="(.*?)(ms\d+)"

    def __init___(self, destPath, URLlist, **kwargs):
        self.milestone=OpenITI2ACT.milestone
        self.page=OpenITI2ACT.page
        self.tomilstone=OpenITI2ACT.tomilstone
        self.destPath=destPath
        self.URLlist=URLlist
        if  "categories" in kwargs:
            self.categories=kwargs["categories"]
        else:
            self.categories=["OpenITI"]
        if "fromFile" in kwargs:
            self.fromFile=kwargs["fromFile"]

    def tokens(self,txt):
        rn = openiti.helper.ara.tokenize(txt)
        df = pd.DataFrame(rn).transpose()
        return df
    def normalize_ara_light(self,text):
        """Lighlty normalize Arabic strings:
        fixing only Alifs, Alif Maqsuras;
        replacing hamzas on carriers with standalone hamzas

        Args:
            text (str): the string that needs to be normalized

        Examples:
            >>> normalize_ara_light("ألف الف إلف آلف ٱلف")
            'الف الف الف الف الف'
            >>> normalize_ara_light("يحيى")
            'يحيي'
            >>> normalize_ara_light("مقرئ فيء")
            'مقر في'
            >>> normalize_ara_light("قهوة")
            'قهوة'
        """
        text = ara.normalize_composites(text)
        repl = [("أ", "ا"), ("ٱ", "ا"), ("آ", "ا"), ("إ", "ا"),    # alifs
                ("ى", "ي"),                                        # alif maqsura
                ("يء", "ي"), ("ىء", "ي"), ("ؤ", "و"), ("ئ", "ي"),("ء",""),  # hamzas
                 ("ة","ه") # ta marbuta
               ]
        return ara.normalize(text, repl)

    def text_cleaner(self,text):
        """Clean text by normalizing Arabic characters \
        and removing all non-Arabic characters

        Args:
            text (str): the string to be cleaned

        Returns:
            (str): the cleaned string
        """
        text = self.normalize_ara_light(text)
        text = re.sub("\W|\d|[A-z]", " ", text)
        text = re.sub(" +", " ", text)
        return text

    def getOpenITI(self,src):
        text= requests.request('get',src).text
        mta,txt=text.split(rgx.header_splitter)
        mt=re.findall("\#META\# .*?\.(.*?)\t:: (.*?)\n",mta,re.DOTALL)
        md={k:v for k,v in mt}
        id=src.split("/")[-1]
        return {"ID":id, "URL":src,"Meta":md,"txt":txt}

    def add_record(self,data, local_file):
        with open(local_file, "a", newline="\n") as fp:
            json.dump(data, fp, ensure_ascii=False)
            fp.write("\n")

    def getSegments(self,srcDict,src, categories=["OpenITI"]):
        '''
        dict result from getOpenITI
        {"ID", "URL","Meta","txt"}
        '''
        ref = re.findall(self.tomilstone, srcDict['txt'], re.DOTALL)
        dic=[]
        curpg=""

        for r in ref:
            pp=""
            rec={}
            pg=re.findall(self.page,r[0], re.DOTALL)
            if pg==[]:
                pg=[curpg]
            curpg=pg[-1]
            for s in pg:
                pp=f"{pp}_{s}"
            rec ={
                "location":srcDict['ID']+pp,
                "segment":int(r[1].replace("ms",""),),
                "sentence":self.text_cleaner(r[0]),
                "orig_sentence":r[0],
                'url':src,
                "categories": categories
            }
            for k in srcDict['Meta']:
                rec[k]=srcDict['Meta'][k]
            dic.append(rec)
        return dic
    def dic2jsonFile(self,destPath,srcDict,src, categories=["OpenITI"]):
        '''
        dict result from getOpenITI
        {"ID", "URL","Meta","txt"}
        '''
        ref = re.findall(self.tomilstone, srcDict['txt'], re.DOTALL)
        curpg=""
        for r in ref:
            pp=""
            rec={}
            pg=re.findall(self.page,r[0], re.DOTALL)
            if pg==[]:
                pg=[curpg]
            curpg=pg[-1]
            for s in pg:
                pp=f"{pp}_{s}"
            rec ={
                "location":srcDict['ID']+pp,
                "segment":int(r[1].replace("ms","")),
                "sentence":self.text_cleaner(r[0]),
                "orig_sentence":r[0],
                'url':src,
                "categories": categories
            }
            for k in srcDict['Meta']:
                rec[k]=srcDict['Meta'][k]

            local_file=os.path.join(destPath,src.split("/")[-1])+".json"
            self.add_record(rec,local_file)

def main(destPath,srcDict,**kwargs ):
    """
    Get files from OpenITI repository and transform to JSON file dump according to ACT specifications.
    ACT – “Allocate Connections (between) Texts, see:https://textreuse.info/en/
    Args:
        destPath (string): path for  destination folder
        URLlist (list / file path): list of OpenITI urls to be loaded either in list or file
        categories (list): list of  optional tags for files in ACT
            default: ["OpenITI"]
        fromFile (bool ): is URLlist a  file
            default: False

    """
    ota=OpenITI2ACT(destPath,srcDict,kwargs)
    if ota.fromFile == True:
        with open(ota.URLlist, "r") as fp:
            urls = re.findall('"(https.*?)"', fp.read())
    else:
        urls=ota.URLlist
    for u in urls:
        srctxt = ota.getOpenITI(u)
        dic = ota.getSegments(srcDict=srctxt, src=u, categories=ota.categories)
        ota.dic2jsonFile(destPath=destPath, srcDict=srctxt, src=u, categories=ota.categories)
    return dic

if __name__ == '__main__':
    dic=main(sys.argv[1],sys.argv[2], sys.argv)
    print(dic)
