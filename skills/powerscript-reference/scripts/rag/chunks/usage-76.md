# Usage

The system Message object has three properties for storing data. Depending on the datatype of the parameter specified for OpenUserObjectWithParm, scripts for the opened user object check one of the following properties.



- Table 10.560:




|Message object property|Argument datatype|
|---|---|
|message.DoublePa|Numericrm|
|message.PowerOb|jectParmPowerObject (PowerBuilder objects, including user-defined structures)|
|message.StringPar|mString|



In the target user object, consider accessing the value passed in the Message object immediately, because some other script may use the Message object for another purpose.
