# Examples

In this example, the client application disconnects from the server application using the Connection object myconnect:



myconnect.DisconnectServer() destroy myconnect



See also ConnectToServer (obsolete)



- 10.128 Double Description Converts a string to a double or obtains a double value that is stored in a blob. Syntax Double ( stringorblob )


- Table 10.157:




|Argument|Description|
|---|---|
|stringorblob|A string whose value you want returned as a double or a blob in which the first value is the double value. The rest of the contents of the blob is ignored. Stringorblob can also be an Any variable containing a double or blob.|



Return value Double. Returns the contents of stringorblob as a double. If stringorblob is not a valid PowerScript number or if it contains a non-numeric datatype, Double returns 0. If stringorblob is null, Double returns null. Usage



To distinguish between a string whose value is the number 0 and a string whose value is not a number, use the IsNumber function before calling the Double function.



Examples This statement returns 24.372 as a double:



Double("24.372")



This statement returns the contents of the SingleLineEdit sle_distance as a double:



Double(sle_distance.Text)



After assigning blob data from the database to lb_blob, this example obtains the double value stored at position 20 in the blob (the length you specify for BlobMid must be at least as long as the value but can be longer):



double lb_num lb_num = Double(BlobMid(lb_blob, 20, 40))



For an example of assigning and extracting values from a blob, see Real. See also Dec Integer Long Real
