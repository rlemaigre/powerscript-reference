# Examples

The following code in the DBError event displays the error message and the SQL statement sent to the DBMS when a transaction error occurs:



Messagebox("Transaction error","Error message: "&



+sqlerrortext + "~r~n Occurred for this statement:"&



+sqlsyntax)



See also DBError in Section 8.12, “DBError” in DataWindow Reference SQLPreview
