# 10.398 mailLogoff Description

Ends the mail session, breaking the connection between the PowerBuilder application and mail. If the mail application was already running when PowerBuilder began the mail session, it is left in the same state.



Applies to mailSession object Syntax



mailsession.mailLogoff ( )



- Table 10.486:




|Argument|Description|
|---|---|
|mailsession|A mailSession object identifying the session from which you want to log off|



Return value mailReturnCode. Returns one of the following values: mailReturnSuccess! mailReturnFailure! mailReturnInsufficientMemory! Usage



To release the memory used by the mailSession object, use the DESTROY keyword after ending the mail session.



Before calling mail functions, you must declare and create a mailSession object and call mailLogon to establish a mail session.



Examples This statement terminates the current mail session:



current_session. mailLogoff() DESTROY current_session



See also mailLogon
