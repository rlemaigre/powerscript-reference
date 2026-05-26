# Event ID

- Table 9.128:



|Event ID|Objects|
|---|---|
|None|Application|



Arguments None Return Values None. (Do not use a RETURN statement.) Examples



This statement in an application script causes the Idle event to be triggered after 300 seconds of inactivity:



Idle(300)



In the Idle event itself, this statement closes the application:



HALT CLOSE



- 9.51 InputFieldSelected Description




In a RichTextEdit control, occurs when the user double-clicks an input field, allowing the user to edit the data in the field.



Event ID



- Table 9.129:



|Event ID|Objects|
|---|---|
|pbm_reninputfieldselected|RichTextEdit|



Arguments



- Table 9.130:




|Argument|Description|
|---|---|
|fieldname|String by value (the name of the input field that was selected)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



This script for the InputFieldSelected event of a RichTextEdit control gets the data in the input field the user is about to edit:



string ls_fieldvalue ls_fieldvalue = This.InputFieldGetData(fieldname)



See also PictureSelected



- 9.52 InsertItem Description Occurs when an item is inserted in the ListView. Event ID



Table 9.131:



|Event ID|Objects|
|---|---|
|pbm_lvninsertitem|ListView|



Arguments



Table 9.132:



|Argument|Description|
|---|---|
|index|An integer that represents the index of the item being inserted into the ListView|



Return Values Long. Return code choices (specified in a RETURN statement): 0 -- Continue processing Examples This example displays the label and index of the inserted item:



ListViewItem lvi This.GetItem(index, lvi) sle_info.Text = "Inserted "+ String(lvi.Label) &



+ " into position " &

+ String(index)



See also DeleteItem



- 9.53 ItemActivate Description




Occurs when a ListView item is clicked or double-clicked. The actual firing mechanism depends on the OneClickActivate and TwoClickActivate property settings.



- Table 9.133:



|Event ID|Objects|
|---|---|
|pbm_lvnitemactivate|ListView|



Arguments



- Table 9.134:



|Argument|Description|
|---|---|
|Index|An integer that represents the index of the item being inserted into the ListView|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



Use the ItemActivate event instead of the Clicked or DoubleClicked event in new applications.



The following ListView property settings determine which user action fires the event:



- Table 9.135:




|OneClickActivate|TwoClickActivate|Firing mechanism|
|---|---|---|
|True|True|Single click|
|True|False|Single click|
|False|True|Single click on selected item or double-click on nonselected item|
|False|False|Double-click|
