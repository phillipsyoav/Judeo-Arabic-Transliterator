const BAHYA = {
  JDA2SA: {

    '\u0027': '\u0307',//HEBREW PUNCTUATION GERESH
    '\u05D2\u0307': '\u062C', //ج<-ג̇
    '\u05D3\u0307': '\u0630', //ذ<-ד̇
    '\u05D4\u05bf': '\u0629', //ة<-ה̇
    '\u05D8\u0307': '\u0638', //ظ<-ט̇
    '\u05DB\u0307': '\u062E', //خ<-כ̇
    '\u05E6\u0307': '\u0636', //ض<-צ̇
    '\u05E5\u0307': '\u0636', //ض<-ץ̇
    '\u05EA\u0307': '\u062B', //ث<-ת̇
    '\u05D0': '\u0622', //آ<-א
    '\u05D0': '\u0623', //أ<-א
    '\u05D0': '\u0625', //إ<-א
    '\u05D0': '\u0627', //ا<-א
    '\u05D1': '\u0628', //ب<-ב
    '\u05D2': '\u063A', //غ<-ג
    '\u05D3': '\u062F', //د<-ד
    '\u05D4': '\u0647', //ه<-ה
    '\u05D5': '\u0624', //ؤ<-ו
    '\u05D5': '\u0648', //و<-ו
    '\u05D6': '\u0632', //ز<-ז
    '\u05D7': '\u062D', //ح<-ח
    '\u05D8': '\u0637', //ط<-ט
    '\u05D9': '\u0626', //ئ<-י
    '\u05D9': '\u0649', //ى<-י
    '\u05D9': '\u064A', //ي<-י
    '\u05DB': '\u0643', //ك<-כ
    '\u05DA': '\u0643', //ك<-ך
    '\u05DC': '\u0644', //ل<-ל
    '\u05DE': '\u0645', //م<-מ
    '\u05DD': '\u0645', //م<-ם
    '\u05E0': '\u0646', //ن<-נ
    '\u05DF': '\u0646', //ن<-ן
    '\u05E1': '\u0633', //س<-ס
    '\u05E2': '\u0639', //ع<-ע
    '\u05E4': '\u0641', //ف<-פ
    '\u05E3': '\u0641', //ف<-ף
    '\u05E6': '\u0635', //ص<-צ
    '\u05E5': '\u0635', //ص<-ץ
    '\u05E7': '\u0642', //ق<-ק
    '\u05E8': '\u0631', //ر<-ר
    '\u05E9': '\u0634', //ش<-ש
    '\u05EA': '\u062A', //ت<-ת


  },
//
// '\u05DA\u0307': '\u062E',   //HEBREW LETTER FINAL KAF
// '\u05D3\u0307':'\u0630', //HEBREW LETTER THAL
//  '\u05D4\u0307':'\u0629', //HEBREW LETTER TEH MARBUTA
//  '\u05EA\u0307':'\u062B', //HEBREW LETTER THEH
//  '\u05DB\u0307':'\u062E', //HEBREW LETTER KHAH
//  '\u05E6\u0307':'\u0636', //HEBREW LETTER DAD
//  '\u05D8\u0307':'\u0638', //HEBREW LETTER ZAH
// '\u05D2\u0307': '\u062C', //HEBREW LETTER GIMEL
// '\u05D0': '\u0627', //HEBREW LETTER ALEF
// '\u05D1': '\u0628', //HEBREW LETTER BET
// '\u05D3': '\u062F', //HEBREW LETTER DALET
// '\u05D4': '\u0647', //HEBREW LETTER HE
// '\u05D5': '\u0648', //HEBREW LETTER VAV
// '\u05D6': '\u0632', //HEBREW LETTER ZAYIN
// '\u05D7': '\u062D', //HEBREW LETTER HET
// '\u05D8': '\u0637', //HEBREW LETTER TET
// '\u05D9': '\u064A', //HEBREW LETTER YOD
// '\u05DA': '\u0643', //HEBREW LETTER FINAL KAF
// '\u05DB': '\u0643', //HEBREW LETTER KAF
// '\u05DC': '\u0644', //HEBREW LETTER LAMED
// '\u05DD': '\u0645', //HEBREW LETTER FINAL MEM
// '\u05DE': '\u0645', //HEBREW LETTER MEM
// '\u05DF': '\u0646', //HEBREW LETTER FINAL NUN
// '\u05E0': '\u0646', //HEBREW LETTER NUN
// '\u05E1': '\u0633', //HEBREW LETTER SAMEKH
// '\u05E2': '\u0639', //HEBREW LETTER AYIN
// '\u05D2':'\u063A', //HEBREW LETTER GHAIN
// '\u05E3': '\u0641', //HEBREW LETTER FINAL PE
// '\u05E4': '\u0641', //HEBREW LETTER PE
// '\u05E5': '\u0635', //HEBREW LETTER FINAL TSADI
// '\u05E6': '\u0635', //HEBREW LETTER TSADI
// '\u05E7': '\u0642', //HEBREW LETTER QOF
// '\u05E8': '\u0631', //HEBREW LETTER RESH
// '\u05E9': '\u0634', //HEBREW LETTER SHIN
// '\u05EA': '\u062A', //HEBREW LETTER TAV
//}
  SA2JDA : {
    '\u0635 ': '\u05E5 ', //ARABIC LETTER SAD
    '\u0635': '\u05E6', //ARABIC LETTER SAD
    '\u0636': '\u05E5\u0307 ', //ARABIC LETTER DAD
    '\u0636': '\u05E6\u0307', //ARABIC LETTER DAD
    '\u0643 ': '\u05DA ', //ARABIC LETTER KAF end of word
    '\u0638 ': '\u05D7\u0307 ', //ARABIC LETTER ZAH
    '\u062E ': '\u05DA\u0307 ', //ARABIC LETTER KHAH
    '\u062E': '\u05DB\u0307', //ARABIC LETTER KHAH
    '\u0629': '\u05D4\u0307', //ARABIC LETTER TEH MARBUTA
    '\u0646 ': '\u05DF ',//HEBREW LETTER FINAL NUN
    '\u0641 ': '\u05E3 ', //ARABIC LETTER FEH
    '\u0645 ': '\u05DD ', //ARABIC LETTER MEEM
    '\u062B': '\u05EA\u0307', //ARABIC LETTER THEH
    '\u0630': '\u05D3\u0307', //ARABIC LETTER THAL
    '\u0636': '\u05E6\u0307', //ARABIC LETTER DAD
    '\u0638': '\u05D8\u0307', //ARABIC LETTER ZAH
    '\u062C': '\u05D2\u0307', //ARABIC LETTER JEEM
    '\u0621': '', //ARABIC LETTER ALEF WITH MADDA ABOVE
    '\u0622': '\u05D0', //ARABIC LETTER ALEF WITH MADDA ABOVE
    '\u0623': '\u05D0', //ARABIC LETTER ALEF WITH HAMZA ABOVE
    '\u0624': '\u05D5', //ARABIC LETTER WAW WITH HAMZA ABOVE
    '\u0625': '\u05D0', //ARABIC LETTER ALEF WITH HAMZA BELOW
    '\u0626': '\u05D9', //ARABIC LETTER YEH WITH HAMZA ABOVE
    '\u0627': '\u05D0', //ARABIC LETTER ALEF
    '\u0628': '\u05D1', //ARABIC LETTER BE
    '\u062A': '\u05EA', //ARABIC LETTER TEH
    '\u063A': '\u05D2', //ARABIC LETTER GHAIN
    '\u062D': '\u05D7', //ARABIC LETTER HAH
    '\u062F': '\u05D3', //ARABIC LETTER DAL

    '\u0631': '\u05E8', //ARABIC LETTER REH
    '\u0632': '\u05D6', //ARABIC LETTER ZAIN
    '\u0633': '\u05E1', //ARABIC LETTER SEEN
    '\u0634': '\u05E9', //ARABIC LETTER SHEEN
    '\u0635': '\u05E6', //ARABIC LETTER SAD

    '\u0637': '\u05D8', //ARABIC LETTER TAH

    '\u0639': '\u05E2', //ARABIC LETTER AIN

    '\u0641': '\u05E4', //ARABIC LETTER FEH
    '\u0642': '\u05E7', //ARABIC LETTER QAF
    '\u0643': '\u05DB', //ARABIC LETTER KAF
    '\u0644': '\u05DC', //ARABIC LETTER LAM
    '\u0645': '\u05DE', //ARABIC LETTER MEEM
    '\u0646': '\u05E0', //ARABIC LETTER NOON
    '\u0647': '\u05D4', //ARABIC LETTER HEH
    '\u0648': '\u05D5', //ARABIC LETTER WAW
    '\u0649': '\u05D9', //ARABIC LETTER ALEF MAKSURA
    '\u064A': '\u05D9', //ARABIC LETTER YEH
    '\u0671': '\u05D0', //ARABIC LETTER ALEF WASLA
    '\u0672': '\u05D0', //ARABIC LETTER ALEF WITH WAVY HAMZA ABOVE
    '\u0673': '\u05D0', //ARABIC LETTER ALEF WITH WAVY HAMZA BELOW
    '\u0676': '\u05D5'//ARABIC LETTER HIGH HAMZA WAW

  }
}
