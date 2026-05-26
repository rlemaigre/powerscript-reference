# Examples

This example uses the ColumnClicked event to set up a instance variable for the column argument, retrieve column alignment information, and display it to the user:



string ls_label, ls_align



integer li_width alignment la_align



ii_col = column This.GetColumn(column, ls_label, la_align, &



li_width)



CHOOSE CASE la_align CASE Right!



rb_right.Checked = TRUE ls_align = "Right!"



CASE Left! rb_left.Checked = TRUE ls_align = "Left!"



CASE Center! rb_center.Checked = TRUE ls_align = "Center!"



CASE Justify! rb_just.Checked = TRUE ls_align = "Justify!"



END CHOOSE sle_info.Text = String(column) &



+ " " + ls_label & + " " + ls_align & + " " + String(li_width)



See also Clicked
