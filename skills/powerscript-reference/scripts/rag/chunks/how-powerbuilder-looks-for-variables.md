# How PowerBuilder looks for variables

When PowerBuilder executes a script and finds an unqualified reference to a variable, it searches for the variable in the following order:



- 1. A local variable
- 2. A shared variable
- 3. A global variable
- 4. An instance variable




As soon as PowerBuilder finds a variable with the specified name, it uses the variable's value. Referring to global variables



To refer to a global variable, you specify its name in a script. However, if the global variable has the same name as a local or shared variable, the local or shared variable will be found first.



To refer to a global variable that is masked by a local or shared variable of the same name, use the global scope operator (::) before the name:



::globalname



For example, this statement compares the value of local and global variables, both named total:



IF total < ::total THEN ...
