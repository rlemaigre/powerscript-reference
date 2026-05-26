# Examples

This example allows the user to edit the label of the first selected item in the ListView control lv_1:



integer li_selected li_selected = lv_1.SelectedIndex() lv_1.EditLabels = TRUElv_1.EditLabel(li_selected)



See also FindItem



- 10.133.2 Syntax 2: For editing a label in a TreeView Description Puts a label in a TreeView into edit mode. Applies to TreeView controls Syntax treeviewname.EditLabel ( itemhandle )


- Table 10.163:




|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to enable label editing|
|itemhandle|The handle of the item to be edited|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. Usage




The EditLabels property for the TreeView must be set to true to enable editing of labels. When this property is true, calling the EditLabel function sets focus on the item and enables editing. To disable editing when the user has finished editing the label, set the EditLabels property to false in the EndLabelEdit event.



If the EditLabels property is set to false, the EditLabel function does not enable editing. Examples This example allows the user to edit the label of the current TreeView item:



long ll_tvi ll_tvi = tv_list.FindItem(CurrentTreeItem!, 0) tv_list.EditLabels = TRUE tv_list.EditLabel(ll_tvi)



See also FindItem



- 10.134 Enable Description Enables an item on a menu so a user can select it. Applies to Menu objects Syntax menuname.Enable ( )

- Table 10.164:




|Argument|Description|
|---|---|
|menuname|The name of the menu selection you want to enable|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If menuname is null, Enable returns null. Usage



Enabling a menu item changes its color to the active color (not the dimmed, or disabled, color). Calling Enable sets the item's Enabled property to true.



Equivalent syntax Setting the menu's Enabled property is the same as calling Enable.



menuname.Enabled = TRUE



This statement:



menu_appl.m_delete.Enabled = TRUE



is equivalent to:



menu_appl.m_delete.Enable()



Examples This statement enables the m_delete menu selection on the menu m_appl:



m_appl.m_delete.Enable()



See also Disable



- 10.135 EnableCommit Description




Declares that a component's work may be incomplete but its transaction updates are consistent and can be committed.



Applies to TransactionServer objects
