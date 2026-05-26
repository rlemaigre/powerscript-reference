# Examples

When the window contains a DataWindow control, you can retrieve data for it in the Open event. In this example, values for the transaction object SQLCA have already been set up:



dw_1.SetTransObject(SQLCA) dw_1.Retrieve( )



See also Activate Constructor Show



- 9.74 Other Description Occurs when a system message occurs that is not a PowerBuilder message. Event ID



Table 9.178:



|Event ID|Objects|
|---|---|
|pbm_other|Windows and controls that can be placed in windows|



Arguments



Table 9.179:



|Argument|Description|
|---|---|
|wparam|UnsignedLong by value|
|lparam|Long by value|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



The Other event is no longer useful, because you can define your own user events. You should avoid using it, because it slows performance while it checks every Windows message.



- 9.75 PageDown Description Occurs when the user clicks in the open space below the scroll box. Event ID


- Table 9.180:




|Event ID|Objects|
|---|---|
|pbm_sbnpagedown|VScrollBar, VTrackBar|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



When the user clicks in a vertical scroll bar, nothing happens unless you have scripts that change the scroll bar's Position property. For the scroll bar arrows, use the LineUp and LineDown events; for clicks in the scroll bar background above and below the thumb, use the PageUp and PageDown events; for dragging the thumb itself, use the Moved event.



Examples Example 1 This code in the VScrollBar's PageDown event uses a predetermined paging value stored in the instance variable ii_pagesize to change the position of the scroll box (you would need additional code to change the view of associated controls according to the scroll bar position):



IF This.Position > & This.MaxPosition - ii_pagesize THEN This.Position = MaxPosition



ELSE



This.Position = This.Position + ii_pagesize END IF RETURN 0



Example 2 This example changes the position of the scroll box by a predetermined page size stored in the instance variable ii_pagesize and scrolls forward through a DataWindow control 10 rows for each page:



long ll_currow, ll_nextrow This.Position = This.Position + ii_pagesize ll_currow = dw_1.GetRow() ll_nextrow = ll_currow + 10 dw_1.ScrollToRow(ll_nextrow) dw_1.SetRow(ll_nextrow)



See also LineDown PageLeft PageRight PageUp



- 9.76 PageLeft Description Occurs when the open space to the left of the scroll box is clicked. Event ID



Table 9.181:



|Event ID|Objects|
|---|---|
|pbm_sbnpageup|HScrollBar, HTrackBar|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



When the user clicks in a horizontal scroll bar, nothing happens unless you have scripts that change the scroll bar's Position property. For the scroll bar arrows, use the LineLeft and LineRight events; for clicks in the scroll bar background above and below the thumb, use the PageLeft and Right events; for dragging the thumb itself, use the Moved event.



Examples



This code in the PageLeft event causes the thumb to move left a predetermined page size when the user clicks on the left arrow of the horizontal scroll bar (the page size is stored in the instance variable ii_pagesize):



IF This.Position < & This.MinPosition + ii_pagesize THEN



This.Position = MinPosition ELSE



This.Position = This.Position - ii_pagesize END IF



See also LineLeft PageDown PageRight PageUp



- 9.77 PageRight Description Occurs when the open space to the right of the scroll box is clicked.
