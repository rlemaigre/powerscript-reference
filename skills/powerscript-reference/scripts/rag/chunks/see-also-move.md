# See also Move

- 10.133 EditLabel Put a label in a ListView or TreeView control into edit mode.


- Table 10.161:



|To enable editing of a label in a|Use|
|---|---|
|ListView control|Syntax 1|
|TreeView control|Syntax 2<br><br>|



- 10.133.1 Syntax 1: For editing a label in a ListView Description Puts a label in a ListView into edit mode. Applies to ListView controls Syntax listviewname.EditLabel ( index )


- Table 10.162:




|Argument|Description|
|---|---|
|listviewname|The ListView control in which you want to enable label editing|
|index|The index of the ListView item to be edited|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. Usage




The EditLabels property for the ListView must be set to true to enable editing of labels. When this property is true, calling the EditLabel function sets focus on the item and enables editing. To disable editing when the user has finished editing the label, set the EditLabels property to false in the EndLabelEdit event.



If the EditLabels property is set to false, the EditLabel function does not enable editing.
