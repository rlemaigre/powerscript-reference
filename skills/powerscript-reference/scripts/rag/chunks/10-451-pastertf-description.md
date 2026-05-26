# 10.451 PasteRTF Description

Pastes rich text data from a string into a DataWindow control, DataStore object, or RichTextEdit control.



Applies to DataWindow controls, DataStore objects, and RichTextEdit controls Syntax



rtename.PasteRTF ( richtextstring, { band } )



- Table 10.572:




|Argument|Description|
|---|---|
|rtename|The name of the DataWindow control, DataStore object, or RichTextEdit control into which you want to paste data in rich text format. The DataWindow object in the DataWindow control or DataStore must be a RichTextEdit DataWindow.|
|richtextstring|A string whose value is data with rich text formatting.|
|band (optional)|A value of the Band enumerated datatype specifying the band into which the rich text data is pasted. Values are:<br><br>• Detail! -- The data is pasted into the detail band<br>• Header! -- The data is pasted into the header band<br>• Footer! -- The data is pasted into the footer band The default is the band that contains the insertion point.<br>|



Return value Long. Returns -1 if an error occurs. If richtextstring is null, PasteRTF returns null. Usage



A DataWindow in the RichText presentation style has only three bands. There are no summary or trailer bands and there are no group headers and footers.



This statement pastes rich text in the string ls_richtext into the header of the RichTextEdit rte_message:



string ls_richtext rte_message.PasteRTF(ls_richtext, Header!)



See also CopyRTF
