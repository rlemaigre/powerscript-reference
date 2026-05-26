# Examples

The gf_DoSomething function takes a table name and a record and returns 0 for success and a negative number for an error. The following statements set the number and text values in the Error object according to a script variable, then trigger a SystemError event once the processing is complete:



li_result = gf_DoSomething("Company", record_id) IF (li_result < 0) THEN



CHOOSE CASE li_result



- CASE -1 PopulateError(1, "No company record exists & record id: " + record_id)
- CASE -2 PopulateError(2, "That company record is & currently locked. Please try again later.")
- CASE -3 PopulateError(3, "The company record could &




not be updated.") CASE else



PopulateError(999, "Update failed.") END CHOOSE SignalError()



END IF



See also SignalError



- 10.463 Pos Description Finds one string within another string. Syntax Pos ( string1, string2 {, start } )


- Table 10.584:




|Argument|Description|
|---|---|
|string1|The string in which you want to find string2.|
|string2|The string you want to find in string1.|
|start (optional)|A long indicating where the search will begin in string1. The default is 1.|
