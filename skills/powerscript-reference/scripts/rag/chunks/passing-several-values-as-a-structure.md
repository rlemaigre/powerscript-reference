# Passing several values as a structure

To pass several values, create a user-defined structure to hold the values and access the PowerObjectParm property of the Message object in the opened window. The structure is passed by value, not by reference, so you can access the information even if the original structure has been destroyed.



See also the usage notes for Open, all of which apply to OpenWithParm. Examples



This statement opens an instance of a window named w_employee and stores the string parameter in Message.StringParm. The script for the window's Open event uses the string parameter as the text of a StaticText control st_empname. The script that opens the window has the following statement:



OpenWithParm(w_employee, "James Newton")



The window's Open event script has the following statement:



st_empname.Text = Message.StringParm



The following statements open an instance of a window of the type w_employee. Since the parameter is a number it is stored in Message.DoubleParm:



w_employee w_to_open integer age = 50 OpenWithParm(w_to_open, age)



The following statement opens an instance of a child window named cw_data and makes w_employee the parent. The window w_employee must already be open. The parameter benefit_plan is a string and is stored in Message.StringParm:



OpenWithParm(cw_data, "benefit_plan", w_employee)



See also CloseWithReturn Open



10.444.2 Syntax 2: For windows of unknown datatype Description



Opens a window object when you do not know its datatype until the application is running. OpenWithParm displays the window and makes all its properties and controls available to scripts. It also stores a parameter in the system's Message object.
