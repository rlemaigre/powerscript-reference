# Examples

All the classes shown in the Browser are actually datatypes that you can use in your applications. You can define variables whose type is any class.



For example, the following code defines window and menu variables:



window mywin menu mymenu



If you have a series of buttons in a window and need to keep track of one of them (such as the last one clicked), you can declare a variable of type CommandButton and assign it the appropriate button in the window:



// Instance variable in a window commandbutton LastClicked // In Clicked event for a button in the window. // Indicates that the button was the last one // clicked by the user. LastClicked = This



Because it is a CommandButton, the LastClicked variable has all the properties of a CommandButton. After the last assignment above, LastClicked's properties have the same values as the most recently clicked button in the window.



To learn more about working with instances of objects through datatypes, see About objects.
