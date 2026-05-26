# How instance variables are initialized

When you define an instance variable for a window, menu, or application object, the instance variable is initialized when the object is opened. Its initial value is the default value for its datatype or the value specified in the variable declarations.



When you close the object, the instance variable ceases to exist. If you open the object again, the instance variable is initialized again.



When to use multiple instances of windows When you build a script for one of multiple instances of a window, instance variables can have a different value in each instance of the window. For example, to set a flag based on the contents of the instance of a window, you would use an instance variable.



When to use shared variables instead Use a shared variable instead of an instance variable if you need a variable that:



- • Keeps the same value over multiple instances of an object
- • Continues to exist after the object is closed


- 3.1.3.4 Access for instance variables Description




The general syntax for declaring PowerScript variables (see Syntax of a variable declaration) showed that you can specify access keywords in a declaration for an instance variable. This section describes those keywords.



When you specify an access right for a variable, you are controlling the visibility of the variable or its visibility access. Access determines which scripts recognize the variable's name.



For a specified access right, you can control operational access with modifier keywords. The modifiers specify which scripts can read the variable's value and which scripts can change it.
