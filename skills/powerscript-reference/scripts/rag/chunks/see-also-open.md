# See also Open

Length Seek Write



- 10.504.2 Syntax 2: For character arrays or blobs Description Reads data from an OLE stream object into a character array or blob. Applies to OLEStream objects Syntax olestream.Read ( variable {, maximumread } )


- Table 10.627:




|Argument|Description|
|---|---|
|olestream|The name of an OLE stream variable that has been opened.|
|variable|The name of a blob variable or character array into which want to read data from olestream.|
|maximumread (op|tional)A long value specifying the maximum number of bytes to be read. The default is 32,765 or the length of olestream.|
