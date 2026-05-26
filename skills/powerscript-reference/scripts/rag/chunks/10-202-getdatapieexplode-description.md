# 10.202 GetDataPieExplode Description

Reports the percentage of the pie graph's radius that a pie slice is exploded. An exploded slice is moved away from the center of the pie in order to draw attention to the data.



Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax



controlname.GetDataPieExplode ( { graphcontrol, } series, datapoint, percentage )



- Table 10.241:




|Argument|Description|
|---|---|
|controlname|The name of the graph for which you want the percentage a pie slice is exploded, or the name of the DataWindow control containing the graph|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control for which you want the percentage a pie slice is exploded|
|series|The number that identifies the series|
|datapoint|The number of the exploded data point (that is, the pie slice)|
|percentage|An integer variable in which you want to store the percentage of the graph's radius that the pie slice is exploded|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, GetDataPieExplode returns null. Examples



This example reports the percentage that a pie slice is exploded when the user clicks on that slice. The code checks whether the graph is a pie graph using the property Graphite. It then finds out whether the user clicked on a pie slice by checking the series and data point values set by ObjectAtPointer. The script is for the DoubleClicked event of a graph object:



integer series, datapoint grObjectType clickedtype integer percentage



percentage = 50 IF (This.GraphType <> PieGraph! and &



This.GraphType <> Pie3D!) THEN RETURN clickedtype = This.ObjectAtPointer(series, & datapoint)



IF (series > 0 and datapoint > 0) THEN This.GetDataPieExplode(series, datapoint, & percentage) MessageBox("Explosion Percentage", &



"Data point " + This.CategoryName(datapoint) &



+ " in series " + This.SeriesName(series) &

+ " is exploded " + String(percentage) + "%") END IF



See also SetDataPieExplode
