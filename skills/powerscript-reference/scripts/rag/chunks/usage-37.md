# Usage

In searching for the function, PowerBuilder examines the collapsed inheritance hierarchy. The found function may be defined in the current object or in any of its ancestors.



Arguments passed by reference



To find a function with an argument that is passed by reference, you must specify the REF keyword. If you have a VariableDefinition object for a function argument, check the CallingConvention argument to determine if the argument is passed by reference.



In documentation for PowerBuilder functions, arguments passed by reference are described as a variable, rather than simply a value. The PowerBuilder Browser does not report which arguments are passed by reference.
