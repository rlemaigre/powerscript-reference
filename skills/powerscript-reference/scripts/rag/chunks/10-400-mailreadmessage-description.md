# 10.400 mailReadMessage Description

Opens a mail message whose ID is stored in the mail session's message array. You can choose to read the entire message or the envelope (sender, date received, and so on) only. If a message has attachments, they are stored in a temporary file. You can also choose to have the message text written to in a temporary file.



Applies to mailSession object Syntax



mailsession.mailReadMessage ( messageid, mailmessage, readoption, mark )
