# 6.5.1 Overloading and overriding functions

To create an overloaded function, you declare the function as you would any function using Insert>Function.



Overriding means defining a function in a descendant object that has the same name and argument list as a function in the ancestor object. In the descendant object, the function in the descendant is always called instead of the one in the ancestor -- unless you use the scope resolution operator (::).



To override a function, open the descendant object in the painter, select the function in the Script view, and code the new script. The icon that indicates that there is a script for a function is half shaded when the function is inherited from an ancestor.



You can overload or override object functions only -- you cannot overload global functions.



- 6.5.1.1 Type promotion when matching arguments for overloaded functions




When you have overloaded a function so that one version handles numeric values and another version handles strings, it is clear to the programmer what arguments to provide to call each version of the function. Overloading with unrelated datatypes is a good idea and can provide needed functionality for your application.
