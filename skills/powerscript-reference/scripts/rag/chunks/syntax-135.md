# Syntax

String ( blob {,encoding} )



- Table 10.863:




|Argument|Description|
|---|---|
|blob|The blob whose value you want returned as a string. Blob can also be an Any variable containing a blob.|
|encoding|Character encoding of the blob you want converted. Values are:<br><br>• EncodingANSI!<br>• EncodingUTF8!<br>• EncodingUTF16LE! (default)<br>• EncodingUTF16BE!<br>|



Return value String. Returns the value of blob as a string if it succeeds and the empty string ("") if it fails. It the blob does not contain string data, String interprets the data as characters, if possible, and returns a string. If blob is null, String returns null. Usage



If the encoding argument is not provided, String converts a Unicode blob to a Unicode string. You must provide the encoding argument if the blob has a different encoding.



If the blob has a byte-order mark (BOM), String filters it out automatically. For example, suppose the blob's hexadecimal display is: FF FE 54 00 68 00 69 00 73 00. The BOM is FF FE, which indicates that the blob has UTF-16LE encoding, and is filtered out. The string returned is "This".



You can also use String to extract a string from the Message object after calling TriggerEvent or PostEvent. For more information, see the TriggerEvent or PostEvent functions. Examples



This example converts the blob instance variable ib_sblob, which contains string data in ANSI format, to a string and stores the result in sstr:



string sstr sstr = String(ib_sblob, EncodingANSI!)



This example stores today's date and test status information in the blob bb. Pos1 and pos2 store the beginning and end of the status text in the blob. Finally, BlobMid extracts a "sub-blob" that String converts to a string. Sle_status displays the returned status text:



blob{100} bb long pos1, pos2 string test_status date test_date



test_date = Today() IF DayName(test_date) = "Wednesday" THEN &



test_status = "Coolant Test" IF DayName(test_date) = "Thursday" THEN & test_status = "Emissions Test"



// Store data in the blob pos1 = BlobEdit( bb, 1, test_date) pos2 = BlobEdit( bb, pos1, test_status )



... // Some processing // Extract the status stored in bb and display it sle_status.text = String( &



BlobMid(bb, pos1, pos2 - pos1))



See also Blob String method for DataWindows in Section 2.4.121, “String” in DataWindow Reference.
