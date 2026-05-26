# See also Handle

- 10.360 KeyCount Description Gets the total number of keys. Applies to JSONPackage objects Syntax objectname.KeyCount ( )


- Table 10.442:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object.|



Return value Long. Returns the number of keys if it succeeds and -1 if an error occurs. Examples This example sets the value for keys and then gets the number of keys:



long ll_KeyCount datastore lds_employee datawindowchild ldwc_active



JsonPackage lnv_package lnv_package = create JsonPackage



...//Initialize data for lds_employee, ldwc_active // package the data lnv_package.SetValue("d_department", dw_department, false) lnv_package.SetValue("d_employee", lds_employee) lnv_package.SetValue("dddw_active", ldwc_active, false)



// ll_KeyCount will return 3 ll_KeyCount = lnv_package.KeyCount()



- 10.361 KeyDown Description Determines whether the user pressed the specified key on the computer keyboard. Syntax KeyDown ( keycode )


- Table 10.443:




|Argument|Description|
|---|---|
|keycode|A value of the KeyCode enumerated datatype that identifies a key on the computer keyboard or an integer whose value is the ASCII code for a key. Not all ASCII values are recognized; see Usage. See also the table of KeyCode values in Usage.|



Return value Boolean. Returns true if keycode was pressed and false if it was not. If keycode is null, KeyDown returns null. Usage



KeyDown does not report what character the user typed -- it reports whether the user was pressing the specified key when the event whose script is calling KeyDown was triggered.



Events



You can call KeyDown in a window's Key event or a keypress event for a control to determine whether the user pressed a particular key. The Key event occurs whenever the user presses a key as long as the insertion point is not in a line edit. The Key event is triggered repeatedly if the user holds down a repeating key. For controls, you can define a user event for pbm_keydown or pbm_dwnkey (DataWindows), and call KeyDown in its script.



You can also call KeyDown in a mouse event, such as Clicked, to determine whether the user also pressed a modifier key, such as Ctrl.



KeyCodes and ASCII values



KeyDown does not distinguish between uppercase and lowercase letters or other characters and their shifted counterparts. For example, KeyA! refers to the A key -- the user may have typed "A" or "a." Key9! refers to both "9" and "(". Instead, you can test whether a modifier key is also pressed.



KeyDown does not test whether Caps Lock or other toggle keys are in a toggled-on state, only whether the user is pressing it.



KeyDown only detects ASCII values 65-90 (KeyA! - KeyZ!) and 48-57 (Key0!-Key9!). These ASCII values detect whether the key was pressed, whether or not the user also pressed Shift or Caps Lock. KeyDown does not detect other ASCII values (such as 97-122 for lowercase letters).
