# Examples

This example creates a new message in the inbox of the current user, which will be sent later to Jerry Smith. The application has already created the mailSession object mSes and logged on:



mailRecipient recip mailMessage msg mailReturnCode mRet



recip.Name = "Smith, Jerry" mRet = mSes.mailResolveRecipient(recip) IF mRet <> mailReturnSuccess! THEN



MessageBox("Save New Message", & "Invalid address.") RETURN



END IF



msg.NoteText = mle_note.Text msg.Subject = sle_subject.Text msg.Recipient[1] = recip



mRet = mSes.mailSaveMessage("", msg) IF mRet <> mailReturnSuccess! THEN



MessageBox("Save New Message", &



"Failed somehow.") END IF



This example replaces the last message in the user Jane Smith's inbox. It gets the message ID from the MessageID array in the mailSession object mSes. It changes the message subject, re-



addresses the message to the user, and saves the message. The application has already created the mailSession object mSes and logged on:



mailRecipient recip mailMessage msg mailReturnCode mRet string s_ID



mRet = mSes.mailGetMessages() IF mRet <> mailReturnSuccess! THEN



MessageBox("No Messages", "Inbox empty.") RETURN



END IF s_ID = mSes.MessageID[UpperBound(mSes.MessageID)] mRet = mSes.mailReadMessage(s, msg, &



mailEntireMessage!, FALSE )



IF mRet <> mailReturnSuccess! THEN MessageBox("Message", "Can't read message.") RETURN



END IF msg.Subject = msg.Subject + " Test" recip.Name = "Smith, Jane" mRet = mSes.mailResolveRecipient( recip ) msg.Recipient[1] = recip mRet = mSes.mailSaveMessage(s_ID, msg) IF mRet <> mailReturnSuccess! THEN



MessageBox("Save Old Message", "Failed somehow.") END IF



See also the mail examples in the samples that are supplied with PowerBuilder. See also mailReadMessage mailResolveRecipient
