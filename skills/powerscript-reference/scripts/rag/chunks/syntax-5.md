# Syntax

{ objectname.} { type } { calltype } { when } name ( { argumentlist } )



The following table describes the arguments used in function and event calls.



- Table 6.8: Arguments for calling functions and events




|Argument|Description|
|---|---|
|objectname (|optional)The name of the object where the function or event is defined followed by a period or the descendant of that object/the name of the ancestor class followed by two colons.<br><br>If a function name is not qualified, PowerBuilder uses the rules for finding functions and executes the first matching function it finds.<br><br>For system or global functions, omit objectname. For the rules PowerBuilder uses to find unqualified function names, see Finding and executing functions and events.<br><br>|
|type (optiona|Al) keyword specifying whether you are calling a function or event. Values are:<br><br>• FUNCTION (Default)<br>• EVENT<br>|
|calltype (opt|ional)A keyword specifying when PowerBuilder looks for the function or event. Values are:<br><br>• STATIC (Default)<br>• DYNAMIC<br><br><br>For more information about static versus dynamic calls, see Static versus dynamic calls. For more information on dynamic calls, see Dynamic calls.<br><br>|
|when (option|Aal)keyword specifying whether the function or event should execute immediately or after the current script is finished. Values are:<br><br>• TRIGGER -- (Default) Execute it immediately.<br>• POST -- Put it in the object's queue and execute it in its turn, after other pending messages have been handled.<br><br><br>For more about triggering and posting, see Triggering versus posting functions and events.<br><br>|
|name|The name of the function or event you want to call.|
|argumentlist|(optional)The values you want to pass to name. Each value in the list must have a datatype that corresponds to the declared datatype in the function or event definition or declaration.|
