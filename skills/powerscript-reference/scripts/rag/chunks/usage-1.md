# Usage

Whether to use Super



If you are calling an ancestor function, you only need to use Super if the descendant has a function with the same name and the same arguments as the ancestor function. Otherwise, you would simply call the function with no qualifiers.



Restrictions for Super



You cannot use Super to call scripts associated with controls in the ancestor window. You can only use Super in an event or function associated with a direct descendant of the ancestor whose function is being called. Otherwise, the compiler returns a syntax error.



To call scripts associated with controls, use the CALL statement. See the discussion of CALL. Examples



- Example 1



This example calls the ancestor function wf_myfunc (presumably the descendant also has a function called wf_myfunc):



Super::wf_myfunc(myarg1, myarg2)



This example must be part of a script or function in the descendant window, not one of the window's controls. For example, if it is in the Clicked event of a button on the descendant window, you get a syntax error when the script is compiled.



Supplying arguments Be certain to supply the correct number of arguments for the ancestor function.



- Example 2




This example in a CommandButton script calls the Clicked script for the CommandButton in the immediate ancestor window or user object:



Super::EVENT Clicked()
