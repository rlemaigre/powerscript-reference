# Syntax

LenA (stringorblob)



- Table 10.450:




|Argument|Description|
|---|---|
|stringorblob|The string or blob for which you want the length in number of bytes|



Return value Long. Returns a long whose value is the length of stringorblob if it succeeds and -1 if an error occurs. If stringorblob is null, Len returns null. Usage LenA replaces the functionality that Len had in DBCS environments in PowerBuilder 9. In SBCS environments, Len, LenW, and LenA return the same results.



If you specify a size when you declare a blob, that is the size reported by LenA. If you do not specify a size for the blob, LenA initially reports the blob's length as 0. PowerBuilder assigns a size to the blob the first time you assign data to the blob. LenA reports the length of the blob as the number of single-byte characters it can contain. Len and LenW report the size of the blob as the number of double-byte characters it can contain.



- 10.370 LenW (obsolete) Description Reports the length of a string or a blob. This function is obsolete. It has the same behavior as Len in all environments. Syntax LenW ( stringorblob )

- 10.371 Length Description Reports the length in bytes of an open OLE stream.




Len function To get the length of a string or blob, use the Len function.



Applies to OLEStream objects Syntax



olestream.Length ( sizevar )



- Table 10.451:




|Argument|Description|
|---|---|
|olestream|The name of an OLE stream variable that has been opened|
|sizevar|A long variable in which Length will store the size of olestream|



Return value Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- Stream is not open
- -9 -- Other error If any argument's value is null, Length returns null. Examples




This example opens an OLE object in the file MYSTUFF.OLE and assigns it to the OLEStorage object stg_stuff. Then it opens the stream called info in stg_stuff and assigns it to the stream object olestr_info. Finally, it finds out the stream's length and stores the value in the variable info_len.



The example does not check the function's return values for success, but you should be sure to check the return values in your code:



boolean lb_memexists OLEStorage stg_stuff OLEStream olestr_info



long info_len stg_stuff = CREATE oleStorage stg_stuff.Open("c:\ole2\mystuff.ole") olestr_info.Open(stg_stuff, "info", &



stgRead!, stgExclusive!) olestr_info.Length(info_len)
