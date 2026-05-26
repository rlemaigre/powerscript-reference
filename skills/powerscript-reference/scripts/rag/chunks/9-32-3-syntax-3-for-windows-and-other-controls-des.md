# 9.32.3 Syntax 3: For windows and other controls Description Occurs when the user is dragging an object within the control.

- Table 9.89:



|Event ID|Objects|
|---|---|
|pbm_bndragwithin|CheckBox, CommandButton, Graph, InkEdit, InkPicture, Picture, PictureHyperLink, PictureButton, RadioButton|
|pbm_cbndragwith|inDropDownListBox, DropDownPictureListBox|
|pbm_dragwithin|DatePicker, MonthCalendar|
|pbm_endragwithin|SingleLineEdit, EditMask, MultiLineEdit, StaticText, StaticHyperLink|
|pbm_omndragwith|OLEin|
|pbm_prndragwithi|HProgressBar,n VProgressBar|
|pbm_rendragwithi|nRichTextEdit|
|pbm_sbndragwith|inHScrollBar, HTrackBar, VScrollBar, VTrackBar|
|pbm_uondragwith|inUserObject|
|pbm_dragwithin|Window|



Arguments



- Table 9.90:




|Argument|Description|
|---|---|
|source|DragObject by value (a reference to the control being dragged)|



Return Values Long. Return code choices (specify in a RETURN statement):



- 0 -- Continue processing Usage Obsolete functions




You no longer need to call the DraggedObject function in a drag event. Use the source argument instead.
