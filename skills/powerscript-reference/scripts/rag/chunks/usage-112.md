# Usage

Use SetNull to set a variable to null before writing it to the database. Note that PowerBuilder does not initialize variables to null; it initializes variables to the default initial value for the datatype unless you specify a value when you declare the variable.



If you assign a value to a variable whose datatype is Any and then set the variable to null, the datatype of the null value is still the datatype of the assigned value. You cannot untype an Any variable with the SetNull function.



Examples This statement sets the variable Salary to null:



SetNull(Salary)



See also IsNull
