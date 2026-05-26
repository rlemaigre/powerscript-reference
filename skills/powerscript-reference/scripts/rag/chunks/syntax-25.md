# Syntax

controlname.AddCategory ( categoryname )



- Table 10.5:




|Argument|Description|
|---|---|
|controlname|The name of the graph to which you want to add a category.|
|categoryname|A string whose value is the name of the category you want to add to controlname. The category will appear as a label on the category axis.|



Return value Integer. Returns the number assigned to the category if it succeeds. If categoryname already exists as a label on the category axis, AddCategory returns the number of the existing category. Returns -1 if an error occurs. If any argument's value is null, AddCategory returns null. Usage



AddCategory adds a category to the end of the category axis. The category becomes an empty slot in each series to which you can assign a data point. A tick mark exists on the category axis for all the categories associated with the graph.



When the datatype of the category axis is string, you can specify the empty string ("") as the category name. However, because category names must be unique, there can be only one category with that name. Category names are unique if they have different capitalization.



To add categories when the axis datatype is date, DateTime, number, or time, use InsertCategory. To insert a category in the middle of a series, use InsertCategory. You can also use InsertCategory to add a category to the end of a series, as AddCategory does, but it requires an additional argument to do so.



To add data to a series in the graph, use the AddData or InsertData function. You can add a data value and put it in a new category, or you can add or change data in an existing category. To add a series to the graph, use the AddSeries function.



Examples This statement adds a category named PCs to the graph gr_product_data:



gr_product_data.AddCategory("PCs")
