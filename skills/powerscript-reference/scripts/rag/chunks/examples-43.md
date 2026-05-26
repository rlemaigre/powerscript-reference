# Examples

This code in the LineRight event causes the thumb to move right when the user clicks on the right arrow of the horizontal scroll bar and displays the resulting position in the StaticText control st_1:



IF This.Position > This.MaxPosition - 1 THEN



This.Position = MaxPosition ELSE



This.Position = This.Position + 1 END IF st_1.Text = "LineRight " + String(This.Position)



See also LineDown LineLeft LineUp PageRight
