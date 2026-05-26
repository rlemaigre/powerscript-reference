# Syntax

rtename.IsPreview ( )



- Table 10.437:



|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control for which you want to know whether it is in preview mode|



Return value Boolean. Returns true if rtename is in preview mode and false if it is in data entry mode. Examples



This example switches the RichTextEdit control rte_1 to preview mode if it is not already in preview mode and then prints it:



IF NOT rte_1.IsPreview() THEN rte_1.Preview(TRUE) rte_1.Print(1, "1-4", FALSE, TRUE)



END IF



See also Preview



10.356 IsSecurityEnabled



Description Indicates whether or not security checking is enabled for a COM object running on COM+. Applies to TransactionServer objects Syntax



transactionserver.IsSecurityEnabled ( )



- Table 10.438:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|



Return value Boolean. Returns true if security checking is enabled and false if it is not. Usage



Use IsSecurityEnabled to determine whether security checking is enabled for the current COM object.



If the COM object is running in the creator's process, IsSecurityEnabled always returns false.



The following example determines whether security checking is enabled and, if it is, checks whether the direct caller is in the Manager role before completing the call:



TransactionServer ts integer li_rc string str_role = "Admin"



li_rc = GetContextService( "TransactionServer", &



ts ) // Find out if security is enabled. IF ts.IsSecurityEnabled() THEN



// Find out if the caller is in the role. IF NOT ts.IsCallerInRole(str_role) THEN



// do not complete call



ELSE // execute call normally END IF



ELSE



// security is not enabled // do not complete call



END IF



See also ImpersonateClient IsCallerInRole IsImpersonating RevertToSelf



- 10.357 IsTime Description Reports whether the value of a string is a valid time value. Syntax IsTime ( timevalue )


- Table 10.439:




|Argument|Description|
|---|---|
|timevalue|A string whose value you want to test to determine whether it is a valid time|



Return value Boolean. Returns true if timevalue is a valid time and false if it is not. If timevalue is null, IsTime returns null. Usage Use IsTime to test to whether a value a user enters in an edit control is a valid time. To convert a string to an time value, use the Time function.



This statement returns true:



IsTime("8:00:00 am")



This statement returns false:



IsTime("25:00")



If the SingleLineEdit sle_EndTime contains 4:15 these statements store 04:15:00 in lt_QuitTime:



Time lt_QuitTime IF IsTime sle_EndTime.Text) THEN



lt_QuitTime = Time(sle_EndTime.Text) END IF



See also Time IsTime method for DataWindows in Section 2.4.59, “IsTime” in DataWindow Reference.
