# Examples

If the insertion point is positioned before the fifth character on line 8 of the RichTextEdit rte_Contact, the following example sets ll_col to 5 and ll_line to 8:



long ll_col, ll_line ll_col = rte_Contact.SelectedColumn() ll_line = rte_Contact.SelectedLine()



See also LineLength Position SelectedLine SelectedPage SelectedText TextLine



- 10.565 SelectedIndex Description Obtains the number of the selected item in a ListBox or ListView control. Applies to ListBox and ListView controls Syntax listcontrolname.SelectedIndex ( )


- Table 10.698:




|Argument|Description|
|---|---|
|listcontrolname|The name of the ListBox or ListView control in which you want to locate the selected item|



Return value Integer. Returns the index of the selected item in listcontrolname. If more than one item is selected, SelectedIndex returns the index of the first selected item. If there are no selected items or an error occurs, SelectedIndex returns -1. If listcontrolname is null, SelectedIndex returns null. Usage



SelectedIndex and SelectedItem are meant for lists that allow a single selection only (when the MultiSelect property for the control is false).



When the MultiSelect property is true, SelectedIndex gets the index of the first selected item only. Use the State function, instead of SelectedIndex, to check each item in the list and find out if it is selected. Use the Text function to get the text of any item in the list.



Examples If item 5 in lb_actions is selected, then this example sets li_Index to 5:



integer li_Index li_Index = lb_actions.SelectedIndex()



These statements open the window w_emp if item 5 in lb_actions is selected:



integer li_X li_X = lb_actions.SelectedIndex() If li_X = 5 then Open(w_emp)



See also SelectedItem



- 10.566 SelectedItem Description Obtains the text of the selected item in a ListBox control. Applies to ListBox and PictureListBox controls Syntax listboxname.SelectedItem ( )


- Table 10.699:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox or PictureListBox in which you want the text of the currently selected item|



Return value String. Returns the text of the selected item in listboxname. Returns the empty string ("") if no items are selected. If listboxname is null, SelectedItem returns null. Usage



SelectedIndex and SelectedItem are meant for lists that allow a single selection only (when the MultiSelect property for the control is false).



When the MultiSelect property is true, SelectedItem gets the text of the first selected item only. Use the State function, instead of SelectedItem, to check each item in the list and find out if it is selected. Use the Text function to get the text of any item in the list.
