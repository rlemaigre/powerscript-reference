# Return value

- Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Invalid class name
- -9 -- Other error If any argument's value is null, InsertClass returns null. Usage Classnames are stored in the Registration database. Examples of classnames include: Excel.Sheet Excel.Chart Word.Document Examples This example inserts an empty Excel spreadsheet into the OLE control, ole_1:




integer result result = ole_1.InsertClass("excel.sheet")



See also InsertFile InsertObject LinkTo



- 10.322 InsertColumn Description Inserts a column with the specified label, alignment, and width at the specified location. Applies to ListView controls Syntax listviewname.InsertColumn ( index, label, alignment, width )

- Table 10.392:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control to which you want to insert a column.|
|index|An integer whose value is the number of the column before which you are inserting a new column.|
|label|A string whose value is the name of the column you are inserting.|
|alignment|A value of the enumerated datatype Alignment specifying the alignment of the column you are inserting. Values are:<br><br>Center! Justify! Left! Right!|
|width|An integer whose value is the width of the column you are inserting, in PowerBuilder units.|



Return value Integer. Returns the column index value if it succeeds and -1 if an error occurs. Usage



You can insert a column anywhere in the control. If the index you specify is greater than the current number of columns, the column is inserted after the last column.



Examples



This example inserts a column named Location, makes it right-aligned, and sets the column width to 300:



lv_list.InsertColumn(2 , "Location" , Right! , 300)



See also AddColumn DeleteColumn



- 10.323 InsertData Description




Inserts a data point in a series of a graph. You can specify the category for the data point or its position in the series. Does not apply to scatter graphs.
