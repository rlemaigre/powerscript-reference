# Arguments

- Table 9.120:



|Argument|Description|
|---|---|
|gest|Integer identifying the gesture recognized. See the tables in the Usage section for argument values.|



Return Values Boolean. Return false to accept the gesture and true to ignore it. Usage



The Gesture event is triggered only on a Tablet PC. On a Tablet PC, the InkEdit control recognizes the following gestures that represent keystrokes that are frequently used in edit controls. To ensure that the gestures are recognized, users should draw straight lines and sharp right angles without removing the stylus from the control. InkEdit controls on other computers behave as MultiLineEdit controls and cannot accept ink input from a mouse.



- Table 9.121:



|Gesture|Gesture name|Argument value|Keystroke|
|---|---|---|---|
|![image 2](<PowerBuilder_2019_powerscript_reference_2019_images/imageFile2.png>)|Left|0|Backspace|
|![image 3](<PowerBuilder_2019_powerscript_reference_2019_images/imageFile3.png>)|Right|1|Space|
|![image 4](<PowerBuilder_2019_powerscript_reference_2019_images/imageFile4.png>)|UpRightLong|2|Tab|
|![image 5](<PowerBuilder_2019_powerscript_reference_2019_images/imageFile5.png>)|DownLeftLong|3|Enter|
|![image 6](<PowerBuilder_2019_powerscript_reference_2019_images/imageFile6.png>)|UpRight|4|Tab|
|![image 7](<PowerBuilder_2019_powerscript_reference_2019_images/imageFile7.png>)|DownLeft|5|Enter|



On a Tablet PC, the InkPicture control recognizes the following gestures that are equivalent to mouse clicks:



- Table 9.122:




|Gesture name|Argument value|Mouse action|
|---|---|---|
|Tap|1|Left Click|



|Gesture name|Argument value|Mouse action|
|---|---|---|
|Double Tap|2|Left Double Click|



When you tap the stylus or click a mouse in an InkPicture control on a Tablet PC, the Gesture event is triggered. On other computers, a mouse click triggers the Stroke event. The CollectionMode property must be set to GestureOnly! for a double tap to be recognized. Only single-stroke gestures are recognized when CollectionMode is set to InkAndGesture!. If a gesture is not recognized, the value of the argument is 0.
