# Examples

These statements create a mail session, send mail with an attached TXT file, and then log off the mail system and destroy the mail session object:



mailSession mSes mailReturnCode mRet mailMessage mMsg mailFileDescription mAttach // Create a mail session mSes = CREATE mailSession // Log on to the session mRet = mSes.mailLogon(mailNewSession!) IF mRet <> mailReturnSuccess! THEN



MessageBox("Mail", 'Logon failed.') RETURN



END IF mMsg.AttachmentFile[1] = mAttach mRet = mSes.mailAddress(mMsg)



IF mRet <> mailReturnSuccess! THEN MessageBox("Mail", 'Addressing failed.') RETURN



END IF // Send the mail mRet = mSes.mailSend(mMsg) IF mRet <> mailReturnSuccess! THEN



MessageBox("Mail", 'Sending mail failed.') RETURN



END IF mSes.mailLogoff() DESTROY mSes



See also mailLogoff mailLogon mailResolveRecipient mailSend



- 10.395 mailDeleteMessage Description Deletes a mail message from the user's electronic mail inbox. Applies to mailSession object Syntax




mailsession.mailDeleteMessage ( messageid )



- Table 10.483:




|Argument|Description|
|---|---|
|mailsession|A mailSession object identifying the session in which you want to delete the message|
|messageid|A string whose value is the ID of the mail message to be deleted|



Return value mailReturnCode. Returns one of the following values: mailReturnSuccess! mailReturnFailure! mailReturnInsufficientMemory! mailReturnInvalidMessage! mailReturnUserAbort! If any argument's value is null, mailDeleteMessage returns null. Usage



To get a list of message IDs in the user's inbox, call the mailGetMessages function. Before calling mail functions, you must declare and create a mailSession object and call mailLogon to establish a mail session.
