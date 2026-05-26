# Syntax

CONSTANT { access } datatype constname = value



The following table shows the parameters used to declare constants.



- Table 3.5: Constant variable declaration parameters




|Parameter|Description|
|---|---|
|CONSTANT|Declares a constant instead of a variable. The CONSTANT keyword can be before or after the access keywords.|
|access (optio|nal)(For instance variables only) Keywords specifying the access for the constant. For information, see Access for instance variables.<br><br>|
|datatype|A standard datatype for the constant. For decimals, you can include an optional value in brackets to specify the precision of the data. Blobs cannot be constants.<br><br>For information about PowerBuilder datatypes, see Standard datatypes.<br><br>|
|constname|The name of the constant (must be a valid PowerScript identifier, as described in Identifier names).<br><br>|
|value|A literal or expression of the appropriate datatype that will be the value of the constant. The value is required. For information, see Initial values for variables.<br><br>|
