# 6.6.1 Passing objects

When you pass an object to a function or event, the object must exist when you refer to its properties and functions. If you call the function but the object has been destroyed, you get the execution error for a null object reference. This is true whether you pass by reference, by value, or read-only.



To illustrate, suppose you have a window with a SingleLineEdit. If you post a function in the window's Close event and pass the SingleLineEdit, the object does not exist when the function executes. To use information from the SingleLineEdit, you must pass the information itself, such as the object's text, rather than the object. When passing an object, you never get another copy of the object. By reference and by value affect the object reference, not the object itself.
