# Reading attachments

If a message has an attachment and you do not suppress attachments, information about it is stored in the AttachmentFile property of the mailMessage object. The AttachmentFile property is a mailFileDescription object. Its PathName property has the location of the temporary file that mailReadMessage created for the attachment. By default, the temporary file is in the directory specified by the TEMP environment variable.



Be sure to delete this temporary file when you no longer need it. Examples



In this example, mail is displayed in a window with a DataWindow dw_inbox that lists mail messages and a MultiLineEdit mle_note that displays the message text. Assuming that the application has created the mailSession object mSes and successfully logged on, and that dw_inbox contains a list of mail items (sender, subject, postmark, and message ID); this script for the Clicked event for dw_inbox displays the text of the selected message in the MultiLineEdit mle_note:



integer nRow, nRet string sMessageID string sRet, sName



// Find out what Mail Item was selected nRow = GetClickedRow() IF nRow > 0 THEN



// Get the message ID from the row sMessageID = GetItemString(nRow, 'MessageID')



// Reread the message to obtain entire contents // because previously we read only the envelope mRet = mSes.mailReadMessage(sMessageID, mMsg & mailEntireMessage!, TRUE)



// Display the text mle_note.Text = mMsg.NoteText



END IF



See mailGetMessages for an example that creates a list of mail messages in a DataWindow control, the type of setup that this example expects. See also the mail examples in the Code Examples sample application supplied with PowerBuilder.



See also mailGetMessages mailLogon mailSend



- 10.401 mailRecipientDetails Description Displays a dialog box with the specified recipient's address information. Applies to mailSession object Syntax mailsession.mailRecipientDetails ( mailrecipient {, allowupdates } )


- Table 10.489:




|Argument|Description|
|---|---|
|mailsession|A mailSession identifying the session in which you want to display the detail information for a recipient.|
|mailrecipient|A mailRecipient structure containing valid address information. Mailrecipient must contain a recipient identifier returned by mailAddress, mailResolveRecipient, or mailReadMessage.|
|allowupdates (opti|onal)A boolean indicating whether updates to the recipient's name will be allowed. If the user does not have update privileges for the mail system, then allowupdates is ignored. The default is false.<br><br>allowupdates is always true for Extended MAPI.|



Return value mailReturnCode. Returns one of the following values: mailReturnSuccess!



mailReturnFailure! mailReturnInsufficientMemory! mailReturnUnknownRecipient! mailReturnUserAbort! If any argument's value is null, mailRecipientDetails returns null. Usage



The effect of setting allowupdates to true depends on the mail system and the user's privileges.



Before calling mail functions, you must declare and create a mailSession object and call mailLogon to establish a mail session.
