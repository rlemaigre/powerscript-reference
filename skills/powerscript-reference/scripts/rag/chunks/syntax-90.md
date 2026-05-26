# Syntax

mailsession.mailLogon ( { profile, password } {, logonoption } )



- Table 10.487:




|Argument|Description|
|---|---|
|mailsession|A mailSession object identifying the session you want to logon to.|
|profile (optional)|A string whose value is the user's mail system profile or user ID.|
|password (optiona|l)A string whose value is the user's mail system password.|
|logonoption (optio|nal)A value of the mailLogonOption enumerated datatype specifying the logon options:<br><br>• mailNewSession! -- Starts a new mail session, whether or not the mail application is already running<br>• mailDownLoad! -- Forces the mail application to download any new messages from the server to the user's inbox. Starts a new mail session only if the mail application is not running<br>• mailNewSessionWithDownLoad! -- Starts a new mail session and forces new messages to be downloaded from the server to the user's inbox<br><br><br>The default is to use an existing session if possible and not to force new messages to be downloaded.|



Return value mailReturnCode. Returns one of the following values: mailReturnSuccess! mailReturnLoginFailure! mailReturnInsufficientMemory! mailReturnTooManySessions! mailReturnUserAbort! If any argument's value is null, mailLogon returns null. Usage



If you do not direct mailLogon to start a new session and the mail application is already running on the user's computer, then the PowerBuilder mail session attaches to the existing session. A profile and password are not necessary.



When mailLogon establishes a new session, then the mail system's dialog box prompts for the profile and password if the script does not supply them.



The download option forces the mail server to download the latest messages to the user's inbox. This ensures that the inbox is up to date; it does not make the messages available to PowerBuilder. To access messages, use mailGetMessages and mailReadMessage.



Before calling mailLogon, you must declare and create a mailSession object.
