# 10.367 LeftTrimW (obsolete) Description Removes spaces from the beginning of a string.

This function is obsolete. It has the same behavior as LeftTrim in all environments. Syntax



LeftTrimW ( string )



- 10.368 Len Description Reports the length of a string or a blob. Syntax Len ( stringorblob )


- Table 10.449:




|Argument|Description|
|---|---|
|stringorblob|The string or blob for which you want the length in number of characters or in number of bytes|



Return value Long. Returns a long whose value is the length of stringorblob if it succeeds and -1 if an error occurs. If stringorblob is null, Len returns null. Usage



Len counts the number of characters in a string. The null that terminates a string is not included in the count.



If you specify a size when you declare a blob, that is the size reported by Len. If you do not specify a size for the blob, Len initially reports the blob's length as 0. PowerBuilder assigns a size to the blob the first time you assign data to the blob. Len reports the length of the blob as the number characters it can contain.



Examples This statement returns 0:



Len("")



These statements store in the variable s_address_len the length of the text in the SingleLineEdit sle_address:



long s_address_len s_address_len = Len(sle_address.Text)



The following scenarios illustrate how the declaration of blobs affects their length, as reported by Len.



In the first example, an instance variable called ib_blob is declared but not initialized with a size. If you call Len before data is assigned to ib_blob, Len returns 0. After data is assigned, Len returns the blob's new length.



The declaration of the instance variable is:



blob ib_blob



The sample code is:



long ll_len ll_len = Len(ib_blob) // ll_len set to 0 ib_blob = Blob( "Test String") ll_len = Len(ib_blob) // ll_len set to 22



In the second example, ib_blob is initialized to the size 100 when it is declared. When you call Len for ib_blob, it always returns 100. This example uses BlobEdit, instead of Blob, to assign data to the blob because its size is already established. The declaration of the instance variable is:



blob{100} ib_blob



The sample code is:



long ll_len ll_len = Len(ib_blob) // ll_len set to 100 BlobEdit(ib_blob, 1, "Test String") ll_len = Len(ib_blob) // ll_len set to 100



See also Len method for DataWindows in Section 2.4.66, “Len” in DataWindow Reference.
