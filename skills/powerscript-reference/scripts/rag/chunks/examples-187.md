# Examples

This example populates a DataWindow with the messages in the user's inbox. The DataWindow is defined with an external data source and has three columns: msgid, msgdate, and msgsubject. MailGetMessages fills the MessageID array in the mailSession object and mailReadMessage gets the information for each ID.



The example assumes that the application has already created the mailSession object mSes and logged on:



mailMessage msg long n, c_row



mSes.mailGetMessages() FOR n = 1 to UpperBound(mSes.MessageID[])



mSes.mailReadMessage(mSes.MessageID[n], & msg, mailEnvelopeOnly!, FALSE) c_row = dw_1.InsertRow(0) dw_1.SetItem(c_row, "msgid", mSes.MessageID[n]) dw_1.SetItem(c_row, "msgdate", msg.DateReceived) // Truncate subject to fit defined column size dw_1.SetItem(c_row, "msgsubject", & Left(msg.Subject, 50))



NEXT



See also mailDeleteMessage mailReadMessage



- 10.397 mailHandle Description Obtains the handle of a mailSession object. Applies to mailSession object Syntax mailsession.mailHandle ( )


- Table 10.485:




|Argument|Description|
|---|---|
|mailsession|A mailSession object identifying the session for which you want the handle|



Return value UnsignedLong. Returns the internal handle of the mail session object. If mailsession is null, mailHandle displays an error message. Usage



After you have logged on, your mailSession has a valid handle. You can use that handle to call external mail functions. MAPI has additional functions that PowerBuilder does not implement directly.



Before calling mail functions, you must declare and create a mailSession object and call mailLogon to establish a mail session.



Examples This statement returns the handle of the current mail session:



current_session. mailHandle()
