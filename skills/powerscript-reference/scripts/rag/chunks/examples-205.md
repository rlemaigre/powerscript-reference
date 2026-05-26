# Examples

This statement opens an instance of a user object named u_Employee as a tab page in the Tab control tab_1:



tab_1.OpenTab(u_Employee, 0)



The following statements open an instance of a user object u_to_open as a tab page in the Tab control tab_1. It becomes the first tab in the control:



u_employee u_to_open tab_1.OpenTab(u_to_open, 1)



See also OpenTabWithParm



- 10.440.2 Syntax 2: For user objects of unknown datatype Description




Opens a visual user object as a tab page within a Tab control when the datatype of the user object is not known until the script is executed.



Applies to Tab controls Syntax



tabcontrolname.OpenTab ( userobjectvar, userobjecttype, index )
