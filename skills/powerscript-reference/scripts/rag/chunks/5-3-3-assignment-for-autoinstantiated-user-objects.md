# 5.3.3 Assignment for autoinstantiated user objects

Declaring an autoinstantiated user object creates an instance of that object (just like a structure). The CREATE statement is not allowed for objects with the Autoinstantiate setting. In the following example, uo_emp_data has the Autoinstantiate setting:



uo_emp_data uo_emp1, uo_emp2 // Two object instances



When you assign an autoinstantiated object to another autoinstantiated object, the whole object is copied to the second variable:



uo_emp1 = uo_emp2



You never have multiple references to an autoinstantiated user object. Passing to a function When you pass an autoinstantiated user object to a function, it behaves like a structure:



- • Passing by value passes a copy of the object.
- • Passing by reference passes a pointer to the object variable, just as for any standard datatype.
- • Passing as read-only passes a copy of the object but that copy cannot be modified.
