# See also

AddData AddSeries DeleteData DeleteSeries



- 10.6 AddColumn Description Adds a column with a specified label, alignment, and width. Applies to ListView controls Syntax listviewname.AddColumn ( label, alignment, width )


- Table 10.6:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control to which you want to add a column.|
|label|A string whose value is the name of the column you are adding.|
|alignment|A value of the enumerated datatype Alignment specifying the alignment of the column you are adding. Values are:<br><br>• Center!<br>• Justify!<br>• Left!<br>• Right!<br>|
|width|An integer whose value is the width of the column you are adding, in PowerBuilder units.|



Return value Integer. Returns the column index if it succeeds and -1 if an error occurs. Usage



The AddColumn function adds a column at the end of the existing columns unlike the InsertColumn function which inserts a column at a specified location.



Use SetItem and SetColumn to change the values for existing items. To add new items, use AddItem. To create columns for the report view of a ListView control, use AddColumn.



Examples This script for a ListView event creates three columns in a ListView control:



integer index



FOR index = 3 to 25 This.AddItem ("Category " + String (index), 1 )



NEXT This.AddColumn("Name" , Left! , 1000) This.AddColumn("Size" , Left! , 400) This.AddColumn("Date" , Left! , 300)



See also AddItem DeleteColumn InsertColumn
