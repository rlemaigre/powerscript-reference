# Examples

The following script in the DateSelected event writes the date the user selected using the mouse to a single-line edit box:



date dt_selected integer li_ret string ls_date



li_ret = GetSelectedDate( dt_selected) ls_date = string(dt_selected) sle_2.text = ls_date



See also DateChanged



- 9.20 DBError Description Triggered when an error occurs during a transaction or an attempted transaction. Event ID


- Table 9.48:



|Event ID|Objects|
|---|---|
|None|Transaction objects|



Arguments



- Table 9.49:




|Argument|Description|
|---|---|
|code|Long by value. A database-specific error code. See your DBMS documentation for information on the meaning of the code. When there is no error code from the DBMS, code contains one of these values:<br><br>-1 -- Cannot connect to the database<br>-2 -- Writing a blob to the database failed<br>-4 -- All other errors (see Usage note for more detail)<br>|
|sqlerrortext|String by value. A database-specific error message.|
|sqlsyntax|String by value. The full text of the SQL statement being sent to the DBMS when the error occurred.|
