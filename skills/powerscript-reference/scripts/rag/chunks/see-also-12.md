# See also

Reset Open



NextActivity



- 10.69 CloseChannel Description Closes a DDE channel. Syntax CloseChannel ( handle {, windowhandle } )


- Table 10.92:




|Argument|Description|
|---|---|
|handle|A long that identifies the DDE channel that will be closed. It is the same value returned by the OpenChannel function that opened the DDE channel.|
|windowhandle (op|Thetional)handle to the PowerBuilder window that is acting as the DDE client.|



Return value Integer.



- Returns 1 if it succeeds.If an error occurs, CloseChannel returns a negative integer. Possible values are:


- -1 -- Open failed
- -2 -- The channel refuses to close
- -3 -- No confirmation from the server
- -9 -- Handle is null Usage




Use CloseChannel to close a channel to a DDE server application that was opened by calling the OpenChannel function.



Although you can usually close the DDE channel by specifying just the channel's handle, it is a good idea to also specify the handle for PowerBuilder window associated with the channel. If you specify windowhandle, CloseChannel closes the DDE channel in the window identified by windowhandle. If you do not specify windowhandle, CloseChannel only closes the channel if it is associated with the active window. You can use the Handle function to obtain a window's handle.
