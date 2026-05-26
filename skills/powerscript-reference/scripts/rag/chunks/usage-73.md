# Usage

Use Syntax 1 when you know what user object you want to open. Use Syntax 2 when the application will determine what type of user object to open when the script runs.



You must open a user object before you can access its properties. If you access the user object's properties before you open it, an execution error occurs.



A user object that is part of a window definition (for example, if you added it in the Window painter), you do not need to open it using a script: PowerBuilder opens the object when it opens the window.



At runtime, OpenUserObject adds the newly opened user object to the first object's Control array.



Target objects are not automatically closed at runtime when you open and then close objectname. You need to explicitly call CloseUserObject to destroy a target user object, usually when the objectname object closes. If you do not destroy the target object, it holds on to its allocated memory, resulting in a memory leak.



PowerBuilder displays the user object when it next updates the display or at the end of the script, whichever comes first. For example, if you open several user objects in a script, they all display at once when the script is complete, unless some other statements cause a change in the screen's appearance (for example, the MessageBox function displays a message or the script changes a visual property of a control).
