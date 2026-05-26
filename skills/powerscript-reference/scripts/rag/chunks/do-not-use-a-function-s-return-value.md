# Do not use a function's return value

You should not initialize a variable by assigning it the return value of a global user defined function, because it might not compile correctly, or because it could lead to confusion about the value assigned. For example, do not use:



integer i = f_return_one()



Although you can use global system functions or expressions to initialize variables with compile time values in a variable declaration statement, for runtime value assignments, you must also declare variables and assign their values in separate statements.



This example declares li_count as an integer whose value is 5:



integer li_count=5



This example declares li_a and li_b as integers and initializes li_a to 5 and li_b to 10:



integer li_a=5, li_b=10



This example initializes ls_method with the string "UPS":



string ls_method="UPS"



This example initializes ls_headers to three words separated by tabs:



string ls_headers = "Name~tAddress~tCity"



This example initializes li_a to 1 and li_c to 100, leaving li_b set to its default value of zero:



integer li_a=1, li_b, li_c=100



This example declares ld_StartDate as a date and initializes it with the date February 1, 2004:



date ld_StartDate = 2004-02-01



Specifying an expression as an initial value You can initialize a variable with the value of an existing variable or expression, such as:



integer i = 100 integer j = i



When you do this, the second variable is initialized with the value of the expression when the script is compiled. The initialization is not reevaluated at runtime.



If the expression's value changes Because the expression's value is set to the variable when the script is compiled (not at runtime) make sure the expression is not one whose value is based on current conditions. If you want to specify an expression whose value will be different when the application is executed, do not initialize the variable in the declaration. For such values, declare the variable and assign the value in separate statements. In this declaration, the value of d_date is the date the script is compiled:



- date d_date = Today( ) In contrast, these statements result in d_date being set to the date the application is run:




date d_date d_date = Today( )
