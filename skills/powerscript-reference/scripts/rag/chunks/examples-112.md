# Examples

These statements obtain the data value of data point 3 in the series named Costs in the graph gr_computers in the DataWindow control dw_equipment:



integer SeriesNbr double data_value // Get the number of the series. SeriesNbr = &



dw_equipment.FindSeries("gr_computers", "Costs") data_value = dw_equipment.GetData( &



"gr_computers" , SeriesNbr, 3)



These statements obtain the data value of the data point under the mouse pointer in the graph gr_prod_data and store it in data_value:



integer SeriesNbr, ItemNbr double data_value grObjectType MouseHit



MouseHit = &



gr_prod_data.ObjectAtPointer(SeriesNbr, ItemNbr) IF MouseHit = TypeSeries! THEN



data_value = &



gr_prod_data.GetData(SeriesNbr, ItemNbr) END IF



These statements obtain the x value of the data point in the scatter graph gr_sales_yr and store it in data_value:



integer SeriesNbr, ItemNbr double data_value gr_product_data.ObjectAtPointer(SeriesNbr, ItemNbr) data_value = &



gr_sales_yr.GetData(SeriesNbr, ItemNbr, xValue!)



See also DeleteData FindSeries GetDataValue InsertData ObjectAtPointer



- 10.198.2 Syntax 2: For EditMask controls Description Gets the unformatted text from an EditMask control. Applies to EditMask controls Syntax editmaskname.GetData ( datavariable )


- Table 10.236:




|Argument|Description|
|---|---|
|editmaskname|The name of the EditMask control containing the data.|
|datavariable|A variable to which GetData will assign the unformatted data in the EditMask control. The datatype of datavariable must match the datatype of the EditMask control, which you select in the Window painter. Available datatypes are date, DateTime, decimal, double, string, and time.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, GetData returns null.
