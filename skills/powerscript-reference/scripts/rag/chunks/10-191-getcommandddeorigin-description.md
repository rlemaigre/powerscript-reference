# 10.191 GetCommandDDEOrigin Description

When called by the DDE server application, obtains the application name parameter used by the DDE client sending the command.



Syntax



GetCommandDDEOrigin ( applstring )



- Table 10.228:




|Argument|Description|
|---|---|
|applstring|A string variable in which GetCommandDDEOrigin will store the name of the server application|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs (such as the function was called in the wrong context). If applstring is null, GetCommandDDEOrigin returns null. Usage



The server application calling this function can use the application name (its own DDEname) to determine if it wants to respond to this command. Otherwise, the function provides no additional information about the client.



Examples



This script uses the local variable ls_name to store the name the client application used to identify the server application:



string ls_name GetCommandDDEOrigin(ls_name)



See also GetCommandDDE StartServerDDE StopServerDDE
