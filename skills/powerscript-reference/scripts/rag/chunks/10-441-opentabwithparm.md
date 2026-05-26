# 10.441 OpenTabWithParm

Adds a visual user object to the specified window and makes all its properties and controls available to scripts, as OpenTab does. OpenTabWithParm also stores a parameter in the system's Message object so that it is accessible to the opened object.



- Table 10.548:



|To open|Use|
|---|---|
|A user object as a tab page|Syntax 1|
|A user object as a tab page, allowing the application to select the user object's type at runtime|Syntax 2<br><br>|



10.441.1 Syntax 1: For user objects of a known datatype Description



Opens a custom visual user object of a known datatype as a tab page in a Tab control and stores a parameter in the system's Message object.



Applies to Tab controls Syntax



tabcontrolname.OpenTabWithParm ( userobjectvar, parameter, index )



- Table 10.549:




|Argument|Description|
|---|---|
|tabcontrolname|The name of the Tab control in which you want to open the user object as a tab page.|
|userobjectvar|The name of the custom visual user object you want to open as a tab page. You can specify a custom visual user object defined in the User Object painter (which is a user object datatype) or a variable of the desired user object datatype. OpenTabWithParm places a reference to the opened custom visual user object in userobjectvar.|
|parameter|The parameter you want to store in the Message object when the user object is opened. Parameter must have one of these datatypes:<br><br>• String<br>• Numeric<br>• PowerObject<br>|
|index|The number of the tab before which you want to insert the new tab. If index is 0 or greater than the number of tabs, the tab page is inserted at the end.|



OpenTabWithParm returns null. Usage



The system Message object has three properties for storing data. Depending on the datatype of the parameter specified for OpenTabWithParm, scripts for the opened user object would check one of the following properties.



- Table 10.550:




|Message object property|Argument datatype|
|---|---|
|message.DoublePa|Numericrm|
|message.PowerOb|jectParmPowerObject (PowerBuilder objects, including user-defined structures)|
|message.StringPar|mString|



In the opened user object, it is a good idea to access the value passed in the Message object immediately because some other script may use the Message object for another purpose.
