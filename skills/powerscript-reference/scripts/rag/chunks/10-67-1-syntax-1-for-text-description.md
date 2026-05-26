# 10.67.1 Syntax 1: For text Description

Retrieves or replaces the contents of the system clipboard with text. Syntax



Clipboard ( { string } )



- Table 10.85:




|Argument|Description|
|---|---|
|string (optional)|A string whose value is the text you want to place in the clipboard. The string replaces the current contents of the clipboard, if any.|



Return value String. Returns the current contents of the clipboard if the clipboard contains text. If string is specified, Clipboard returns the current contents and replaces it with string. Returns the empty string ("") if the clipboard is empty or it contains nontext data, such as a bitmap. If string is specified, the nontext data is replaced with string. If string is null, Clipboard returns null. Usage



You can use Syntax 1 with the Paste, Replace, or ReplaceText function to insert the clipboard contents in an editable control or StaticText control.



Calling Clipboard in a DataWIndow control or DataStore object To retrieve or replace the contents of the system clipboard with text from a DataWindow item (cell value), you must first assign the value to a string and then call the system Clipboard function as follows:



string ls_data = dw_1.object.column_name[row_number] ::Clipboard(ls_data)



The DataWindow version of Clipboard, documented in Syntax 2 (and in Section 10.3, “Clipboard” in DataWindow Reference), is only applicable to graphs.



Examples These statements put the contents of the clipboard in the variable ls_CoName:



string ls_CoName ls_CoName = Clipboard()



The following statements place the contents of the clipboard in Heading, and then replace the contents of the clipboard with the string Employee Data:



string Heading Heading = Clipboard("Employee Data")



The following statement replaces the selected text in the MultiLineEdit mle_terms with the contents of the clipboard:



mle_terms.ReplaceText(Clipboard())



The following statement exchanges the contents of the StaticText st_welcome with the contents of the clipboard:



st_welcome.Text = Clipboard(st_welcome.Text)



See also Clear Copy Cut Paste Replace ReplaceText



- 10.67.2 Syntax 2: For bitmaps of graphs Description




Replaces the contents of the system clipboard with a bitmap image of a graph. You can paste the image into other applications.
