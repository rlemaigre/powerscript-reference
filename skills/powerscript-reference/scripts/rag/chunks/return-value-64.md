# Return value

LongLong. Returns the value of stringorblob as a longlong if it succeeds and 0 if stringorblob is not a valid PowerScript number or if it is an incompatible datatype. If stringorblob is null, Long returns null. Usage



To distinguish between a string whose value is the number 0 and a string whose value is not a number, use the IsNumber function before calling the LongLong function.



Examples This statement returns 216789987654321 as a longlong:



LongLong("216789987654321")



After assigning blob data from the database to lb_blob, the following example obtains the longlong value stored at position 20 in the blob:



longlong llb_num llb_num = LongLong(BlobMid(lb_blob, 20, 4))



For an example of assigning and extracting values from a blob, see Real. See also Dec Double Integer Real
