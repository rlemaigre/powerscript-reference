# How shared variables are initialized

When you use a shared variable in a script, the variable is initialized when the first instance of the object is opened. When the object is closed, the shared variable continues to exist until you exit the application. If you open the object again without exiting the application, the shared variable will have the value it had when you closed the object.



For example, if you set the shared variable Count to 20 in the script for a window, then close the window, and then reopen the window without exiting the application, Count will be equal to 20.
