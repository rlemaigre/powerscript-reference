# Examples

This example gets the message IDs from the user's inbox and reads the first message. It then calls mailRecipientDetails to display address information for the first recipient. Recipient is an array of structures and a property of mailMessage. Each array element is one of the message's recipients. The example does not check how many values there are in the message ID or recipient arrays and it assumes that the application has already created a mailSession object and logged on:



mailMessage msg integer n long c_row



mSes.mailGetMessages() mSes.mailReadMessage(mSes.MessageID[1], &



msg, mailEnvelopeOnly!, FALSE ) mSes.mailRecipientDetails(msg.Recipient[1])



See also mailResolveRecipient mailSend
