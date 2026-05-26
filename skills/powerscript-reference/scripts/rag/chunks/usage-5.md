# Usage

Function and event names are not case sensitive. For example, the following three statements are equivalent:



Clipboard("PowerBuilder") clipboard("PowerBuilder") CLIPBOARD("PowerBuilder")



Calling arguments The type, calltype, and when keywords can be in any order after objectname. Not all options in the syntax apply to all types. For example, there is no point in calling a system PowerScript object function dynamically. It always exists, and the dynamic call incurs extra overhead. However, if you had a user-defined function of the same name that applied to a different object, you might call that function dynamically. User-defined global functions and system functions can be triggered or posted but they cannot be called dynamically. Finding functions



If a global function does not exist with the given name, PowerBuilder will look for an object function that matches the name and argument list before it looks for a PowerBuilder system function.



Calling functions and events in the ancestor



If you want to circumvent the usual search order and force PowerBuilder to find a function or event in an ancestor object, bypassing it in the descendant, use the ancestor operator (::).



For more information about the scope operator for ancestors, see Calling functions and events in an object's ancestor.



Cascaded calls



Calls can be cascaded using dot notation. Each function or event call must return an object type that is the appropriate object for the following call.



For more information about cascaded calls, see Using cascaded calling and return values. Using return values



If the function has a return value, you can call the function on the right side of an assignment statement, as an argument for another function, or as an operand in an expression.



External functions



Before you can call an external function, you must declare it. For information about declaring external functions, see Declaring external functions.
