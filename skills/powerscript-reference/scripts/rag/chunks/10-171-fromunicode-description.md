# 10.171 FromUnicode Description

Converts a blob containing a Unicode character string to a string in the file format of the current version of PowerBuilder.



Syntax



FromUnicode ( blob )



- Table 10.209:




|Argument|Description|
|---|---|
|blob|A blob containing a Unicode character string you want to convert to a string in the file format of the current version of PowerBuilder|



Return value String. Returns a character string if it succeeds and an empty string if it fails. Usage



The FromUnicode function converts a Unicode blob to a Unicode character string and has the same result as String(blob). This function will be obsolete in a future release of PowerBuilder.



Unicode file format



Unicode files sometimes have two extra bytes at the start of the file to indicate that they are Unicode files. If you are opening a Unicode file in stream mode, skip the first two bytes if they are present.



See also FromAnsi ToAnsi ToUnicode
