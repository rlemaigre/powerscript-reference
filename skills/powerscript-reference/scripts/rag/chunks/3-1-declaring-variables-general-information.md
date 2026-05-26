# 3.1 Declaring variables General information

Before you use a variable in a PowerBuilder script, you must declare it (give it a datatype and a name).



A variable can be a standard datatype, a structure, or an object. Object datatypes can be system objects as displayed in the Browser or they can be objects you have defined by deriving them from those system object types. For most variables, you can assign it a value when you declare it. You can always assign it a value within a script.



- 3.1.1 Where to declare variables Scope




You determine the scope of a PowerScript variable by selecting where you declare it. Instance variables have additional access keywords that restrict specific scripts from accessing the variable.



The following table shows the four scopes of variables.



- Table 3.1: PowerScript variable scopes




|Scope|Description|
|---|---|
|Global|Accessible anywhere in the application. It is independent of any object definition.|
|Instance|Belongs to an object and is associated with an instance of that object (you can think of it as a property of the object). Instance variables have access keywords that determine whether scripts of other objects can access them. They can belong to the application object, a window, a user object, or a menu.|
|Shared|Belongs to an object definition and exists across all instances of the object. Shared variables retain their value when an object is closed and opened again.<br><br>Shared variables are always private. They are accessible only in scripts for the object and for controls associated with the object. They can belong to the application object, a window, a user object, or a menu.|
|Local|A temporary variable that is accessible only in the script in which you define it. When the script has finished executing, the variable constant ceases to exist.|
