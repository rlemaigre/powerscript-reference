# Examples

This code in the LineDown event causes the thumb to move down when the user clicks on the down arrow of the vertical scroll bar and displays the resulting position in the StaticText control st_1:



IF This.Position > This.MaxPosition - 1 THEN



This.Position = MaxPosition ELSE



This.Position = This.Position + 1 END IF st_1.Text = "LineDown " + String(This.Position)



See also LineLeft LineRight LineUp PageDown
