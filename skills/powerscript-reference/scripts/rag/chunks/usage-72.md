# Usage

The system Message object has three properties for storing data. Depending on the datatype of the parameter specified for OpenSheetWithParm, scripts for the opened sheet would check one of the following properties.



- Table 10.536:




|Message object property|Argument datatype|
|---|---|
|Message.DoublePa|Numericrm|
|Message.PowerOb|PowerObjectjectParm (PowerBuilder objects, including user-defined structures)|
|Message.StringPar|Stringm|



In the opened window, it is a good idea to access the value passed in the Message object immediately (because some other script may use the Message object for another purpose).
