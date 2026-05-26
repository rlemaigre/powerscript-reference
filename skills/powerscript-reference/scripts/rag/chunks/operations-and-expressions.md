# Operations and expressions

You can perform operations on Any variables as long as the datatype of the data in the Any variable is appropriate to the operator. If the datatype is not appropriate to the operator, an execution error occurs.



For example, if instance variables ia_1 and ia_2 contain numeric data, this statement is valid:



any la_3 la_3 = ia_1 - ia_2



If ia_1 and ia_2 contain strings, you can use the concatenation operator:



any la_3 la_3 = ia_1 + ia_2



However, if ia_1 contained a number and ia_2 contained a string, you would get an execution error.



Datatype conversion functions



PowerScript datatype conversion functions accept Any variables as arguments. When you call the function, the Any variable must contain data that can be converted to the specified type.



For example, if ia_any contains a string, you can assign it to a string variable:



ls_string = ia_any



If ia_any contains a number that you want to convert to a string, you can call the String function:



ls_string = String(ia_any)



Other functions If a function's prototype does not allow Any as a datatype for an argument, you cannot use an Any variable without a conversion function, even if it contains a value of the correct datatype. When you compile the script, you get compiler errors such as Unknown function or Function not found. For example, the argument for the Len function refers to a string column in a DataWindow, but the expression itself has a type of Any:



IF Len(dw_notes.Object.Notes[1]) > 0 THEN // Invalid



This works because the string value of the Any expression is explicitly converted to a string:



IF Len(String(dw_notes.Object.Notes[1])) > 0 THEN



Expressions whose datatype is Any Expressions that access data whose type is unknown when the script is compiled have a datatype of Any. These expressions include expressions or functions that access data in an OLE object or a DataWindow object:



myoleobject.application.cells(1,1).value dw_1.Object.Data[1,1] dw_1.Object.Data.empid[99]



The objects these expressions point to can change so that the type of data being accessed also changes.



Expressions that refer to DataWindow data can return arrays and structures and arrays of structures as Any variables. For best performance, assign the DataWindow expression to the appropriate array or structure without using an intermediate Any variable.
