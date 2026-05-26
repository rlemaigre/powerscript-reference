# Examples

This code in the LineLeft event causes the thumb to move left when the user clicks on the left arrow of the horizontal scroll bar and displays the resulting position in the StaticText control st_1:



IF This.Position < This.MinPosition + 1 THEN



This.Position = MinPosition ELSE



This.Position = This.Position - 1 END IF st_1.Text = "LineLeft " + String(This.Position)



See also LineDown LineRight LineUp PageLeft
