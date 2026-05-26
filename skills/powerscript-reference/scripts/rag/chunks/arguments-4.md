# Arguments

- Table 9.254:



|Argument|Description|
|---|---|
|command_args|String passed by reference that includes dbmlsync command arguments for launching the synchronization process.|



Return Values None Usage



Use this event to receive and display dbmlsync command line arguments. The event is called by the Synchronize function just before it launches dbmlsync. The generated command arguments for dbmlsync are passed by reference in the command_args string. You can change the command_args string with PowerScript code or with the debugger. If command_args are changed, the Synchronize function will use the new argument string.



See also BeginDownload BeginSync



- 9.114 SystemError Description




Occurs when a serious runtime error occurs (such as trying to open a nonexistent window) if the error is not handled in a try-catch block.



Event ID



- Table 9.255:




|Event ID|Objects|
|---|---|
|None|Application|



Arguments None Return Values None. (Do not use a RETURN statement.) Usage



If there is no script for the SystemError event, PowerBuilder displays a message box with the PowerBuilder error number and error message text. For information about error messages, see Section 31.3.2, “Handling errors at runtime” in Users Guide.



If you comment out the entire script in the SystemError event, in a standard PowerBuilder application the event is still triggered and the message box does not display.



For errors involving external objects and DataWindows, you can handle the error in the ExternalException or Error events and prevent the SystemError event from occurring. The ExternalException and Error events are maintained for backward compatibility.



You can prevent the SystemError event from occurring by handling errors in try-catch blocks. Well-designed exception-handling code gives application users a better chance to recover from error conditions and run the application without interruption. For information about exception handling, see Section 3.9, “Exception handling in PowerBuilder” in Application Techniques.



When a SystemError event occurs, your current script terminates and your system might become unstable. It is generally not a good idea to continue running the application, but you can use the SystemError event script to clean up and disconnect from the DBMS before closing the application.



Examples This statement in the SystemError event halts the application immediately:



HALT CLOSE



See also Error ExternalException TRY...CATCH...FINALLY...END TRY
