# Syntax

{ access-right } { readaccess } { writeaccess } datatype variablename



The following table describes the parameters you can use to specify access rights for instance variables.



- Table 3.4: Instance variable declaration parameters for access rights




|Parameter|Description|
|---|---|
|accessright (optiona|l) A keyword specifying where the variable's name will be recognized. Values are:<br><br>• PUBLIC -- (Default) Any script in the application can refer to the variable. In another object's script, you use dot notation to qualify the variable name and identify the object it belongs to.<br>• PROTECTED -- Scripts for the object for which the variable is declared and its descendants can refer to the variable.<br>• PRIVATE -- Scripts for the object for which the variable is declared can refer to the variable. You cannot refer to the variable in descendants of the object.<br>|
|readaccess (op|Ational)keyword restricting the ability of scripts to read the variable's value. Values are:<br><br>• PROTECTEDREAD -- Only scripts for the object and its descendants can read the variable.<br>• PRIVATEREAD -- Only scripts for the object can read the variable.<br>|



|Parameter|Description|
|---|---|
| |When access-right is PUBLIC, you can specify either keyword. When accessright is PROTECTED, you can specify only PRIVATEREAD. You cannot specify a modifier for PRIVATE access, because PRIVATE is already fully restricted.<br><br>If readaccess is omitted, any script can read the variable.|
|writeaccess (o|Aptional)keyword restricting the ability of scripts to change the variable's value. Values are:<br><br>• PROTECTEDWRITE -- Only scripts for the object and its descendants can change the variable.<br>• PRIVATEWRITE -- Only scripts for the object can change the variable.<br><br><br>When access-right is PUBLIC, you can specify either keyword. When accessright is PROTECTED, you can specify only PRIVATEWRITE. You cannot specify a modifier for PRIVATE access, because PRIVATE is already fully restricted.<br><br>If writeaccess is omitted, any script can change the variable.|
|datatype|A valid datatype. See Syntax of a variable declaration.<br><br>|
|variablename|A valid identifier. See Syntax of a variable declaration.<br><br>|
