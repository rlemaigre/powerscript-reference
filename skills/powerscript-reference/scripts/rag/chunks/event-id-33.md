# Event ID

- Table 9.256:



|Event ID|Objects|
|---|---|
|pbm_syskeydown|Window|



Arguments



- Table 9.257:




|Argument|Description|
|---|---|
|key|KeyCode by value. A value of the KeyCode enumerated datatype indicating the key that was pressed, for example, KeyA! or KeyF1!.|
|keyflags|UnsignedLong by value (the modifier keys that were pressed with the key). The only modifier key is the Shift key.|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing



Usage Pressing the Ctrl key prevents the SystemKey event from firing when the Alt key is pressed. Examples This example displays the name of the key that was pressed with the Alt key:



string ls_key CHOOSE CASE key CASE KeyF1!



ls_key = "F1" CASE KeyA!



ls_key = "A" CASE KeyF2!



ls_key = "F2" END CHOOSE



This example causes a beep if the user presses Alt+Shift+F1.



IF keyflags = 1 THEN IF key = KeyF1 THEN



Beep(1) END IF



END IF



See also Key
