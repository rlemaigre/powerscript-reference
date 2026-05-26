# See also Sort

- 10.681 Space Description Builds a string of the specified length whose value consists of spaces. Syntax Space ( n )


- Table 10.846:



|Argument|Description|
|---|---|
|n|A long whose value is the length of the string to be filled with spaces. The maximum value is 2,147,483,647.|



Return value String. Returns a string filled with n spaces if it succeeds and the empty string ("") if an error occurs. If n is null, Space returns null. Examples This statement puts a string whose value is four spaces in Name:



string Name Name = Space(4)



This statement assigns 40 spaces to the string Name:



string Name Name = Space(40)



See also Fill Space method for DataWindows in Section 2.4.117, “Space” in DataWindow Reference.



10.682 Sqrt



Description Calculates the square root of a number. Syntax



Sqrt ( n )



- Table 10.847:




|Argument|Description|
|---|---|
|n|The number for which you want the square root|



Return value Double. Returns the square root of n. If n is null, Sqrt returns null. Usage Sqrt (n) is the same as n^.5. Taking the square root of a negative number causes an execution error. Examples This statement returns 1.414213562373095:



Sqrt(2)



This statement results in an error at execution time:



Sqrt(-2)



See also Sqrt method for DataWindows in Section 2.4.118, “Sqrt” in DataWindow Reference.



- 10.683 Start Start has two basic syntaxes.


- Table 10.848:



|To|Use|
|---|---|
|Execute a pipeline object|Syntax 1|
|Activate a timing object|Syntax 2<br><br>|



- 10.683.1 Syntax 1: For executing pipeline objects Description




Executes a pipeline object, which transfers data from the source to the destination as specified by the SQL query in the pipeline object. This pipeline object is a property of a user object inherited from the pipeline system object.



Applies to Pipeline objects Syntax



pipelineobject.Start ( sourcetrans, destinationtrans, errorobject {, arg1, arg2,..., argn } )



- Table 10.849:




|Argument|Description|
|---|---|
|pipelineobject|The name of a pipeline user object that contains the pipeline object to be executed|
|sourcetrans|The name of a transaction object with which to connect to the source database|
|destinationtrans|The name of a transaction object with which to connect to the target database|
|errorobject|The name of a DataWindow control or Data Store in which to store the pipeline error DataWindow|
|argn (optional)|One or more retrieval arguments as specified for the pipeline object in the Data Pipeline painter|
