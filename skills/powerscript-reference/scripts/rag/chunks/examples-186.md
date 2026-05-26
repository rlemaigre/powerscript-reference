# Examples

Assume the DataWindow dw_inbox contains a list of mail items (sender, subject, postmark, and message ID), and that the mail session mSes has been created and a successful logon has occurred. This script for the clicked event for dw_inbox deletes the selected message from the mail system:



string sID integer nRow mailReturnCode mRet



nRow = GetClickedRow() IF nRow > 0 THEN



sID = GetItemString(nRow, "messageID") mRet = mSes.mailDeleteMessage(sID)



END IF



See also mailGetMessages mailLogon
