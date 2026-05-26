# 10.452 PasteSpecial Description

Displays a standard OLE dialog allowing the user to choose whether to embed or link the OLE object on the clipboard when pasting it in the specified control. Embedding is the equivalent of calling the Paste function, and linking is the same as calling PasteLink.



Applies to OLE controls Syntax



olecontrol.PasteSpecial ( )



- Table 10.573:




|Argument|Description|
|---|---|
|olecontrol|The name of the OLE control into which you want to paste the object on the clipboard|



Return value Integer. Returns 0 if it succeeds and one of the following values if an error occurs: 1 -- User canceled without selecting a paste option



- -1 -- No data found
- -9 -- Other error If ole2control is null, PasteSpecial returns null. Usage For information about when an object on the clipboard is linkable, see PasteLink. Examples




If the clipboard contains an OLE object and the object's server application is running, then the following example lets the user choose to embed or link the object in the control ole_1:



integer li_result li_result = ole_1.PasteSpecial()
