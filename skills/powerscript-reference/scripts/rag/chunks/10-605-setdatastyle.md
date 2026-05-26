# 10.605 SetDataStyle

Specifies the appearance of a data point in a graph. The data point's series has appearance settings that you can override with SetDataStyle.



- Table 10.747:




|To|Use|
|---|---|
|Set the data point's colors|Syntax 1<br><br>|



|To|Use|
|---|---|
|Set the line style and width for the data point|Syntax 2|
|Set the fill pattern or symbol for the data point|Syntax 3<br><br>|



- 10.605.1 Syntax 1: For setting a data point's colors Description Specifies the colors of a data point in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax




controlname.SetDataStyle ( { graphcontrol, } seriesnumber, datapointnumber, colortype, color )



- Table 10.748:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to set the color of a data point, or the DataWindow containing the graph.|
|graphcontrol (Data control only) (optional)|AWindowstring whose value is the name of the graph in the DataWindow control in which you want to set the color of a data point.|
|seriesnumber|The number of the series in which you want to set the color of a data point.|
|datapointnumber|The number of the data point for which you want to set the color.|
|colortype|A value of the grColorType enumerated datatype specifying the aspect of the data point for which you want to set the color. Values are:<br><br>• Foreground! -- Text color<br>• Background! -- Background color<br>• LineColor! -- Line color<br>• Shade! -- Shade (for graphics that are three-dimensional or have solid objects)<br>|
|color|A long whose value is the new color for colortype.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetDataStyle returns null. Usage



To change the appearance of a series, use SetSeriesStyle. The settings you make for the series are the defaults for all data points in the series.



To reset the color of individual points back to the series color, call ResetDataColors. For a graph in a DataWindow, you can specify the appearance of a data point in the graph before PowerBuilder draws the graph. To do so, define a user event for pbm_dwngraphcreate and call SetDataStyle in the script for that event. The event pbm_dwngraphcreate is triggered just before a graph is created in a DataWindow object.
