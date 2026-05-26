# Syntax

FileReadEx ( file#, blob {, length } ) FileReadEx ( file#, string )



- Table 10.186:




|Argument|Description|
|---|---|
|file#|The integer assigned to the file when it was opened.|
|blob or string|The name of the string or blob variable into which you want to read the data.|
|length|In text or stream mode, the number of bytes a retrieve requires. The default value is the length of the file.|



Return value Long. Returns the number of bytes read. If an end-of-file mark (EOF) is encountered before any characters are read, FileReadEx returns -100. If the file is opened in LineMode and a CR or LF is encountered before any characters are read, FileReadEx returns 0. If an error occurs, FileReadEx returns -1. FileReadEx returns -1 if you attempt to read from a string in stream mode or read from a blob in line mode. If any argument's value is null, FileReadEx returns null.
