# Syntax

olestream.Read ( variable {, stopforline } )



- Table 10.626:




|Argument|Description|
|---|---|
|olestream|The name of an OLE stream variable that has been opened.|
|variable|The name of a string variable into which want to read data from olestream.|
|stopforline (option|al)A boolean value that specifies whether to read a line at a time. In other words, Read will stop reading at the next carriage return/linefeed. Values are:<br><br>• TRUE -- (Default) Stop at the end of a line and leave the read pointer positioned after the carriage return/linefeed so the next read will read the next line<br>• FALSE -- Read the whole stream or a maximum of 32,765 bytes<br>|
