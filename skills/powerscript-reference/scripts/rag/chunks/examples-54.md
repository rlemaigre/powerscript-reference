# Examples

This example sorts ListView items according to PictureIndex and Label sorting by PictureIndex first, and then by label:



ListViewItem lvi, lvi2 This.GetItem(index1, lvi) This.GetItem(index2, lvi2) IF lvi.PictureIndex > lvi2.PictureIndex THEN



RETURN 1 ELSEIF lvi.PictureIndex < lvi2.PictureIndex THEN RETURN -1 ELSEIF lvi.label > lvi2.label THEN



RETURN 1 ELSEIF lvi.label < lvi2.label THEN



RETURN -1 ELSE END IF



- RETURN 0


- 9.108.2 Syntax 2: For TreeView controls Description Occurs for each comparison when the TreeView is being sorted. Event ID


- Table 9.244:



|Event ID|Objects|
|---|---|
|pbm_tvnsort|TreeView|



Arguments



- Table 9.245:




|Argument|Description|
|---|---|
|handle1|Long by value (the handle of one item being compared during a sorting operation)|
|handle2|Long by value (the handle of the second item being compared)|



Return Values Long. Return code choices (specify in a RETURN statement):



-1 -- handle1 is less than handle2 0 -- handle1 is equal to handle2 1 -- handle1 is greater than handle2 Usage



The Sort event allows you to fine-tune the sort order of the items being sorted. You can examine the properties of each item and tell the Sort function how to sort them by selecting one of the return codes.



You typically use the Sort event when you want to sort TreeView items based on multiple criteria such as a PictureIndex and Label.



The Sort event occurs if you call the Sort event, or when you call the Sort function using the UserDefinedSort! argument.
