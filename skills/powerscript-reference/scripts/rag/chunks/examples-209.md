# Examples

This statement displays an instance of a user object named u_Employee in the window w_emp and stores the string James Newton in Message.StringParm. The Constructor event script for the user object uses the string parameter as the text of a StaticText control st_empname in the object. The script that opens the user object has the following statement:



w_emp.OpenUserObjectWithParm(u_Employee, "Jim Newton")



The target user object's Constructor event script has the following statement:



st_empname.Text = Message.StringParm



The following statements display an instance of a user object u_to_open in the window w_emp and store a number in message.DoubleParm:



u_employee u_to_open integer age = 50 w_emp.OpenUserObjectWithParm(u_to_open, age)



See also CloseWithReturn OpenUserObject OpenWithParm



- 10.443.2 Syntax 2: For user objects of unknown datatype Description




Opens a user object when the datatype of the user object is not known until the script is executed. In addition, OpenUserObjectWithParm stores a parameter in the system's Message object so that it is accessible to the opened object.



Applies to Window objects and user objects Syntax



objectname.OpenUserObjectWithParm ( targetobjectvar, parameter, targetobjecttype {, x, y } )
