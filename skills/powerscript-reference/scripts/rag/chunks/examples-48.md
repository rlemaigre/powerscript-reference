# Examples

This code in the PageRight event causes the thumb to move right when the user clicks on the right arrow of the horizontal scroll bar (the page size is stored in the instance variable ii_pagesize):



IF This.Position > & This.MaxPosition - ii_pagesize THEN



This.Position = MaxPosition ELSE



This.Position = This.Position + ii_pagesize END IF



See also LineRight PageDown PageLeft PageUp



- 9.78 PageUp Description Occurs when the user clicks in the open space above the scroll box (also called the thumb). Event ID


- Table 9.183:




|Event ID|Objects|
|---|---|
|pbm_sbnpageup|VScrollBar, VTrackBar|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



When the user clicks in a vertical scroll bar, nothing happens unless you have scripts that change the scroll bar's Position property:



- • For the scroll bar arrows, use the LineUp and LineDown events.
- • For clicks in the scroll bar background above and below the thumb, use the PageUp and PageDown events.
- • For dragging the thumb itself, use the Moved event. Examples


- Example 1



This code in the PageUp event causes the thumb to move up when the user clicks on the up arrow of the vertical scroll bar (the page size is stored in the instance variable ii_pagesize):



IF This.Position < & This.MinPosition + ii_pagesize THEN



This.Position = MinPosition ELSE



This.Position = This.Position - ii_pagesize END IF



- Example 2




This example changes the position of the scroll box by a predetermined page size stored in the instance variable ii_pagesize and scrolls backwards through a DataWindow control 10 rows for each page:



long ll_currow, ll_prevrow This.Position = This.Position - ii_pagesize ll_currow = dw_1.GetRow( ) ll_prevrow = ll_currow - 10 dw_1.ScrollToRow(ll_prevrow) dw_1.SetRow(ll_prevrow)



See also LineUp PageDown



PageLeft PageRight



- 9.79 PictureSelected Description Occurs when the user selects a picture in the RichTextEdit control by clicking it. Event ID



Table 9.184:



|Event ID|Objects|
|---|---|
|pbm_renpictureselected|RichTextEdit|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



When the user clicks a picture in a RichTextEdit control rte_1, the picture is selected. This code for the PictureSelected event selects the rest of the contents, copies the contents to a string with RTF formatting intact, and pastes the formatted text into a second RichTextEdit rte_2:



string ls_transfer_rtf This.SelectTextAll() ls_transfer_rtf = This.CopyRTF() rte_2.PasteRTF(ls_transfer_rtf)



See also InputFieldSelected



- 9.80 PipeEnd Description Occurs when pipeline processing is completed. Event ID


- Table 9.185:




|Event ID|Objects|
|---|---|
|pbm_pipeend|Pipeline|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage You can use the PipeEnd event to check the status of pipeline processing. The Start and Repair functions initiate pipeline processing. For a complete example of using a Pipeline object, see Section 17.2.1, “Building a Pipeline object” in Application Techniques. Examples



This code in a Pipeline user object's PipeEnd event reports pipeline status in a StaticText control:



ist_status.Text = "Finished Pipeline Execution ..."



See also PipeMeter PipeStart
