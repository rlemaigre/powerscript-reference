# See also

BlobEdit BlobMid String



Syntax 2: Convert a string or a byte array to a blob Description Converts a string or an array of bytes to a blob datatype. Syntax



Blob ( array[ ] )



- Table 10.51:




|Argument|Description|
|---|---|
|stringorbytearray|An Any variable that holds a string or an array of bytes you want to convert to a blob datatype|



Return value Blob. Returns the converted string or byte array in a blob. Examples



This example saves an array of bytes as a blob, then copies the contents of the blob to another byte array:



Blob lblb_1 Any a byte lbyte_array[], lbyte_array2[]



// initialize array lbyte_array[] = {1,10,100,200,255}



a = lbyte_arraylblb_1 = Blob(a) lbyte_array2[] = GetByteArray(lblb_1)



See also GetByteArray



- 10.43 BlobEdit Description Inserts data of any PowerBuilder datatype into a blob variable. Syntax




BlobEdit ( blobvariable, n, data {, encoding} )



- Table 10.52:




|Argument|Description|
|---|---|
|blobvariable|An initialized variable of the blob datatype into which you want to copy a standard PowerBuilder datatype|
|n|The number (1 to 4,294,967,295) of the position in blobvariable at which you want to begin copying the data|
|data|Data of a valid PowerBuilder datatype that you want to copy into blobvariable|
|encoding|Character encoding of the blob variable in which you want to insert data of datatype string. Values are:<br><br>• EncodingANSI!<br>• EncodingUTF8!<br>• EncodingUTF16LE! (default)<br>• EncodingUTF16BE!<br>|
