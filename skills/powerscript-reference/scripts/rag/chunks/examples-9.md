# Examples

To illustrate, suppose you have these declarations. Uo_emp_active and uo_emp_inactive are autoinstantiated objects that are descendants of non-autoinstantiated uo_emp_data:



uo_emp_data uo_emp1 // Ancestor uo_emp_active uo_empa, uo_empb // Descendants uo_emp_inactive uo_empi // Another descendant



- Example of rule 1




When assigning one instance to another from the user objects declared above, some assignments are not allowed by the compiler:



uo_empb = uo_empa // Allowed, same type



uo_empa = uo_empi // Not allowed, different types



- Example of rule 2



After this assignment, uo_emp1 contains a copy of the descendant object uo_empa. Uo_emp_data (the type for uo_emp1) must not be autoinstantiated. Otherwise, the assignment violates rule 1. If uo_emp1 is autoinstantiated, a compiler error occurs:



uo_emp1 = uo_empa



- Example of rule 3




This assignment is only allowed if uo_emp1 contains an instance of its descendant uo_empa, which it would if the previous assignment had occurred before this one:



uo_empa = uo_emp1



If it did not contain an instance of target descendant type, an execution error would occur. For more information about passing arguments to functions and events, see Passing arguments to functions and events.
