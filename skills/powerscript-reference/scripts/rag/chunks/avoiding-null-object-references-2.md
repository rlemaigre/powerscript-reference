# Avoiding null object references

When you pass a PowerObject as a parameter, you are passing a reference to the object. The object must exist when you refer to it later or you get a null object reference, which causes an error. For example, if you pass the name of a control on a window that is being closed, that control will not exist when a script accesses the parameter.



See also the usage notes for OpenTab, all of which apply to OpenTabWithParm. Examples



This statement opens an instance of a user object named u_Employee as a tab page in the Tab control tab_empsettings. It also stores the string James Newton in Message.StringParm. The Constructor event script for the user object uses the string parameter as the text of a StaticText control st_empname in the object. The script that opens the tab page has the following statement:



tab_empsettings.OpenTabWithParm(u_Employee, & "James Newton", 0)



The user object's Constructor event script has the following statement:



st_empname.Text = Message.StringParm



The following statements open an instance of a user object u_to_open as the first tab page in the Tab control tab_empsettings and store a number in message.DoubleParm. The last statement selects the tab page:



u_employee u_to_open integer age = 50 tab_1.OpenTabWithParm(u_to_open, age, 1) tab_1.SelectTab(u_to_open)



See also OpenTab



10.441.2 Syntax 2: For user objects of unknown datatype Description



Opens a visual user object as a tab page within a Tab control when the datatype of the user object is not known until the script is executed. In addition, OpenTabWithParm stores a parameter in the system's Message object so that it is accessible to the opened object.



Applies to Tab controls Syntax



tabcontrolname.OpenTabWithParm ( userobjectvar, parameter, userobjecttype, index )
