# See also

GetSyncRegistryProperties SetSyncRegistryProperties



- 10.253 GetOrigin Description Finds the X and Y coordinates of the upper-left corner of the ListView item. Applies to ListView controls Syntax listviewname.GetOrigin ( x , y )

- Table 10.310:




|Argument|Description|
|---|---|
|listviewname|The ListView control for which you want to find the coordinates of the upper-left corner|
|x|An integer variable in which you want to store the X coordinate for the ListView control|
|y|An integer variable in which you want to store the Y coordinate for the ListView control|



Return value Integer.



- Returns 1 if it succeeds and -1 if it fails. Usage




Use GetOrigin to find the position of a dragged object relative to the upper left corner of a ListView control.



Examples



This example moves a static text clock to the upper-left coordinates of the selected ListView item:



integer li_index listviewitem l_lvi



li_index = lv_list.SelectedIndex() lv_list.GetItem(li_index, l_lvi)



lv_list.GetOrigin(l_lvi.ItemX, l_lvi.ItemY) sle_info.Text = "X is "+ String(l_lvi.ItemX) &



+ " and Y is " + String(l_lvi.ItemY) st_clock.Move(l_lvi.itemx , l_lvi.ItemY) MessageBox("Clock Location", "X is " &



- + String(st_clock.X) &



+ ", and Y is " &



- + String(st_clock.Y)+".")


- 10.254 GetParagraphSetting Description




Gets the size of the indentation, left margin, or right margin of the paragraph containing the insertion point in a RichTextEdit control.



Applies to RichTextEdit controls Syntax



rtecontrol.GetParagraphSetting ( whichsetting )



- Table 10.311:




|Argument|Description|
|---|---|
|rtecontrol|The name of the control for which you want paragraph information.|
|whichsetting|A value of the ParagraphSetting enumerated datatype specifying the setting for which you want the value. Values are:<br><br>• Indent! -- Returns the indentation of the paragraph<br>• LeftMargin! -- Returns the left margin of the paragraph<br>• RightMargin! -- Returns the right margin of the paragraph<br>|



Return value Long. Returns the size of the specified setting in thousandths of an inch. GetParagraphSetting returns -1 if an error occurs. If which setting is null, it returns null. Examples This example gets the indentation setting for the current paragraph:



long ll_indent ll_indent = rte_1.GetParagraphSetting(Indent!))



See also GetAlignment GetSpacing GetTextColor GetTextStyle SetParagraphSetting



- 10.255 GetParent Description Obtains the parent of the specified object. Applies to Any object
