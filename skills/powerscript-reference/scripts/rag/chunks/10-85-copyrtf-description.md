# 10.85 CopyRTF Description

Returns the selected text, pictures, and input fields in a RichTextEdit control or RichText DataWindow as a string with rich text formatting. Bitmaps and input fields are included in the string.



Applies to DataWindow controls, DataStore objects, and RichTextEdit controls Syntax



rtename.CopyRTF ( { selected {, band } } )



- Table 10.107:




|Argument|Description|
|---|---|
|rtename|The name of the DataWindow control, DataStore object, or RichTextEdit control from which you want to copy the selection in rich text format. The DataWindow object in the DataWindow control or DataStore must be a RichText DataWindow.|
|selected (optional)|A boolean value indicated whether to copy selected text only. Values are:<br><br>• TRUE -- (Default) Copy selected text only<br>• FALSE -- Copy the entire contents of the band<br>|
|band (optional)|A value of the Band enumerated datatype specifying the band from which to copy text. Values are:<br><br>• Detail! -- Copy text from the detail band<br>• Header! -- Copy text from the header band<br>• Footer! -- Copy text from the footer band The default is the band that contains the insertion point.<br>|



Return value String. Returns the selected text as a string. CopyRTF returns an empty string ("") if:



- • There is no selection and selected is true
- • An error occurs Usage




CopyRTF does not involve the clipboard. The copied information is stored in a string. If you use the standard clipboard functions (Copy and Cut) the clipboard will contain the text without any formatting.



To incorporate the text with RTF formatting into another RichTextEdit control, use PasteRTF. For more information about rich text format, see the chapter about implementing rich text in Application Techniques.
