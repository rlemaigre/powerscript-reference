# Syntax

- Syntax 1 (specifies the object type at compilation): objectvariable = CREATE objecttype


- Table 7.5:



|Parameter|Description|
|---|---|
|objectvariable|A global, instance, or local variable whose datatype is objecttype|
|objecttype|The object datatype|



- Syntax 2 (allows the application to choose the object type dynamically): objectvariable = CREATE USING objecttypestring


- Table 7.6:




|Parameter|Description|
|---|---|
|objectvariable|A global, instance, or local variable whose datatype is the same class as the object being created or an ancestor of that class|
|objecttypestring|A string whose value is the name of the class datatype to be created|
