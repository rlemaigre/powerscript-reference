# Declarations and assignments

You declare Any variables just as you do any other variable. You can also declare an array of Any variables, where each element of the array can have a different datatype.



You assign data to Any variables with standard assignment statements. You can assign an array to a simple Any variable.



After you assign a value to an Any variable, you can test the variable with the ClassName function and find out the actual datatype:



any la_spreadsheetdata la_spreadsheetdata = ole_1.Object.cells(1,1).value CHOOSE CASE ClassName(la_spreadsheetdata)



CASE "integer"



... CASE "string"



... END CHOOSE



These rules apply to Any assignments:



- • You can assign anything into an Any variable.
- • You must know the content of an Any variable to make assignments from the Any variable




to a compatible datatype. Restrictions



If the value of a simple Any variable is an array, you cannot access the elements of the array until you assign the value to an array variable of the appropriate datatype. This restriction does not apply to the opposite case of an array of Any variables -- you can access each Any variable in the array.



If the value of an Any variable is a structure, you cannot use dot notation to access the elements of the structure until you assign the value to a structure of the appropriate datatype.



After a value has been assigned to an Any variable, it cannot be converted back to a generic Any variable without a datatype. Even if you set it to NULL, it retains the datatype of the assigned value until you assign another value.
