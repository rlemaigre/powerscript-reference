# 10.396 mailGetMessages Description

Populates the messageID array of a mailSession object with the message IDs in the user's inbox.



Applies to mailSession object Syntax



mailsession.mailGetMessages ( { messagetype, } { unreadonly } )



- Table 10.484:




|Argument|Description|
|---|---|
|mailsession|A mailSession object identifying the session in which you want to get the messages.|
|messagetype (optio|Anal)string whose value is a message type. The default message type is IPM or an empty string (""), which identifies interpersonal messages. The other standard type is IPC, which identifies hidden, interprocess messages. Your mail administrator may have established other userdefined message types.|
|unreadonly (option|Aal)boolean value indicating you want only the IDs of unread messages. Values are:<br><br>• TRUE -- Get IDs for unread messages only<br>• FALSE -- Get IDs for all messages<br>|



Return value mailReturnCode. Returns one of the following values: mailReturnSuccess! mailReturnFailure! mailReturnInsufficientMemory! mailReturnNoMessages! mailReturnUserAbort! If any argument's value is null, mailGetMessages returns null. Usage



MailGetMessages only retrieves message IDs, which it stores in the mailSession object's MessageID array. A message ID serves as an argument for other mail functions. With mailReadMessage, for example, it identifies the message you want to read.



Before calling mail functions, you must declare and create a mailSession object and call mailLogon to establish a mail session.
