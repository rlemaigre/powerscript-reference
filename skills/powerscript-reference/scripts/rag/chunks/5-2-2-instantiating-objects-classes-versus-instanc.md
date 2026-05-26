# 5.2.2 Instantiating objects Classes versus instances

Because of the way PowerBuilder object classes and instances are named, it is easy to think they are the same thing. For example, when you define a window in the Window painter, you are defining an object class.



One instance



When you open a window with the simplest format of the Open function, you are instantiating an object instance. Both the class definition and the instance have the same name. In your application, w_main is a global variable of type w_main:



Open(w_main)



When you open a window this way, you can only open one instance of the object. Several instances



If you want to open more than one instance of a window class, you need to define a variable to hold each object reference:



w_main w_1, w_2 Open(w_1) Open(w_2)



You can also open windows by specifying the class in the Open function:



window w_1, w_2 Open(w_1, "w_main") Open(w_2, "w_main")



For class user objects, you always define a variable to hold the object reference and then instantiate the object with the CREATE statement:



uo_emp_data uo_1, uo_2 uo_1 = CREATE uo_emp_data uo_2 = CREATE uo_emp_data



You can have more than one reference to an object. You might assign an object reference to a variable of the appropriate type, or you might pass an object reference to another object so that it can change or get information from the object.



For more information about object variables and assignment, see User objects that behave like structures.
