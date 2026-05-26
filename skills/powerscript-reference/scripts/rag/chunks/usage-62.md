# Usage

When you specify datapoint without specifying categoryvalue, InsertData inserts the data point in the category at that position, shifting existing data points to the following categories. The shift may cause there to be uncategorized data points at the end of the axis.



When you specify categoryvalue, InsertData ignores the position in datapoint and puts the data point in the specified category, replacing any data value that is already there. If the category does not exist, InsertData creates the category at the end of the axis.



To modify the value of a data point at a specified position, use ModifyData.



Scatter graphs To add data to a scatter graph, use Syntax 2 of AddData.



Equivalent syntax If you want to add a data point to the end of a series or to an existing category in a series, you can use AddData instead, which requires fewer arguments. InsertData and ModifyData behave differently when you specify datapoint to indicate a position for inserting or modifying data. However, they behave the same as AddData when you specify a position of 0 and a category. All three modify the value of a data point when the category already exists. All three insert a category with a data value at the end of the axis when the category does not exist.



When you specify a position as well as a category, and that category already exists, InsertData ignores the position and modifies the data of the specified category, but ModifyData changes the category label at that position.



This statement:



gr_data.InsertData(1, 0, 44, "Qty")



is equivalent to:



gr_data.ModifyData(1, 0, 44, "Qty")



and is also equivalent to:



gr_data.AddData(1, 44, "Qty")



When you specify a position, the following statements are not equivalent:



- • InsertData ignores the position and modifies the data value of the Qty category: gr_data.InsertData(1, 4, 44, "Qty")

- • ModifyData changes the category label and the data value at position 4: gr_data.ModifyData(1, 4, 44, "Qty")
