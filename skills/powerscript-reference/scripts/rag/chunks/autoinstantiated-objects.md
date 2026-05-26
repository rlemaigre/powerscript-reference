# Autoinstantiated objects

If you want a user object that has methods and inheritance but want the memory allocation of a structure, you can define an autoinstantiated object.



You do not have to create and destroy autoinstantiated objects. Like structures, they are created when they are declared and destroyed when they go out of scope. However, because assignment for autoinstantiated objects behaves like structures, the copies made of the object can be a drawback.



To make a custom class user object autoinstantiated, select the Autoinstantiate check box on the user object's property sheet.
