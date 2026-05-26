# Return Values

Long, but this return code has no meaning to PowerBuilder. Usage Error codes For any database related error, the error code comes from the database driver. The error text is also from the database drivers. The sqlsyntax argument shows what SQL syntax was executing when the error occurred. For errors that are not related to database drivers, the code argument is set to -4. If the PowerBuilder VM cannot get the syntax for these types of errors, an empty string is passed to the sqlsyntax argument. PowerBuilder cannot get the syntax for the following types of errors:



- Table 9.50:



|• "Cursor is not open"|• "Cursor is already open"|
|---|---|
|• "Procedure has not been executed or has no results"|• "Procedure has already been executed"|
|• "Transaction not connected"|• "Transaction already connected"|
|• "Transaction not connected. Transaction Pool limit exceeded"|• "Database does not support FETCH (FIRST/LAST/PRIOR )"|



The PowerBuilder VM can get the SQL syntax for the following types of errors, and passes it to the Transaction object's DBError event for the following types of errors:



- Table 9.51:




|• "Select returned more than one row"|• "Blob variable for UPDATEBLOB cannot be empty"|
|---|---|
|• "Mismatch between prepared number of substitution variables and execute parameters"|• "Open <cursor> or execute <procedure> must reference DESCRIPTOR"|
|• "Mismatch between retrieve columns and fetch columns"|• "Database does not support WHERE CURRENT OF <cursor-name>"|
|• "Database statement must refer to blob variable"| |



Use with embedded SQL



By default, whenever an error occurs in the Transaction object, the DBError event is called. The error code and error message are passed to this event. You can add code to the DBError event to handle these errors.



Use with DataWindow/DataStore When using a Transaction object with a DataWindow, the DataWindow DBError event is triggered before the DBError event of the Transaction object. The return value for the DataWindow DBError event is used to indicate whether the Transaction object's DBError event should be triggered in turn. When the return value of the DataWindow DBError event is 0 or 1, the Transaction object's DBError event is also triggered if it is defined. When the



return value of the DataWindow DBError event is 2 or 3, the Transaction object's DBError event is ignored.
