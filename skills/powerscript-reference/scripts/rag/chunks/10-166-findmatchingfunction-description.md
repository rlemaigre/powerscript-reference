# 10.166 FindMatchingFunction Description

Finds out what function in a class matches a specified signature. The signature is a combination of a script name and an argument list.



Applies to ClassDefinition objects Syntax



classdefobject.FindMatchingFunction ( scriptname, argumentlist )



- Table 10.204:




|Argument|Description|
|---|---|
|classdefobject|The name of the ClassDefinition object describing the class in which you want to find a function.|
|scriptname|A string whose value is the name of the function.|
|argumentlist|An unbounded array of strings whose values are the datatypes of the function arguments. If the variable is passed by reference, the string must include "ref" before the datatype. If the variable is an array, you must include array brackets after the datatype.<br><br>The format is:<br><br>{ ref } datatype { [] }<br><br>For a bounded array, the argument must include the range, as in:<br><br>ref integer[1 TO 10]|
