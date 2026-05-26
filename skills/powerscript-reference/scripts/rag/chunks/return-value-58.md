# Return value

Integer. Returns the final position of the item. Returns -1 if an error occurs. If any argument's value is null, InsertItem returns null.



Usage If you do not specify a picture index, the newly added item will not have a picture. If you specify a picture index that does not exist, that number is still stored with the picture. If you add pictures to the picture array so that the index becomes valid, the item will then show the corresponding picture. For additional notes about items in ListBoxes and examples of how the Sorted property affects the item order, see Syntax 1. Examples



This statement inserts the item Run Application before the fifth item in lb_actions. The item has no picture assigned to it:



plb_actions.InsertItem("Run Application", 5)



This statement inserts the item Run Application before the fifth item in lb_actions and assigns it picture index 4:



plb_actions.InsertItem("Run Application", 4, 5)



See also AddItem DeleteItem FindItem Reset TotalItems



- 10.326.3 Syntax 3: For ListView controls Description Inserts an item into a ListView control. Applies to ListView controls Syntax listviewname.InsertItem ( index, label, pictureindex )



Table 10.399:



|Argument|Description|
|---|---|
|listviewname|The name of the ListView control to which you are adding an item|
|index|An integer whose value is the index number of the item before which you are inserting a new item|
|label|A string whose value is the name of the item you are adding|
|pictureindex|An integer whose value is the index number of the picture of the item you are adding|



Return value Integer. Returns index if it succeeds and -1 if an error occurs. Usage If you need to set more than the label and picture index, use Syntax 4. Examples This example inserts an item in the ListView in position 11:



lv_list.InsertItem(11 , "Presentation" , 1)



See also AddItem



- 10.326.4 Syntax 4: For ListView controls Description Inserts an item into a ListView control. Applies to
