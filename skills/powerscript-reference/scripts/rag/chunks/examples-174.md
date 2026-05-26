# Examples

The following example shows a call to a function (f_checkrole) that takes the name of a role as an argument and returns an integer. In this example only managers can place orders with a value over $20,000:



integer rc long ordervalue IF ordervalue > 20,000 THEN



rc = f_checkrole("Manager") IF rc <> 1 // handle negative values and exit ELSE // continue processing END IF



END IF



The f_checkrole function checks whether a component is running on COM+ and if security checking is enabled. Then it checks whether the direct caller is in the role passed in as an argument. If any of the checks fail, the function returns a negative value:



TransactionServer ts integer li_rc string str_role



li_rc = GetContextService( "TransactionServer", ts) // handle error if necessary



// Find out if running on COM+ IF ts.which() <> 2 THEN RETURN -1



// Find out if security is enabled IF NOT ts.IsSecurityEnabled() THEN RETURN -2



// Find out if the caller is in the role IF NOT ts.IsCallerInRole(str_role) THEN



RETURN -3 ELSE



RETURN 1 END IF



See also ImpersonateClient IsImpersonating IsSecurityEnabled RevertToSelf



- 10.348 IsDate Description Tests whether a string value is a valid date. Syntax IsDate ( datevalue )


- Table 10.430:




|Argument|Description|
|---|---|
|datevalue|A string whose value you want to test to determine whether it is a valid date|



Return value Boolean. Returns true if datevalue is a valid date and false if it is not. If datevalue is null, IsDate returns null. Usage



You can use IsDate to test whether a user-entered date is valid before you convert it to a date datatype. To convert a value into a date value, use the Date function. The year value must be in the range 01 to 9999.



Examples This statement returns true:



IsDate("Jan 1, 05")



This statement returns false:



IsDate("Jan 32, 2005")



If the SingleLineEdit sle_Date_Of_Hire contains 7/1/99, these statements store 1999-07-01 in HireDate:



Date HireDate IF IsDate(sle_Date_Of_Hire.text) THEN



HireDate = Date(sle_Date_Of_Hire.text) END IF



See also IsDate method for DataWindows in Section 2.4.52, “IsDate” in DataWindow Reference.
