# Examples

This example checks whether there is a user J Smith is on the mail system. If there is a user whose name matches, such as Jane Smith or Jerry Smith, the variable mname is set to the full name. If both names are on the system, the mail system displays a dialog box from which the user chooses a name. Mname is set to the user's choice. The application has already created the mailSession object mSes and logged on:



mailReturnCode mRet string mname mname = "Smith, J" mRet = mSes.mailResolveRecipient(mname) IF mRet = mailReturnSuccess! THEN



MessageBox("Address", mname + " found.") ELSEIF mRet = mailReturnFailure! THEN



MessageBox("Address", "J Smith not found.") ELSE



MessageBox("Address", "Request not evaluated.") END IF



In this example, sle_to contains the full or partial name of a mail recipient. This example assigns the name to a mailRecipient object and calls mailResolveRecipient to find the name and get address details. If the name is found, mailRecipientDetails displays the information and the full name is assigned to sle_to. The application has already created the mailSession object mSes and logged on:



mailReturnCode mRet mailRecipient mRecip



mRecip.Name = sle_to.Text mRet = mSes.mailResolveRecipient(mRecip) IF mRet <> mailReturnSuccess! THEN



MessageBox ("Address", &



sle_to.Text + "not found.") ELSE



mRet = mSes.mailRecipientDetails(mRecipient) sle_to.Text = mRecipient.Name



END IF



See also mailAddress mailLogoff mailLogon mailRecipientDetails mailSend



- 10.403 mailSaveMessage Description Creates a new message in the user's inbox or replaces an existing message. Applies to mailSession object Syntax mailsession.mailSaveMessage ( messageid, mailmessage )


- Table 10.491:




|Argument|Description|
|---|---|
|mailsession|A mailSession object identifying the session in which you want to save the mail message.|



|Argument|Description|
|---|---|
|messageid|A string whose value is the message ID of the message being replaced. If you are saving a new message, specify an empty string ("").|
|mailmessage|A mailMessage structure containing the message being saved.|



Return value mailReturnCode. Returns one of the following values: mailReturnSuccess! mailReturnFailure! mailReturnInsufficientMemory! mailReturnInvalidMessage! mailReturnUserAbort! mailReturnDiskFull! If any argument's value is null, mailSaveMessage returns null. Usage



Before saving a message, you must address the message even if you are replacing an existing message. The message can be addressed to someone else for sending later.



Before calling mail functions, you must declare and create a mailSession object and call mailLogon to establish a mail session.
