# Examples

This example copies a bitmap in the blob emp_photo starting at position 1, stores the position at which the next copy can begin in nbr, and then copies a date into the blob emp_photo after the bitmap data:



blob{1000} emp_photo blob temp date pic_date ulong nbr



... // Read BMP file containing employee picture



... // into temp using FileOpen and FileRead. pic_date = Today()



nbr = BlobEdit(emp_photo, 1, temp) BlobEdit(emp_photo, nbr, pic_date) UPDATEBLOB Employee SET pic = :emp_photo



WHERE ...



This example copies a string into the blob blb_data starting at position 1 and specifies that the blob should use ANSI encoding:



blob{100} blb_data string str1 = "This is a string" ulong ul_pos



ul_pos = BlobEdit (blb_data, 1, str1, EncodingANSI!)



See also Blob BlobMid



- 10.44 BlobMid Description Extracts data from a blob variable. Syntax BlobMid ( data, n {, length } )


- Table 10.53:




|Argument|Description|
|---|---|
|data|Data of the blob datatype|
|n|The number (1 to 4,294,967,295) of the first byte you want returned|
|length (optional)|The number of bytes (1 to 4,294,967,295) you want returned|
