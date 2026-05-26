# 10.203 GetDataStyle

Finds out the appearance of a data point in a graph. Each data point in a series can have individual appearance settings. There are different syntaxes, depending on what settings you want to check.



- Table 10.242:




|To get the|Use|
|---|---|
|Data point's colors|Syntax 1|
|Line style and width used by the data point|Syntax 2|
|Fill pattern or symbol for the data point|Syntax 3<br><br>|



GetDataStyle provides information about a single data point. The series to which the data point belongs has its own style settings. In general, the style values for the data point are the same as its series' settings. Use SetDataStyle to change the style values for individual data points. Use GetSeriesStyle and SetSeriesStyle to get and set style information for the series. The graph stores style information for properties that do not apply to the current graph type. For example, you can find out the fill pattern for a data point or a series in a 2-dimensional line graph, but that fill pattern will not be visible. For the enumerated datatype values that GetDataStyle stores in linestyle and enumvariable, see SetDataStyle.



- 10.203.1 Syntax 1: For the colors of a data point Description Obtains the colors associated with a data point in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax




controlname.GetDataStyle ( { graphcontrol, } seriesnumber, datapointnumber, colortype, colorvariable )



- Table 10.243:




|Argument|Description|
|---|---|
|controlname|The name of the graph for which you want the color of a data point, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data Window control only)|(Optional) When controlname is a DataWindow control, the name of the graph for which you want the color of a data point.|
|seriesnumber|The number of the series in which you want the color of a data point.|
|datapointnumber|The number of the data point for which you want the color.|
|colortype|A value of the grColorType enumerated datatype specifying the aspect of the data point for which you want the color. Values are:<br><br>• Background! -- The background color<br>• Foreground! -- Text (fill color)<br>• LineColor! -- The color of the line<br>• Shade! -- The shaded area of three-dimensional graphics<br>|
|colorvariable|A long variable in which you want to store the color.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Stores a color value in colorvariable. If any argument's value is null, GetDataStyle returns null. Examples



This example gets the text (foreground) color used for data point 6 in the series named Salary in the graph gr_emp_data. It stores the color value in the variable color_nbr:



long color_nbr integer SeriesNbr



// Get the number of the series SeriesNbr = gr_emp_data.FindSeries("Salary")



// Get the color gr_emp_data.GetDataStyle(SeriesNbr, 6, &



Foreground!, color_nbr)



This example gets the background color used for data point 6 in the series entered in the SingleLineEdit sle_series in the DataWindow graph gr_emp_data. It stores the color value in the variable color_nbr:



long color_nbr integer SeriesNbr



// Get the number of the series SeriesNbr = FindSeries("gr_emp_data", sle_series.Text)



// Get the color



dw_emp_data.GetDataStyle("gr_emp_data", & SeriesNbr, 6, Background!, color_nbr)



See also FindSeries GetSeriesStyle SetDataStyle SetSeriesStyle



- 10.203.2 Syntax 2: For the line style and width used by a data point Description Obtains the line style and width for a data point in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax




controlname.GetDataStyle ( { graphcontrol, } seriesnumber, datapointnumber, linestyle, linewidth )



- Table 10.244:




|Argument|Description|
|---|---|
|controlname|The name of the graph for which you want the line style and width of a data point, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph (in the DataWindow control) for which you want the line style and width of a data point.|
|seriesnumber|The number of the series in which you want the line style and width of a data point.|
|datapointnumber|The number of the data point for which you want the line style and width.|
|linestyle|A variable of type LineStyle in which you want to store the line style.|
|linewidth|An integer variable in which you want to store the width of the line. The width is measured in pixels.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. For the specified series and data point, stores its line style in linestyle and the line's width in linewidth. If any argument's value is null, GetDataStyle returns null. Usage For the enumerated datatype values that GetDataStyle will store in linestyle, see SetDataStyle. Examples



This example gets the line style and width of data point 10 in the series named Costs in the graph gr_product_data. It stores the information in the variables line_style and line_width:



integer SeriesNbr, line_width LineStyle line_style



// Get the number of the series SeriesNbr = gr_product_data.FindSeries("Costs") gr_product_data.GetDataStyle(SeriesNbr, 10, &



line_style, line_width)



This example gets the line style and width for data point 6 in the series entered in the SingleLineEdit sle_series in the graph gr_depts in the DataWindow control dw_employees. The information is stored in the variables line_style and line_width:



integer SeriesNbr, line_width LineStyle line_style



// Get the number of the series SeriesNbr = dw_employees.FindSeries( &



" gr_depts " , sle_series.Text)



// Get the line style and width dw_employees.GetDataStyle("gr_depts", SeriesNbr, &



6, line_style, line_width)



See also FindSeries GetSeriesStyle SetDataStyle SetSeriesStyle



- 10.203.3 Syntax 3: For the fill pattern or symbol of a data point Description Obtains the fill pattern or symbol of a data point in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax




controlname.GetDataStyle ( { graphcontrol, } seriesnumber, datapointnumber, enumvariable )
