# Examples

This statement returns BABE RUTH if all the leading and trailing spaces are space characters:



Trim(" BABE RUTH ")



This statement returns BABE RUTH if the leading and trailing spaces include other types of white space characters:



Trim(" BABE RUTH ", true )



This example removes the leading and trailing spaces from the user-entered value in the SingleLineEdit sle_emp_fname and saves the value in emp_fname:



string emp_fname emp_fname = Trim(sle_emp_fname.Text)



See also LeftTrim RightTrim Trim method for DataWindows in Section 2.4.127, “Trim” in DataWindow Reference.



- 10.724 TrimW (obsolete) Description Removes leading and trailing spaces from a string. This function is obsolete. It has the same behavior as Trim in all environments. Syntax TrimW ( string )


- 10.725 Truncate Description Truncates a number to the specified number of decimal places. Syntax Truncate ( x, n )


- Table 10.898:




|Argument|Description|
|---|---|
|x|The number you want to truncate.|
|n|The number of decimal places to which you want to truncate x. Valid values are 0 through 28.|



Return value Decimal. Returns the result of the truncation if it succeeds and null if it fails or if any argument is null.
