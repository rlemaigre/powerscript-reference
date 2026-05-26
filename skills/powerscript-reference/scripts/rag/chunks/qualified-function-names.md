# Qualified function names

You can qualify an object function using dot notation to ensure that the object function is found, not a global function of the same name. With a qualified name, the search for a matching function involves the ancestor hierarchy only (item 3 in the search list above), as shown in the following examples of function calls:



dw_1.Update( ) w_employee.uf_process_list() This.uf_process_list()



When PowerBuilder searches the ancestor hierarchy for a function, you can specify that you want to call an ancestor function instead of a matching descendant function.



For the syntax for calling ancestor functions, see Calling functions and events in an object's ancestor.
