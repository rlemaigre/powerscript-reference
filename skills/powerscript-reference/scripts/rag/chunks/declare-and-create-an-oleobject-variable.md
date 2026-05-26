# Declare and create an OLEObject variable

You must use the CREATE statement to allocate memory for an OLEObject variable, as shown in the example below.



When you create an OLEObject variable, make sure you destroy the object before it goes out of scope. When the object is destroyed it is disconnected from the server and the server is



closed. If the object goes out of scope without disconnecting, there will be no way to halt the server application.



Check the documentation for the server application to find out what properties and functions it supports. Some applications support a large number. For example, Excel has approximately 4000 operations you can automate.



The OLEObject datatype supports OLE automation as a background activity in your application. You can also invoke server functions and properties for an OLE object in an OLE control. To do so, specify the Object property of the control before the server function name. When you want to automate an object in a control, you do not need an OLEObject variable.



For example, the following changes a value in an Excel cell for the object in the OLE control ole_1:



ole_1.Object.application.cells(1,1).value = 14
