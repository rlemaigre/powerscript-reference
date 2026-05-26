# Event ID

- Table 9.182:




|Event ID|Objects|
|---|---|
|pbm_sbnpagedown|HScrollBar, HTrackBar|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



When the user clicks in a horizontal scroll bar, nothing happens unless you have scripts that change the scroll bar's Position property:



- • For the scroll bar arrows, use the LineLeft and LineRight events.
- • For clicks in the scroll bar background above and below the thumb, use the PageLeft and Right event.
- • For dragging the thumb itself, use the Moved event.
