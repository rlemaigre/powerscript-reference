# 10.274 GetSpacing Description

Obtains the line spacing of the paragraph containing the insertion point in a RichTextEdit control.



Applies to RichTextEdit controls Syntax



rtename.GetSpacing ( )



- Table 10.337:



|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to find out the line spacing of the paragraph containing the insertion point|



Return value



Spacing. A value of the Spacing enumerated datatype indicating the line spacing of the paragraph containing the insertion point.



Usage



When the user selects several paragraphs, the insertion point is at the beginning or end of the selection, depending on how the user made the selection. The value reported depends on the location of the insertion point.



Examples



This example stores a value of the enumerated datatype spacing in the variable l_spacing. The value is the spacing for the paragraph with the insertion point:



spacing l_spacing



- l_spacing = rte_1.GetSpacing() See also GetTextStyle SetSpacing SetTextStyle




10.275 GetStatusCode



- 10.275.1 Syntax 1: for TokenResponse objects Description Gets the response status code. Applies to TokenResponse objects Syntax objectname.GetStatusCode ( )


- Table 10.338:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenResponse object in which you want to get the response status code.|
