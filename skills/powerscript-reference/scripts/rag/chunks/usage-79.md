# Usage

Position reports the position of the insertion point if you omit the toline and tochar arguments. If text is selected, the insertion point can be at the beginning or the end of the selection. For example, if the user dragged down to select text, the insertion point is at the end.



If there is a selection, a character argument can be set to 0 to indicate that the selection begins or ends at the start of a line, with nothing else selected on that line. When the user drags up, the selection can begin at the start of a line and fromchar is set to 0. When the user drags down, the selection can end at the beginning of a line and tochar is set to 0.



Selection or insertion point To find out whether there is a selection or just an insertion point, specify all four arguments. If toline and tochar are set to 0, then there is no selection, only an insertion point. If there is a selection and you want the position of the insertion point, you will have to call Position again with only two arguments. This difference is described next. The position of the insertion point and end of selection can differ When reporting the position of selected text, the positions are inclusive -- Position reports the first line and character and the last line and character that are selected. When reporting the position of the insertion point, Position identifies the character just after the insertion point. Therefore, if text is selected and the insertion point is at the end, the values for the insertion point and the end of the selection differ. To illustrate, suppose the first four characters in line 1 are selected and the insertion point is at the end. If you request the position of the insertion point:



rte_1.Position(ll_line, ll_char)



Then:



- • ll_line is set to 1
- • ll_char is set to 5, the character following the insertion point If you request the position of the selection:




rte_1.Position(ll_startline, ll_startchar, & ll_endline, ll_endchar)



- • ll_startline and ll_startchar are both set to 1
- • ll_endline is 1 and ll_endchar is set to 4, the last character in the selection




Passing values to SelectText Because values obtained with Position provide more information that simply a selection range, you cannot pass the values directly to SelectText. In particular, 0 is not a valid character position when selecting text, although it is meaningful in describing the selection. Examples



This example calls Position to get the band and the line and column values for the beginning and end of the selection. The values are converted to strings and displayed in the StaticText st_status:



integer li_rtn long ll_startline, ll_startchar long ll_endline, ll_endchar string ls_s, ls_band band l_band



// Get the band and start and end of the selection



- l_band = rte_1.Position(ll_startline, ll_startchar,& ll_endline, ll_endchar)




// Convert position values to strings ls_s = "Start line/char: " + String(ll_startline) &



+ ", " + String(ll_startchar) ls_s = ls_s + " End line/char: " &

+ String(ll_endline) + ", " + String(ll_endchar)



// Convert Band datatype to string CHOOSE CASE l_band CASE Detail!



ls_band = " Detail" CASE Header!



ls_band = " Header" CASE Footer!



ls_band = " Footer" CASE ELSE



ls_band = " No band" END CHOOSE



ls_s = ls_s + ls_band



// Display the information st_status.Text = ls_s



This example extends the current selection down 1 line. It takes into account whether there is an insertion point or a selection, whether the insertion point is at the beginning or end of the selection, and whether the selection ends at the beginning of a line:



integer rtn long l1, c1, l2, c2, linsert, cinsert long l1select, c1select, l2select, c2select



// Get selectio start and end rte_1.Position(l1, c1, l2, c2)



// Get insertion point rte_1.Position(linsert, cinsert)



IF l2 = 0 and c2 = 0 THEN //insertion point l1select = linsert c1select = cinsert l2select = l1select + 1 // Add 1 to end line c2select = c1select



ELSEIF l2 > l1 THEN // Selection, ins pt at end IF c2 = 0 THEN // End of selection (ins pt) // at beginning of a line (char 0)



c2 = 999 // Change to end of prev line l2 = l2 - 1



END IF



l1select = l1 c1select = c1 l2select = l2 + 1 // Add 1 to end line c2select = c2



ELSEIF l2 < l1 THEN // selection, ins pt at start IF c1 = 0 THEN // End of selection (not ins pt) // at beginning of a line



c1 = 999 // Change to end of prev line l1 = l1 - 1



END IF l1select = l2 c1select = c2 l2select = l1 + 1 // Add 1 to end line // (start of selection) c2select = c1



ELSE // l1 = l2, selection on one line l1select = l1 l2select = l2 + 1 // Add 1 to line IF c1 < c2 THEN // ins pt at end



c1select = c1 c2select = c2



ELSE // c1 > c2, ins pt at start



c1select = c2 c2select = c1



END IF END IF // Select the extended selection rtn = rte_1.SelectText( l1select, c1select, &



l2select, c2select )



For an example of selecting each word in a RichTextEdit control, see SelectTextWord. See also



SelectedLine SelectedStart SelectText
