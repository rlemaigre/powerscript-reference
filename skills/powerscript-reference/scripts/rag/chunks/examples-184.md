# Examples

The following statements illustrate the values LowerBound reports for fixed-size arrays and for variable-size arrays before and after memory has been allocated:



integer a[5], b[2,5] LowerBound(a) // Returns 1 LowerBound(a, 1) // Returns 1 LowerBound(a, 2) // Returns -1, a has only 1 dim LowerBound(b, 2) // Returns 1



- integer c[ ] LowerBound(c) // Returns 1 c[50] = 900 LowerBound(c) // Returns 1
- integer d[-10 to 50] LowerBound(d) // Returns - 10




See also UpperBound



- 10.394 mailAddress Description Updates the mailRecipient array for a mail message. Applies to mailSession object Syntax mailsession.mailAddress ( { mailmessage } )


- Table 10.482:




|Argument|Description|
|---|---|
|mailsession|A mailSession object identifying the session in which you want to address the message.|
|mailmessage (opti|onal)A mailMessage structure containing information about the message. If you omit mailmessage, mailAddress displays an Address dialog box.|



Return value mailReturnCode. Returns one of the following values: mailReturnSuccess! mailReturnFailure! mailReturnInsufficientMemory! mailReturnUserAbort! If any argument's value is null, mailAddress returns null. Usage



The mailRecipient array contains information about recipients of a mail message or the originator of a message. The originator is not used when you send a message.



If there is an error in the mailRecipient array, mailAddress displays the Address dialog box so the user can fix the address. If you pass a mailMessage structure that is a validly addressed



message (such as a message that the user received) nothing happens because the addresses are correct.



If you do not specify a mailMessage, the mail system displays an Address dialog box that allows users to look for addresses and maintain their personal address list. The user cannot select addresses for addressing a message.



Before calling mail functions, you must declare and create a mailSession object and call mailLogon to establish a mail session.
