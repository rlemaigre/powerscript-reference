# 5.3 Assignment for objects and structures

In PowerBuilder, assignment for objects is different from assignment for structures or autoinstantiated objects:



- • When you assign one structure to another, the whole structure is copied so that there are two copies of the structure.
- • When you assign one object variable to another, the object reference is copied so that both variables point to the same object. There is only one copy of the object.




Events



- 5.3.1 Assignment for structures Declaring a structure variable creates an instance of that structure:




str_emp_data str_emp1, str_emp2 // Two structure instances



When you assign a structure to another structure, the whole structure is copied and a second copy of the structure data exists:



str_emp1 = str_emp2



The assignment copies the whole structure from one structure variable to the other. Each variable is a separate instance of the structure str_emp_data.
