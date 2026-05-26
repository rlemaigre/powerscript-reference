# 10.21 AddSeries Description

Adds a series to a graph, naming it with the specified name. The new series is also assigned a number. A graph's series are numbered consecutively, according to the order in which they are added. Applies to Graph controls in windows and user objects. Does not apply to graphs within DataWindow objects because their data comes directly from the DataWindow. Syntax



controlname.AddSeries ( seriesname )



- Table 10.28:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to add a series|
|seriesname|A string whose value is the name of the series you want to add to controlname|



Return value Integer. Returns the number assigned to the series if it succeeds. If seriesname is a duplicate, AddSeries returns the number of the existing series. If an error occurs, it returns -1. If any argument's value is null, AddSeries returns null. Usage



Adds seriesname to the graph controlname and assigns the series a number. The number identifies the series within the graph. The numbers are assigned in sequence. The first series you add to the graph is assigned number 1 and is the first series displayed in the graph; the next is assigned 2; and so on.



The series name must be unique within the graph. If you specify a name that already exists in the graph, AddSeries returns the number of the existing series. Series names are unique if they have different capitalization. The series name can be an empty string (""). However, because series names must be unique, only one series can have a blank name. If you want to insert a series in the middle of the list, use InsertSeries. You can also use InsertSeries to add a series to the end of the list, as AddSeries does, although it requires an additional argument to do it.



To add data to a series in the graph, use the AddData or InsertData function. To add a category to a series, use the InsertCategory or AddCategory function.
