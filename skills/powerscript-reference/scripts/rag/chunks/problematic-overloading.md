# Problematic overloading

If different versions of a function have arguments of related datatypes (different numeric types or strings and chars), you must consider how PowerBuilder promotes datatypes in



determining which function is called. This kind of overloading is undesirable because of potential confusion in determining which function is called.



When you call a function with an expression as an argument, the datatype of the expression might not be obvious. However, the datatype is important in determining what version of an overloaded function is called.



Because of the intricacies of type promotion for numeric datatypes, you might decide that you should not define overloaded functions with different numeric datatypes. Changes someone makes later can affect the application more drastically than expected if the change causes a different function to be called.
