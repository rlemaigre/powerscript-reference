# Syntax

Handle ( objectname {, previous } )



- Table 10.369:




|Argument|Description|
|---|---|
|objectname|The name of the PowerBuilder object for which you want the handle. Objectname can be any PowerBuilder object, including an application or control, but cannot be a drawing object.|
|previous (optional|)(Obsolete argument) A boolean indicating whether you want the handle of the previous instance of an application. You can use this argument with the Application object only.<br><br>In current versions of Windows, Handle always returns 0 when this argument is set to true.|
