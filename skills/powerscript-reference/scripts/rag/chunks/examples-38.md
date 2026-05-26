# Examples

This code in the Gesture event of an InkEdit control confirms to the user that the gesture was recognized:



CHOOSE CASE gest



- CASE 0 MessageBox("Gesture recognized", &



"You entered a space")



- CASE 1 MessageBox("Gesture recognized", &



"You entered a backspace")



- CASE 2,4 MessageBox("Gesture recognized", &



"You entered a tab")



- CASE 3,5 MessageBox("Gesture recognized", &




"You entered a return") END CHOOSE return false



See also RecognitionResult Stroke



- 9.46 GetFocus Description Occurs just before the control receives focus (before it is selected and becomes active). GetFocus applies to all controls Event ID


- Table 9.123:




|Event ID|Objects|
|---|---|
|pbm_bnsetfocus|CheckBox, CommandButton, Graph, OLE, Picture, PictureHyperLink, PictureButton, RadioButton|
|pbm_cbnsetfocus|DropDownListBox, DropDownPictureListBox|
|pbm_dwnsetfocus|DataWindow|
|pbm_ensetfocus|SingleLineEdit, EditMask, MultiLineEdit, StaticText, StaticHyperLink|
|pbm_lbnsetfocus|ListBox, PictureListBox|



|Event ID|Objects|
|---|---|
|pbm_lvnsetfocus|ListView|
|pbm_rensetfocus|RichTextEdit|
|pbm_sbnsetfocus|HScrollBar, HTrackBar, VScrollBar, VTrackBar|
|pbm_setfocus|HProgressBar, VProgressBar, DatePicker, MonthCalendar, InkEdit, InkPicture|
|pbm_tcnsetfocus|Tab|
|pbm_tvnsetfocus|TreeView|



Arguments None Return Values Long. Return code choices (specified in a RETURN statement): 0 -- Continue processing Examples



- Example 1



This example in a SingleLineEdit control's GetFocus event selects the text in the control when the user tabs to it:



This.SelectText(1, Len(This.Text))



- Example 2




In Example 1, when the user clicks the SingleLineEdit rather than tabbing to it, the control gets focus and the text is highlighted, but then the click deselects the text. If you define a user event that selects the text and then post that event in the GetFocus event, the highlighting works when the user both tabs and clicks. This code is in the GetFocus event:



This. EVENT POST ue_select( )



This code is in the ue_select user event:



This.SelectText(1, Len(This.Text))



See also Clicked LoseFocus



- 9.47 Help Description




Occurs when the user drags the question-mark button from the title bar to a menu item or a control and then clicks, or when the user clicks in a control (giving it focus) and then presses the F1 key.
