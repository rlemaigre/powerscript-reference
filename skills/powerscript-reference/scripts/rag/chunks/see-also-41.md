# See also

Close Reset NextActivity



- 10.429 OpenChannel Description Opens a channel to a DDE server application. Syntax OpenChannel ( applname, topicname {, windowhandle } )


- Table 10.529:




|Argument|Description|
|---|---|
|applname|A string specifying the DDE name of the DDE server application.|
|topicname|A string identifying the data or the instance of the application you want to use (for example, in Microsoft Excel, the topic name could be System or the name of an open spreadsheet).|
|windowhandle (op|tional)The handle of the window that you want to act as the DDE client. Specify this parameter to control which window is acting as the DDE client when you have more than one open window.|



Return value Long. Returns the handle to the channel (a positive integer) if it succeeds. If an error occurs, OpenChannel returns a negative integer. Values are:



- -1 -- Open failed
- -9 -- Handle is null Usage




Use OpenChannel to open a channel to a DDE server application and leave it open so you can efficiently execute more than one DDE request. This type of DDE conversation is called a warm link. Because you open a channel, the operating system does not have to poll all open applications every time you send or ask for data.



The following is an outline of a warm-link conversation:



- • Open a DDE channel with OpenChannel and check that it returns a valid channel handle (a positive value).
- • Execute several DDE functions. You can use the following functions: ExecRemote ( command, handle, <windowhandle> ) GetRemote ( location, target, handle, <windowhandle> ) SetRemote ( location, value, handle, <windowhandle> )
- • Close the DDE channel with CloseChannel.




If you only need to use a remote DDE function once, you can call ExecRemote, GetRemote, or SetRemote without opening a channel. This is called a cold link. Without an open channel, the operating system polls all running applications to find the specified server application each time you call a DDE function.



Your PowerBuilder application can also be a DDE server. For more information, see StartServerDDE.
