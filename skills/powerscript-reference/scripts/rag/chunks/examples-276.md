# Examples

These statements set the transparency percentage to 50% for the clicked data in the graph gr_1 in the DataWindow control dw_employee:



integer SeriesNbr, ItemNbr, TransNbr grObjectType clickedtype // Get the number of the series and datapoint clickedtype = this.ObjectAtPointer("gr_1", &



SeriesNbr, ItemNbr) //The following statement sets Transparency to 50% TransNbr = 50



dw_employee.SetDataTransparency("gr_1", & SeriesNbr , ItemNbr, TransNbr)



These statements set the transparency percentage to 50% for the clicked data point in the graph gr_employee.



integer SeriesNbr, ItemNbr, TransNbr grObjectType clickedtype



clickedtype = gr_employee.ObjectAtPointer( &



SeriesNbr, ItemNbr) TransNbr = 50 gr_employee.SetDataTransparency(SeriesNbr, &



ItemNbr, TransNbr)



See also FindSeries GetDataTransparency GetSeriesTransparency SetSeriesTransparency



- 10.607 SetDateLimits Description Sets the maximum and minimum date limits for the calendar. Applies to MonthCalendar control Syntax




controlname.SetDateLimits ( min, max )



- Table 10.752:




|Argument|Description|
|---|---|
|controlname|The name of the MonthCalendar control for which you want to set the date limits|
|min|A date value to be set as the minimum date that can be referenced or displayed in the calendar|
|max|A date value to be set as the maximum date that can be referenced or displayed in the calendar|



Return value Integer.



- Returns 0 when both limits are set successfully and one of the following negative values otherwise:


- -1 -- Invalid arguments
- -2 -- Unknown failure Usage




Use the SetDateLimits function to set minimum and maximum dates. SetDateLimits uses the maximum date as the minimum date and vice versa if you set a maximum date that is earlier than the minimum date.
