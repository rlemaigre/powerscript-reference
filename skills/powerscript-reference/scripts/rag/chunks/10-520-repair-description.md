# 10.520 Repair Description

Updates the target database with corrections that have been made in the pipeline user object's Error DataWindow.



Applies to Pipeline objects Syntax



pipelineobject.Repair ( destinationtrans )



- Table 10.644:




|Argument|Description|
|---|---|
|pipelineobject|The name of a pipeline user object that contains the pipeline object being executed|
|destinationtrans|The name of a transaction object with which to connect to the target database|



Return value Integer. Returns 1 if it succeeds and a negative number if an error occurs. Error values are:



- -5 -- Missing connection
- -9 -- Fatal SQL error in destination
- -10 -- Maximum number of errors exceeded
- -11 -- Invalid window handle
- -12 -- Bad table syntax
- -15 -- Pipe already in progress
- -17 -- Error in destination database
- -18 -- Destination database is read-only If any argument's value is null, Repair returns null. Usage




When errors have occurred during a pipeline data transfer, Start populates its pipeline-error DataWindow control with the rows that caused the errors. The user or a script can then make corrections to the data. The Repair function is usually associated with a CommandButton that the user can click after correcting data in the pipeline-error DataWindow.



If errors occur again, the rows that are in error remain in the pipeline-error DataWindow. The user can correct the data again and click the button that calls Repair.
