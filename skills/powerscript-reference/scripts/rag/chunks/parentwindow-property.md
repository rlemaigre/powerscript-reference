# ParentWindow property

You can use the ParentWindow property of the Menu object like a pronoun in Menu scripts. It identifies the window that the menu is associated with when your program is running. For more information, see the Section 13.6.3, “Referring to objects in your application” in Users Guide.



The rest of this section describes the individual pronouns in detail.



- 1.7.1 Parent pronoun Description Parent in a PowerBuilder script refers to the object that contains the current object. Usage You can use the pronoun Parent in scripts for:


- • Controls in windows
- • Custom user objects
- • Menus




Where you use Parent determines what it references: Window controls



When you use Parent in a script for a control (such as a CommandButton), Parent refers to the window that contains the control.



User object controls When you use Parent in a script for a control in a custom user object, Parent refers to the user object. Menus When you use Parent in a menu script, Parent refers to the menu item on the level above the menu the script is for. Examples Window controls



If you include this statement in the script for the Clicked event in a CommandButton within a window, clicking the button closes the window containing the button:



Close(Parent)



If you include this statement in the script for the CommandButton, clicking the button displays a horizontal scroll bar within the window (sets the HScrollBar property of the window to true):



Parent.HScrollBar = TRUE



User object controls



If you include this statement in a script for the Clicked event for a CheckBox in a user object, clicking the check box hides the user object:



Parent.Hide( )



If you include this statement in the script for the CheckBox, clicking the check box disables the user object (sets the Enabled property of the user object to false):



Parent.Enabled = FALSE



Menus



If you include this statement in the script for the Clicked event in the menu item Select All under the menu item Select, clicking Select All disables the menu item Select:



Parent.Disable( )



If you include this statement in the script for the Clicked event in the menu item Select All, clicking Select All checks the menu item Select:



Parent.Checked = TRUE



- 1.7.2 This pronoun Description




The pronoun This in a PowerBuilder script refers to the window, user object, menu, application object, or control that owns the current script.



Why include This



Using This allows you to make ownership explicit. The following statement refers to the current object's X property:



This.X = This.X + 50



When optional but helpful



In the script for an object or control, you can refer to the properties of the object or control without qualification, but it is good programming practice to include This to make the script clear and easy to read.



When required



There are some circumstances when you must use This. When a global or local variable has the same name as an instance variable, PowerBuilder finds the global or local variable first. Qualifying the variable with This allows you to refer to the instance variable instead of the global variable.
