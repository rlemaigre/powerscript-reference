# Examples

If the text in sle_comment1 is Draft and it is selected, this statement clears Draft from sle_comment1 and returns 5:



sle_comment1.Clear()



If the text in sle_comment1 is Draft, the first statement selects the D and the second clears D from sle_comment1 and returns 1:



sle_comment1.SelectText(1,1) sle_comment1.Clear()



This example clears the object associated with the OLE control ole_1, leaving the control empty:



integer result result = ole_1.Clear()



This example clears the object in the OLEStorage object variable olest_stuff. It also leaves any OLE controls that have opened the object in olest_stuff empty:



integer result result = olest_stuff.Clear()



See also ClearAll Close Cut Paste ReplaceText SelectText



- 10.61.2 Syntax 2: For RichTextEdit controls Description




Deletes selected text, but also removes any table grids in the selection when the gridFlag argument is set to true.



Applies to RichTextEdit Syntax



objectname.Clear (gridFlag)



|Argument|Description|
|---|---|
|objectname|Name of the RichTextEdit control|
|gridFlag|Boolean that determines whether table grids in selected text are deleted along with the selected text. Values are:<br><br>• TRUE -- Table grids in the current selection are deleted along with the selected text.<br>• FALSE -- (Default) Performs exactly as Syntax 1, deleting selected text for RichTextEdit controls, but not any table grid lines in the selection.<br>|



Return value Long. Returns the number of characters removed from the RichTextEdit control. Usage



Use to remove table grid lines along with any selected text. If the whole text of a table row is selected, Clear (true) deletes the text and the grid line for this row. If only some of the text in a table row is selected, Clear (false) deletes the selected text only.



See also ClearAll



- 10.61.3 Syntax 3: For JSONPackage objects Description Deletes all of the keys. Applies to JSONPackage Syntax objectname.Clear ( )


- Table 10.77:




|Argument|Description|
|---|---|
|objectname|Name of the JSONPackage object|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes all of the keys and then calls KeyCount to check if all keys are deleted:



long ll_KeyCount JsonPackage lnv_package



lnv_package = create JsonPackage lnv_package.SetValue("d_employee", dw_employee) lnv_package.Clear() // ll_KeyCount will return 0 ll_KeyCount = lnv_package.KeyCount()



See also KeyCount



- 10.62 ClearAll Description Deletes all content from the specified control, but does not store it in the clipboard. Applies to RichTextEdit Syntax objectname.ClearAll ( )

- Table 10.78:




|Argument|Description|
|---|---|
|objectname|Name of the RichTextEdit control|



Return value Long. Returns the number of characters removed from the RichTextEdit control. Usage



Use to remove all content from a RichTextEdit control, including any table grids. To just delete selected text, use the Clear function. To delete text and store it in the clipboard, use the Cut function.



Examples This statement clears all content from the rte_1 RichTextEdit control.



rte_1.ClearAll()



See also Clear Cut



- 10.63 ClearBoldDates Description Clears all bold date settings that had been set with SetBoldDate. Applies to




MonthCalendar control Syntax



controlname.ClearBoldDates ( )



- Table 10.79:



|Argument|Description|
|---|---|
|controlname|The name of the MonthCalendar control from which you want to clear the bold dates|



Return value Integer.



- Returns 0 for success and -1 for failure. Usage




You can use the SetBoldDate function to specify that selected dates, such as holidays, display in bold. ClearBoldDates clears all such settings. To clear individual bold dates, use the SetBoldDate function with the onoff parameter set to false.



Examples This example clears all bold settings in the control monthCalVacations:



integer li_return li_return = monthCalVacation.ClearBoldDates()



See also SetBoldDate



10.64 ClearHeaders



- 10.64.1 Syntax 1: for TokenRequest objects Description Clears the header of requests. Applies to TokenRequest objects Syntax objectname.ClearHeaders ( )


- Table 10.80:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenRequest object in which you want to clear the request header.|
