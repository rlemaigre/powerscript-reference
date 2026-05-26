# 9.108.1 Syntax 1: For ListView controls Description

Occurs for each comparison when the ListView is being sorted. Event ID



- Table 9.242:



|Event ID|Objects|
|---|---|
|pbm_lvnsort|ListView|



Arguments



- Table 9.243:




|Argument|Description|
|---|---|
|index1|Integer by value (the index of one item being compared during a sorting operation)|
|index2|Integer by value (the index of the second item being compared)|
|column|Integer by value (the number of the column containing the items being sorted)|



Return Values Long. Return code choices (specify in a RETURN statement):



-1 -- index1 is less than index2 0 -- index1 is equal to index2 1 -- index1 is greater than index2 Usage



The Sort event allows you to fine-tune the sort order of the items being sorted. You can examine the properties of each item and tell the Sort function how to sort them by selecting one of the return codes.



You typically use the Sort event when you want to sort ListView items based on multiple criteria such as a PictureIndex and Label.



The Sort event occurs if you call the Sort event, or when you call the Sort function using the UserDefinedSort! argument.
