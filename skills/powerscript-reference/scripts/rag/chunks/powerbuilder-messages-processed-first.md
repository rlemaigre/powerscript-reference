# PowerBuilder messages processed first

All events posted by PowerBuilder are processed by a separate queue from the Windows system queue. PowerBuilder posted messages are processed before Windows posted messages, so PowerBuilder events that are posted in an event that posts a Windows message are processed before the Windows message.



For example, when a character is typed into an EditMask control, the PowerBuilder pdm_keydown event posts the Windows message WM_CHAR to enter the character. If you want to copy the characters as they are entered from the EditMask control to another control, do not place the code in an event posted in the pdm_keydown event. The processing must take place in an event that occurs after the WM_CHAR message is processed, such as in an event mapped to pdm_keyup.



Restrictions for POST Because no value is returned, you:



- • Cannot use a posted function or event as an operand in an expression
- • Cannot use a posted function or event as the argument for another function
- • Can only use POST on the last call in a cascaded sequence of calls




These statements cause a compiler error. Both uses require a return value:



IF POST IsNull( ) THEN ... w_1.uf_getresult(dw_1.POST GetBorderStyle(2))
