# Restoring the arrow pointer

The pointer automatically changes back to an arrow when the script finishes executing. You do not have to change it back to an arrow.



In PowerBuilder's painters, you can specify the pointer shape that PowerBuilder displays when the user moves the pointer over a window, a control, or specific parts of a DataWindow object. The available shapes include the stock pointers listed above, as well as any custom cursor files you have.



Examples This statement sets the pointer to the hourglass shape:



SetPointer(HourGlass!)



This example saves the old pointer and restores it when a long activity is completed:



pointer oldpointer // Declares a pointer variable oldpointer = SetPointer(HourGlass!)



... // Performs some long activity SetPointer(oldpointer)



- 10.629.2 Syntax 2: File-defined shape Description Sets the mouse pointer to a specified system-defined shape.
