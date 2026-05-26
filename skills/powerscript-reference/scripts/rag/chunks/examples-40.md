# Examples

This example causes a beep when the user presses F1 or F2, as long as Shift and Ctrl are not pressed:



IF keyflags = 0 THEN IF key = KeyF1! THEN Beep(1) ELSEIF key = KeyF2! THEN



Beep(20) END IF



END IF



This line displays the value of keyflags when a key is pressed.



st_1.Text = String(keyflags)



See also SystemKey
