# Return Values Long.

Return code choices (specified in a RETURN statement): 0 -- Continue processing Examples This example changes the picture for the collapsed item:



TreeViewItem l_tvi integer li_level



This.GetItem(handle, l_tvi) CHOOSE CASE l_tvi.Level



- CASE 1 l_tvi.PictureIndex = 1 l_tvi.SelectedPictureIndex = 1
- CASE 2 l_tvi.PictureIndex = 2 l_tvi.SelectedPictureIndex = 2
- CASE 3 l_tvi.PictureIndex = 3 l_tvi.SelectedPictureIndex = 3
- CASE 4 l_tvi.PictureIndex = 4 l_tvi.SelectedPictureIndex = 4




END CHOOSE This.SetItem(handle, l_tvi)



See also ItemCollapsing



- 9.57 ItemCollapsing Description Occurs when a TreeView item is collapsing. Event ID


- Table 9.142:



|Event ID|Objects|
|---|---|
|pbm_tvnitemcollapsing|TreeView|



Arguments



- Table 9.143:




|Argument|Description|
|---|---|
|handle|Long by reference (the handle of the collapsing item)|



The ItemCollapsing event occurs before the ItemCollapsed event. Examples This example changes the picture for the collapsing item:



TreeViewItem l_tvi integer li_level



This.GetItem(handle, l_vti) CHOOSE CASE l_tvi.level



- CASE 1 l_tvi.PictureIndex = 1

- l_tvi.SelectedPictureIndex = 1



CASE 2 l_tvi.PictureIndex = 2



- l_tvi.SelectedPictureIndex = 2



CASE 3 l_tvi.PictureIndex = 3



- l_tvi.SelectedPictureIndex = 3



CASE 4 l_tvi.PictureIndex = 4



- l_tvi.SelectedPictureIndex = 4






END CHOOSE This.SetItem(handle, l_tvi)



See also ItemCollapsed



- 9.58 ItemExpanded Description Occurs when a TreeView item has expanded. Event ID


- Table 9.144:



|Event ID|Objects|
|---|---|
|pbm_tvnitemexpanded|TreeView|



Arguments



- Table 9.145:




|Argument|Description|
|---|---|
|handle|Long by reference (the handle of the expanded item)|



The ItemExpanded event occurs after the ItemExpanding event. Examples This example sets the picture and selected picture for the expanded item:



TreeViewItem l_tvi integer li_level



This.GetItem(handle, l_tvi) CHOOSE CASE l_tvi.Level



CASE 1 l_tvi.PictureIndex = 5



- l_tvi.SelectedPictureIndex = 1



CASE 2 l_tvi.PictureIndex = 5



- l_tvi.SelectedPictureIndex = 2



CASE 3 l_tvi.PictureIndex = 5



- l_tvi.SelectedPictureIndex = 3




CASE 4 l_tvi.PictureIndex = 4 l_tvi.SelectedPictureIndex = 5



END CHOOSE This.SetItem(handle, l_tvi)



See also ItemExpanding



- 9.59 ItemExpanding Description Occurs while a TreeView item is expanding. Event ID


- Table 9.146:



|Event ID|Objects|
|---|---|
|pbm_tvnitemexpanding|TreeView|



Arguments



- Table 9.147:




|Argument|Description|
|---|---|
|handle|Long by reference (the handle of the expanding TreeView item)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing 1 -- Prevents the TreeView from expanding



The ItemExpanding event occurs before the ItemExpanded event. Examples This example sets the picture and selected picture for the expanding item:



TreeViewItem l_tvi integer li_level



This.GetItem(handle, l_tvi) CHOOSE CASE l_tvi.Level



- CASE 1 l_tvi.PictureIndex = 5 l_tvi.SelectedPictureIndex = 1
- CASE 2 l_tvi.PictureIndex = 5 l_tvi.SelectedPictureIndex = 2
- CASE 3 l_tvi.PictureIndex = 5 l_tvi.SelectedPictureIndex = 3
- CASE 4 l_tvi.PictureIndex = 4 l_tvi.SelectedPictureIndex = 5




END CHOOSE This.SetItem(handle, l_tvi)



See also ItemExpanded



- 9.60 ItemPopulate Description Occurs when a TreeView item is being populated with children. Event ID


- Table 9.148:



|Event ID|Objects|
|---|---|
|pbm_tvnitempopulate|TreeView|



Arguments



- Table 9.149:




|Argument|Description|
|---|---|
|handle|Long by reference (the handle of the TreeView item being populated)|



Return Values Long. Return code choices (specified in a RETURN statement): 0 -- Continue processing Examples



This example displays the name of the TreeView item you are populating in a SingleLineEdit:



TreeViewItem tvi This.GetItem(handle, tvi) sle_get.Text = "Populating TreeView item " & + String(tvi.Label) + " with children"



See also ItemExpanding



- 9.61 Key Description Occurs when the user presses a key. Event ID


- Table 9.150:



|Event ID|Objects|
|---|---|
|pbm_lvnkeydown|ListView|
|pbm_renkey|RichTextEdit|
|pbm_tcnkeydown|Tab|
|pbm_tvnkeydown|TreeView|
|pbm_keydown|Window|



Arguments



- Table 9.151:




|Argument|Description|
|---|---|
|key|KeyCode by value. A value of the KeyCode enumerated datatype indicating the key that was pressed (for example, KeyA! or KeyF1!).|
|keyflags|UnsignedLong by value (the modifier keys that were pressed with the key).<br><br>Values are:<br><br>1 Shift key<br>2 Ctrl key<br>3 Shift and Ctrl keys<br>|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing 1 -- Do not process the key (RichTextEdit controls only)
