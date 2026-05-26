# Examples

These statements obtain the data value of data point 3 in the series named Costs in the graph gr_computers in the DataWindow control dw_equipment:



integer SeriesNbr, rtn double data_value



// Get the number of the series. SeriesNbr = dw_equipment.FindSeries( &



"gr_computers", "Costs") rtn = dw_equipment.GetDataValue( & "gr_computers" , SeriesNbr, 3, data_value)



These statements obtain the data value of the data point under the mouse pointer in the graph gr_prod_data and store it in data_value. If the user does not click on a data point, then ItemNbr is set to 0. The categories of the graph are time values:



integer SeriesNbr, ItemNbr, rtn time data_value grObjectType MouseHit



MouseHit = &



gr_prod_data.ObjectAtPointer(SeriesNbr, ItemNbr) IF ItemNbr > 0 THEN



rtn = gr_prod_data.GetDataValue( & SeriesNbr, ItemNbr, data_value)



END IF



These statements obtain the x value of the data point in the scatter graph gr_sales_yr and store it in data_value. If the user does not click on a data point, then ItemNbr is set to 0. The datatype of the category axis is Date:



integer SeriesNbr, ItemNbr, rtn date data_value



gr_product_data.ObjectAtPointer(SeriesNbr, ItemNbr) IF ItemNbr > 0 THEN



rtn = gr_sales_yr.GetDataValue( &



SeriesNbr, ItemNbr, data_value, xValue!) END IF



See also DeleteData FindSeries InsertData ObjectAtPointer



- 10.206 GetDateLimits Description Retrieves the maximum and minimum date limits specified for the calendar. Applies to MonthCalendar control Syntax controlname.GetDateLimits ( min, max )


- Table 10.248:




|Argument|Description|
|---|---|
|controlname|The name of the MonthCalendar control for which you want to determine the date limits|
|min|A date value returned by reference that represents the minimum date that can be referenced or displayed in the calendar|
|max|A date value returned by reference that represents the maximum date that can be referenced or displayed in the calendar|



Return value Integer.



- Returns 0 when both limits are retrieved successfully and one of the following negative values otherwise:


- -1 -- No limits were set
- -2 -- Unknown failure
