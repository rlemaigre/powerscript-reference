# Syntax

controlname.Find ( searchtext, forward, insensitive, wholeword, cursor )



- Table 10.193:




|Argument|Description|
|---|---|
|controlname|The name of the RichTextEdit, DataWindow control, or DataStore whose contents you want to search.|
|searchtext|A string whose value is the text you want to find. For the RichTextEdit control, searchtext is limited to 99 characters.|
|forward|A boolean value indicating the direction you want to search. Values are:<br><br>• TRUE -- The search proceeds forward from the cursor position or, if cursor is false, from the start of the document.<br>• FALSE -- The search proceeds backward from the cursor position or, if cursor is false, from the end of the document.<br>|
|insensitive|A boolean value indicating the search string and the found text must match case. Values are:<br><br>• TRUE -- The search is not sensitive to case.<br>• FALSE -- The search is case-sensitive.<br>|
|wholeword|A boolean value indicating that the found text must be a whole word. Values are:<br><br>• TRUE -- The found text must be a whole word.<br>• FALSE -- The found text can be a partial word.<br>|
|cursor|A boolean value indicating where the search begins. Values are:<br><br>• TRUE -- The search begins at the cursor position.<br>• FALSE -- The search begins at the start of the document if forward is true or at the end if forward is false.<br>|



Return value Integer.



Returns the number of characters found. Find returns 0 if no matching text is found, and returns -1 if the DataWindow's presentation style is not RichTextEdit or an error occurs.
