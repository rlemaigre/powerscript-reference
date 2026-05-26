# Examples

- Example 1



In this script for the LoseFocus event of a SingleLineEdit sle_town, the user is reminded to enter information if the text box is left empty:



IF sle_town.Text = "" THEN



st_status.Text = "You have not specified a town." END IF



- Example 2




Statements in the LoseFocus event for a DataWindow control dw_emp can trigger a user event whose script validates the last item the user entered.



This statement triggers the user event ue_accept:



dw_emp.EVENT ue_accept( )



This statement in ue_accept calls the AcceptText function:



dw_emp.AcceptText( )



This script for the LoseFocus event of a RichTextEdit control performs processing when the control actually loses focus:



GraphicObject l_control // Check whether the RichTextEdit still has focus l_control = GetFocus()



IF TypeOf(l_control) = RichTextEdit! THEN RETURN 0 // Perform processing only if RichTextEdit lost focus



...



This script gets the name of the control instead:



GraphicObject l_control string ls_name



- l_control = GetFocus() ls_name = l_control.Classname( ) See also GetFocus


- 9.67 Modified Description Occurs when the contents in the control have changed. Event ID


- Table 9.157:




|Event ID|Objects|
|---|---|
|pbm_cbnmodified|DropDownListBox, DropDownPictureListBox|
|pbm_enmodified|SingleLineEdit, EditMask, MultiLineEdit|
|pbm_inkemodified|InkEdit|
|pbm_renmodified|RichTextEdit|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



For plain text controls, the Modified event occurs when the user indicates being finished by pressing Enter or tabbing away from the control.



For InkEdit and RichText Edit controls, the value of the Modified property controls the Modified event. If the property is false, the event occurs when the first change occurs to the contents of the control. The change also causes the property to be set to true, which suppresses the Modified event. You can restart checking for changes by setting the property back to false.



Resetting the Modified property is useful when you insert text or a document in the control, which triggers the event and sets the property (it is reporting the change to the control's



contents). To find out when the user begins making changes to the content, set the Modified property back to false in the script that opens the document. When the user begins editing, the property will be reset to true and the event will occur again.



A Modified event can be followed by a LoseFocus event. Examples



In this example, code in the Modified event performs validation on the text the user entered in a SingleLineEdit control sle_color. If the user did not enter RED, WHITE, or BLUE, a message box indicates what is valid input; for valid input, the color of the text changes:



string ls_color This.BackColor = RGB(150,150,150) ls_color = Upper(This.Text) CHOOSE CASE ls_color



CASE "RED"



This.TextColor = RGB(255,0,0) CASE "BLUE"



This.TextColor = RGB(0,0,255) CASE "WHITE"



This.TextColor = RGB(255,255,255)



CASE ELSE This.Text = "" MessageBox("Invalid input", & "Enter RED, WHITE, or BLUE.")



END CHOOSE



This is not a realistic example: user input of three specific choices is more suited to a list box; in a real situation, the allowed input might be more general.



See also LoseFocus



- 9.68 MouseDown The MouseDown event has different arguments for different objects:


- Table 9.158:



|Object|See|
|---|---|
|RichTextEdit control|Syntax 1|
|Window|Syntax 2<br><br>|



- 9.68.1 Syntax 1: For RichTextEdit controls Description Occurs when the user presses the left mouse button on the RichTextEdit control. Event ID


- Table 9.159:




|Event ID|Objects|
|---|---|
|pbm_renlbuttondown|RichTextEdit|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



This code in a RichTextEdit control's MouseDown event assigns text to the SingleLineEdit sle_1 when the user presses the left mouse button:



- sle_1.text = "Mouse Down" See also Clicked MouseMove MouseUp


- 9.68.2 Syntax 2: For windows Description




Occurs when the user presses the left mouse button in an unoccupied area of the window (any area with no visible, enabled object).
