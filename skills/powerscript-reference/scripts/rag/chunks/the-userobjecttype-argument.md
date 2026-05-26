# The userobjecttype argument

When you use Syntax 2, PowerBuilder opens an instance of a user object of the datatype specified in userobjecttype and places a reference to this instance in the variable userobjectvar. To refer to the instance in scripts, use userobjectvar.



If userobjecttype is a descendant user object, you can only refer to properties, events, functions, or structures that are part of the definition of userobjectvar. For example, if a user event is declared for userobjecttype, you cannot reference it.



The object specified in userobjecttype is not automatically included in your executable application. To include it, you must save it in a PBD file (PowerBuilder dynamic library) that you deliver with your application.
