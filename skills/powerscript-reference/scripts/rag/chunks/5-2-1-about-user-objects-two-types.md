# 5.2.1 About user objects Two types

There are two major types of user objects: visual and class. Visual user objects



A visual user object is a reusable control or set of controls that has a certain behavior. There are three types -- standard, custom, and external.



- Table 5.1: Visual user object types



|Visual user objects|Description|
|---|---|
|Standard|Inherited from a specific visual control. You can set properties and write scripts so that the control is ready for use.<br><br>It has the same events and properties as the control it is inherited from plus any that you add.|
|Custom|Inherited from the UserObject system class. You can include many controls in the user object and write scripts for their events.<br><br>Each control in the user object has the same events and properties as the controls from which they are inherited plus any that you add.|
|External|A user object that displays a visual control defined in a DLL. The control is not part of the PowerBuilder object hierarchy. The DLL developer provides information for setting style bits that control its presentation.<br><br>Its events, functions, and properties are specified by the developer of the DLL.<br><br>An external user object is not the same as an OCX, which you can put in an OLE control.|



Class user objects



Class user objects consist of properties, functions, and sometimes events. They have no visual component. There are two types -- standard and custom.



- Table 5.2: Class user object types




|Class user objects|Description|
|---|---|
|Standard|Inherits its definition from a nonvisual PowerBuilder object, such as the Transaction or Error object. You can add instance variables and functions.<br><br>A few nonvisual objects have events to write scripts for these events, you have to define a class user object.|
|Custom|An object of your own design for which you define instance variables, events, and functions in order to encapsulate application-specific programming in an object.|



For information on defining and using user objects, see the Chapter 14, Working with User Objects in Users Guide.
