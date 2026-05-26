# Examples

This example checks the background color for data point 6 in the series named Salary in the graph gr_emp_data. If it is red, SetDataStyle sets it to black:



long color_nbr integer SeriesNbr // Get the number of the series SeriesNbr = gr_emp_data.FindSeries("Salary") // Get the background color gr_emp_data.GetDataStyle(SeriesNbr, 6, &



Background!, color_nbr) // If color is red, change it to black IF color_nbr = 255 THEN &



gr_emp_data.SetDataStyle(SeriesNbr, 6, & Background!, 0)



These statements set the text (foreground) color to black for data point 6 in the series named Salary in the graph gr_depts in the DataWindow control dw_employees:



integer SeriesNbr // Get the number of the series SeriesNbr = &



dw_employees.FindSeries("gr_depts" , "Salary") // Set the background color dw_employees.SetDataStyle("gr_depts" , SeriesNbr, &



6, Background!, 0)



See also GetDataStyle GetSeriesStyle ResetDataColors SeriesName SetSeriesStyle



- 10.605.2 Syntax 2: For the line associated with a data point Description Specifies the style and width of a data point's line in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls
