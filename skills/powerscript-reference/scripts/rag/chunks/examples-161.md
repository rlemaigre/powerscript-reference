# Examples

This example creates a new OLE object in the control ole_1. It is an Excel object and contains data from the spreadsheet EXPENSE.XLS:



integer result result = ole_1.InsertFile("c:\xls\expense.xls")



See also InsertClass InsertObject LinkTo Paste



- 10.326 InsertItem Inserts an item into a ListBox, DropDownListBox, ListView, or TreeView control.


- Table 10.396:




|To insert an item into a|Use|
|---|---|
|ListBox or DropDownListBox control|Syntax 1|
|PictureListBox or DropDownPictureListBox control|Syntax 2|
|ListView control when only the label and picture index need to be specified|Syntax 3|
|ListView control when more than the label and picture index need to be specified|Syntax 4|
|TreeView control when only the label and picture index need to be specified|Syntax 5|
|TreeView control when more than the label and picture index need to be specified|Syntax 6<br><br>|



- 10.326.1 Syntax 1: For ListBox and DropDownListBox controls Description Inserts an item into the list of values in a list box. Applies to




ListBox and DropDownListBox controls Syntax



listboxname.InsertItem ( item, index )



- Table 10.397:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox or DropDownListBox into which you want to insert an item|
|item|A string whose value is the text of the item you want to insert|
|index|The number of the item in the list before which you want to insert the item|
