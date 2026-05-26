# Overusing the Any datatype

Do not use Any variables as a substitute for selecting the correct datatype in your scripts. There are two reasons for this:



- • At execution time, using Any variables is slow



PowerBuilder must do much more processing to determine datatypes before it can make an assignment or perform an operation involving Any variables. In particular, an operation performed many times in a loop will suffer greatly if you use Any variables instead of variables of the appropriate type.



- • At compile time, using Any variables removes a layer of error checking from your programming




The PowerBuilder compiler makes sure datatypes are correct before code gets executed. With Any variables, some of the errors that can be caught by the compiler are not found until the code is run.
