# Examples

- Example 1 This GOTO statement skips over the Taxable=FALSE line:


- Goto NextStep Taxable=FALSE //This statement never executes. NextStep: Rate=Count/Count4
- Example 2 This GOTO statement transfers control to the statement associated with the label OK:




GOTO OK



. . . OK:



. . .



- 7.11 HALT Description Terminates an application. Syntax HALT {CLOSE} Usage




When PowerBuilder encounters Halt without the keyword CLOSE, it immediately terminates the application.



When PowerBuilder encounters Halt with the keyword CLOSE, it immediately executes the scripts for application Close event and for the CloseQuery, Close, and Destructor events on all instantiated objects before terminating the application. If there are no scripts for these events, PowerBuilder immediately terminates the application.



You should not code a HALT statement in a component that will run in a server environment. When a PowerBuilder component is running in a J2EE server, and a HALT statement is encountered, instead of aborting the application, which is in this case the server itself, the PowerBuilder VM throws a runtime error and continues. The container is responsible for managing the lifecycle of the component.
