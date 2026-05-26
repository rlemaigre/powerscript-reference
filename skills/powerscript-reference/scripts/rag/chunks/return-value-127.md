# Return value

Integer. Returns the number of characters selected if it succeeds and -1 if an error occurs. Usage



If the RichTextEdit control contains a selection, the insertion point is either at the beginning or end of the selection. The way the text was selected determines which. If the user made the selection by dragging toward the end, then calling SelectTextLine selects the line at the end of the selection. If the user dragged back, then SelectTextLine selects the line at the beginning of the selection.



SelectTextLine does not select the line-ending characters (carriage return and linefeed in Windows).



Examples This statement selects the current line:



rte_1.SelectTextLine()



See also SelectedText SelectText SelectTextAll SelectTextWord



- 10.579 SelectTextWord Description Selects the word containing the insertion point in a RichTextEdit control. Applies to RichTextEdit and DataWindow controls Syntax rtename.SelectTextWord ( )


- Table 10.717:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit or DataWindow control in which you want to select a word. The DataWindow object in the DataWindow control must be a RichTextEdit DataWindow.|



Return value Integer. Returns the number of characters selected if it succeeds and -1 if a word cannot be selected or an error occurs. Usage



A word is any group of alphanumeric characters. A word can include underscores and single quotes but does not include punctuation and special characters such as $ or #. If punctuation or special characters follow the selected word, they are not selected.



If the character after the insertion point is a space, punctuation, special character, or end-ofline mark, SelectTextWord does not select anything and returns -1.



Examples The following statement selects the word containing the insertion point:



rte_1.SelectTextWord()



This example selects the word at the insertion point. If there is no word, it increments the position until it finds a word. It checks when it reaches the end of a line and wraps to the next line as it looks for a word. If this script is assigned to a command button and the button is clicked repeatedly, you step through the text word by word:



integer li_rtn long llstart, lcstart, ll_lines, ll_chars



ll_lines = rte_1.LineCount() ll_chars = rte_1.LineLength()



li_rtn = rte_1.SelectTextWord() // -1 if a word is not found at the insertion point



DO WHILE li_rtn = -1



// Get the position of the cursor rte_1.Position(llstart, lcstart)



// Increment by 1 to look for next word lcstart += 1 // If at end of line move to next line IF lcstart >= ll_chars THEN



lcstart = 1 // First character llstart += 1 // next line



// If beyond last line, return IF llstart > ll_lines THEN



RETURN 0



END IF END IF // Set insertion point rte_1.SelectText(llstart, lcstart, 0, 0) // In case it's a new line, get new line length // Can't do this until the ins pt is in the line ll_chars = rte_1.LineLength( ) // Select word, if any li_rtn = rte_1.SelectTextWord()



LOOP // Add code here to process the word (for example, // passing the word to a spelling checker)



See also SelectedText SelectText



SelectTextAll SelectTextLine



- 10.580 Send Description Sends a message to a window so that it is executed immediately. Syntax Send ( handle, message#, lowword, long )


- Table 10.718:




|Argument|Description|
|---|---|
|handle|A long whose value is the system handle of a window (that you have created in PowerBuilder or another application) to which you want to send a message.|
|message#|An UnsignedInteger whose value is the system message number of the message you want to send.|
|lowword|A long whose value is the integer value of the message. If this argument is not used by the message, enter 0.|
|long|The long value of the message or a string.|



Return value Long. Returns the value returned by SendMessage in Windows if it succeeds and -1 if an error occurs. If any argument's value is null, Send returns null. Usage



PowerBuilder's Send function sends the message identified by message# and optionally, lowword and long, to the window identified by handle to the Windows function SendMessage. The message is sent directly to the object, bypassing the object's message queue. Send waits until the message is processed and obtains the value returned by SendMessage.



Messages in Windows Use the Handle function to get the Windows handle of a PowerBuilder object. You specify Windows messages by number. They are documented in the file WINDOWS.H that is part of the Microsoft Windows Software Development Kit (SDK) and other Windows development tools.
