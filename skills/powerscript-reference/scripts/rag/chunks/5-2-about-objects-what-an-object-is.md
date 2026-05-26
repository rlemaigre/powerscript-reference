# 5.2 About objects What an object is

In object-oriented programming, an object is a self-contained module containing state information and associated methods. Most entities in PowerBuilder are objects: visual objects such as windows and controls on windows, nonvisual objects such as transaction and error objects, and user objects that you design yourself.



An object class is a definition of an object. You create an object's definition in the appropriate painter: Window, Menu, Application, Structure, or User Object painter. In the painter, you add controls to be part of the object, specify initial values for the object's properties, define its instance variables and functions, and write scripts for its events and functions.



An object instance is an occurrence of the object created during the execution of your application. Your code instantiates an object when it allocates memory for the object and defines the object based on the definition in the object class.



An object reference is your handle to the object instance. To interact with an object, you need its object reference. You can assign an object reference to a variable of the appropriate type.
