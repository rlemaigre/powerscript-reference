# Examples

This example sets the selected date to a date passed into a function:



// function argument seldate integer li_return



li_return = mc_1.SetSelectedDate(seldate)



See also GetSelectedDate SetDateLimits



- 10.640 SetSelectedRange Description Sets the range of selected dates. Applies to MonthCalendar control Syntax controlname.SetSelectedRange ( start, end )


- Table 10.795:




|Argument|Description|
|---|---|
|controlname|The name of the MonthCalendar control for which you want to set the selected range|
|start|A date value to be set as the earliest date selected|
|end|A date value to be set as the latest date selected|



Return value Integer.



- Returns 0 for success and one of the following negative values otherwise:


- -1 -- Invalid arguments
- -2 -- Unknown failure Usage Use the SetSelectedRange function to select a range of consecutive dates.



SetSelectedRange uses the start date as the end date and vice versa if you specify an end date that is earlier than the start date. You must set the MaxSelectedCount property to a value large enough to support the range before calling SetSelectedRange. SetSelectedRange returns



- -1 if the dates you specify are outside the range of minimum and maximum dates specified with SetDateLimits, or if the range exceeds MaxSelectedCount. If the start and end dates are the same, a single date is selected.




If the user scrolls the calendar with the navigation buttons when a date range is selected, the date range changes as the calendar scrolls.



SetSelectedDate and SetSelectedRange trigger a DateChanged event. You should not call either method in a DateChanged event, particularly using the Post method.



Examples This example sets the start date of the selected range to startdate and the end date to enddate:



integer li_return Date startdate, enddate startdate = Today() enddate = Date("12-31-2007") li_return = mc_1.SetSelectedRange(startdate, enddate)



See also GetSelectedRange SetDateLimits



- 10.641 SetSeriesLabelling Description Set the series label for a DirectX 3D graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.SetSeriesLabelling ({graphcontrol, } series, value )


- Table 10.796:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to set data, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control.|
|series|The string that names the series in which you want to change the series label setting.|
|value|Indicates whether to label the series with its values.|
