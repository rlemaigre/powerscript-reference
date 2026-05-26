# Restriction on assignment

If the structures have different definitions, you cannot assign one to another, even if they have the same set of variable definitions.



For example, this assignment is not allowed:



str_emp str_person1 str_cust str_person2 str_person2 = str_person1 // Not allowed



For information about passing structures as function arguments, see Passing arguments to functions and events.



- 5.3.2 Assignment for objects Declaring an object variable declares an object reference: uo_emp_data uo_emp1, uo_emp2 // Two object references Using the CREATE statement creates an instance of the object:


- uo_emp1 = CREATE uo_emp_data



When you assign one object variable to another, a reference to the object instance is copied. Only one copy of the object exists:



- uo_emp2 = uo_emp1 // Both point to same object instance Ancestor and descendant objects




Assignments between ancestor and descendant objects occur in the same way, with an object reference being copied to the target object. Suppose that uo_emp_data is an ancestor user object of uo_emp_active and uo_emp_inactive. Declare variables of the ancestor type:



uo_emp_data uo_emp1, uo_emp2



Create an instance of the descendant and store the reference in the ancestor variable:



- uo_emp1 = CREATE USING "uo_emp_active"



Assigning uo_emp1 to uo_emp2 makes both variables refer to one object that is an instance of the descendant uo_emp_active:



- uo_emp2 = uo_emp1




For information about passing objects as function arguments, see Passing arguments to functions and events.
