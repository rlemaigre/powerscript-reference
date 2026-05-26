# Examples

This statement displays an instance of a user object named u_Employee in the upper left corner of window w_emp (coordinates 0,0):



w_emp.OpenUserObject(u_Employee)



The following statements display an instance of a user object u_to_open at 200,100 in the window w_empstatus:



u_employee u_to_open w_empstatus.OpenUserObject(u_to_open, 200, 100)



The following statement displays an instance of a user object u_data at location 20,100 in w_info:



w_info.OpenUserObject(u_data, 20, 100)



See also OpenUserObjectWithParm



- 10.442.2 Syntax 2: For user objects of unknown datatype Description




Opens a user object when the datatype of the user object is not known until the script is executed.



Applies to Window objects and visual user objects
