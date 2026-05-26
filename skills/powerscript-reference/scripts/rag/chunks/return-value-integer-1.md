# Return value Integer.

Returns 1 if it succeeds. If an error occurs, ExecRemote returns a negative integer. Possible values are:



- -1 -- Link was not started
- -2 -- Request denied
- -9 -- Handle is null Usage




The DDE server application must already be running when you call a DDE function. Use the Run function to start the application if necessary.



The ExecRemote function allows you start a cold link or use warm link between the PowerBuilder client application and the DDE server application.



A cold link is a single DDE command and is not associated with a DDE channel (see Syntax 1).



A warm link is associated with a DDE channel. You establish a channel for the DDE conversation with OpenChannel before sending commands with this syntax of ExecRemote. A warm link is useful when you need to send several commands to the DDE server application. Because the channel is open, ExecRemote does not need to have Windows poll all running applications again. After you have called ExecRemote or the related functions GetRemote or SetRemote, and finished the work with the DDE server, call CloseChannel to end the DDE conversation.



A DDE hot link, which enables automatic updating of data in the PowerBuilder client application, involves other functions. For more information, see the StartHotLink function.
