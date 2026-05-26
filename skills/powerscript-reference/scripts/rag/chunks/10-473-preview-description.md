# 10.473 Preview Description

Displays the contents of a RichTextEdit control as either a preview of the document as it would print or in an editing view.



Applies to RichTextEdit controls Syntax



rtename.Preview ( previewsetting )



- Table 10.595:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control which you want to preview or edit.|
|previewsetting|A boolean value indicating whether to put the RichTextEdit into preview or edit mode. Values are:<br><br>• True -- Preview the contents of the RichTextEdit as it would look when printed<br>• False -- Displays the contents in editable form<br>|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



A RichTextEdit control has two ways of viewing the content: edit mode and preview mode. The Preview function switches between the two.



Edit mode Edit mode displays the text in readable form. The user can enter, select, and change text. There are properties for controlling the display of nonprinting characters in the text, such as carriage returns, spaces, tabs, and input fields. In edit mode, the toolbar, ruler bar, and tab bar, if visible, display above the editing area of the control. Preview mode Preview mode displays a miniature page within the control. The page is sized to fit within the control. Any selection is canceled when the control switches to preview mode. The user cannot edit text in preview mode, but scripts can call functions for selecting and changing text, including inserting documents. Users can page through the control contents in preview mode by using the up arrow and down arrow keys, or the Page Up and Page Down keys. If you call ShowHeadFoot when the control is in preview mode, you return to edit mode with the header and footer editing panels displayed. Make sure the RichTextEdit control is big enough to display the page formatting and scrolling controls available in preview mode. Examples This example previews the page layout of the RichTextEdit rte_1:



rte_1.Preview(TRUE)



See also IsPreview
