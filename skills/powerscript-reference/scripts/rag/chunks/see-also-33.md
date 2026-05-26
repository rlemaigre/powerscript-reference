# See also

IsValid SetNull IsNull method for DataWindows in Section 2.4.54, “IsNull” in DataWindow Reference.



- 10.354 IsNumber Description Reports whether the value of a string is a number. Syntax




IsNumber ( string )



- Table 10.436:




|Argument|Description|
|---|---|
|string|A string whose value you want to test to determine whether it is a valid PowerScript number|



Return value Boolean. Returns true if string is a valid PowerScript number and false if it is not. If string is null, IsNumber returns null. Usage Use IsNumber to check that text in an edit control can be converted to a number. To convert a string to a specific numeric datatype, use the Double, Dec, Integer, Long, or Real function. Examples This statement returns true:



IsNumber("32.65")



This statement returns false:



IsNumber("A16")



If the SingleLineEdit sle_Age contains 32, these statements store 32 in li_YearsOld:



integer li_YearsOld IF IsNumber(sle_Age.Text) THEN



li_YearsOld = Integer(sle_Age.Text) END IF



See also Double Dec Integer Long Real IsNumber method for DataWindows in Section 2.4.55, “IsNumber” in DataWindow Reference.



- 10.355 IsPreview Description Reports whether a RichTextEdit control is in preview mode. Applies to RichTextEdit controls
