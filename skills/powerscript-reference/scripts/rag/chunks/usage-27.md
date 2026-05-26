# Usage

The class is the name of an object. You assign the name when you save the object in its painter. Usually the class and the object itself appear to be the same (because PowerBuilder declares a variable with the same name as the class for the object). However, if you have declared multiple instances of an object, it is clear that the object's class and the object's variable are different.



If an ancestor object has been instantiated with one of its descendants, you can use ClassName to find the name of the descendant.



TypeOf reports an object's built-in object type. The types are values of the Object enumerated datatype, such as Window! or CheckBox!. ClassName reports the class of the object in the ancestor-descendant hierarchy.



Examples These statements return the class of the dragged control Source:



DragObject Source string which_class



Source = DraggedObject() which_class = Source.ClassName()



These statements return the class of the objects in the control array and store them in the_class array:



string the_class[] windowobject the_object[] integer i



FOR i = 1 TO UpperBound(control[]) the_object[i] = control[i] the_class[i] = the_object[i].ClassName()



NEXT



Suppose your object hierarchy has a window named ancestor_window and it has descendants called win1 and win2, and the user can choose which descendant to open as a sheet. The following code tests which descendant window class is currently active (the MDI frame is w_frame):



ancestor_window active_window active_window = w_frame.GetActiveSheet() IF ClassName(active_window) = "win1" THEN



. . . END IF



See also DraggedObject (obsolete) TypeOf



10.60.2 Syntax 2: For variables Description Provides the datatype of a variable. Syntax



ClassName ( variable )



- Table 10.73:




|Argument|Description|
|---|---|
|variable|The name of the variable for which you want to know its name (that is, its datatype)|
