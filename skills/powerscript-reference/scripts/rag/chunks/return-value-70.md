# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, OpenSheetWithParmInTabGroup returns null. In some cases, such as if the windowtype argument is invalid, OpenSheetWithParmInTabGroup throws a runtime error and does not return a value; therefore, it is recommended that you both test the return value and wrap the function call in a try-catch block. Usage



The first sheet opened in a main window cannot be opened using OpenSheetInTabGroup or OpenSheetWithParmInTabGroup. To create a tab group, open the first sheet as a docked sheet and then use that sheet as the siblingname argument.



The system Message object has three properties for storing data. Depending on the datatype of the parameter specified for OpenSheetWithParmInTabGroup, scripts for the opened sheet would check one of the following properties.



- Table 10.544:



|Message object property|Argument datatype|
|---|---|
|Message.DoublePa|Doublerm|
|Message.PowerOb|PowerObjectjectParm (PowerBuilder objects, including user-defined structures)|
|Message.StringPar|Stringm|



In the opened window, it is a good idea to access the value passed in the Message object immediately (because some other script may use the Message object for another purpose).



Avoiding null object references



When you pass a PowerObject as a parameter, you are passing a reference to the object. The object must exist when you refer to it later or you get a null object reference, which causes an error. For example, if you pass the name of a control on a window that is being closed, that control will not exist when a script accesses the parameter.



10.440 OpenTab



Opens a visual user object and makes it a tab page in the specified Tab control and makes all its properties and controls available to scripts.



- Table 10.545:




|To open|Use|
|---|---|
|A user object as a tab page|Syntax 1|
|A user object as a tab page, allowing the application to select the user object's type at runtime|Syntax 2<br><br>|
