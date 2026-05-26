# Syntax

FileWriteEx ( file#, blob {, length }) FileWriteEx ( file#, string )



- Table 10.190:




|Argument|Description|
|---|---|
|file#|The integer assigned to the file when the file was opened|
|blob or string|A blob or string whose value is the data you want to write to the file.|
|length|In text or stream mode, the number of bytes to be written. The default value is the length of the file.|



Return value Long. Returns the number of bytes written if it succeeds and -1 if an error occurs. FileWriteEx returns -1 if you attempt to write to a string in stream mode or to a blob in line mode. If any argument's value is null, FileWriteEx returns null.
