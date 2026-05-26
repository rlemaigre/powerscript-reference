# Return value

Integer. Returns the number of characters or bytes read. If an end-of-file mark (EOF) is encountered before any characters are read, Read returns -100. Read returns one of the following negative values if an error occurs:



- -1 -- Stream is not open
- -2 -- Read error
- -9 -- Other error If any argument's value is null, Read returns null. Examples




This example opens an OLE object in the file MYSTUFF.OLE and assigns it to the OLEStorage object stg_stuff. Then it opens the stream called info in stg_stuff and assigns it to the stream object olestr_info. Finally, it reads the contents of olestr_info into the string ls_info.



The example does not check the functions' return values for success, but you should be sure to check the return values in your code:



boolean lb_memexists OLEStorage stg_stuff OLEStream olestr_info blob ls_info



stg_stuff = CREATE OLEStorage stg_stuff.Open("c:\ole2\mystuff.ole") olestr_info.Open(stg_stuff, "info", &



stgRead!, stgExclusive!) olestr_info.Read(ls_info)
