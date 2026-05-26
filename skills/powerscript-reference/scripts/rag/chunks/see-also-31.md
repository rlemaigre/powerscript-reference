# See also

Ceiling Round Truncate Int method for DataWindows in Section 2.4.50, “Int” in DataWindow Reference.



- 10.334 Integer Description Converts the value of a string to an integer or obtains an integer value that is stored in a blob. Syntax Integer ( stringorblob )


- Table 10.416:




|Argument|Description|
|---|---|
|stringorblob|A string whose value you want returned as an integer or a blob in which the first value is the integer value. The rest of the contents of the blob is ignored. Stringorblob can also be an Any variable containing a string or blob.|



Return value Integer. Returns the value of stringorblob as an integer if it succeeds and 0 if stringorblob is not a valid number or is an incompatible datatype. If stringorblob is null, Integer returns null. Usage



To distinguish between a string whose value is the number 0 and a string whose value is not a number, use the IsNumber function before calling the Integer function.



Examples This statement returns the string 24 as an integer:



Integer("24")



This statement returns the contents of the SingleLineEdit sle_Age as an integer:



Integer(sle_Age.Text)



This statement returns 0:



Integer("3ABC") // 3ABC is not a number.



This example checks whether the text of sle_data is a number before converting, which is necessary if the user might legitimately enter 0:



integer li_new_data IF IsNumber(sle_data.Text) THEN



li_new_data = Integer(sle_data.Text) ELSE



SetNull(li_new_data) END IF



After assigning blob data from the database to lb_blob, this example obtains the integer value stored at position 20 in the blob:



integer i i = Integer(BlobMid(lb_blob, 20, 2))



See also Double Dec IsNumber Long Real Integer method for DataWindows in Section 2.4.51, “Integer” in DataWindow Reference.
