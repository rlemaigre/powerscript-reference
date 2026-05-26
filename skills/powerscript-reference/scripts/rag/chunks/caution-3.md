# Caution

The arguments applname and topic must match the arguments in a prior StartServerDDE call.



Examples This statement causes the PowerBuilder application MyPBApp to stop acting as a server:



StopServerDDE(w_emp, "MyPBApp", "System")



See also StartServerDDE



- 10.691 String String has two syntaxes.


- Table 10.861:



|To|Use|
|---|---|
|Format data as a string according to a specified display format mask|Syntax 1|
|Convert a blob to a string|Syntax 2<br><br>|



- 10.691.1 Syntax 1: For formatting data Description




Formats data, such as time or date values, according to a format mask. You can convert and format date, DateTime, numeric, and time data. You can also apply a display format to a string.



Syntax



String ( data, { format } )



- Table 10.862:




|Argument|Description|
|---|---|
|data|The data you want returned as a string with the specified formatting. Data can have a date, DateTime, numeric, time, or string datatype. Data can also be an Any variable containing one of these datatypes.|
|format (optional)|A string whose value is the display masks you want to use to format the data. The masks consists of formatting information specific to the datatype of data. If data is type string, format is required.|



|Argument|Description|
|---|---|
| |The format can consist of more than one mask, depending on the datatype of data. Each mask is separated by a semicolon. (For details on each datatype, see Usage).|



Return value String.



Returns data in the specified format if it succeeds and the empty string ("") if the datatype of data does not match the type of display mask specified, format is not a valid mask, or data is an incompatible datatype.
