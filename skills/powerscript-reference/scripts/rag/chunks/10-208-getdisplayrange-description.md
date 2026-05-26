# 10.208 GetDisplayRange Description

Retrieves the first and last date of the currently displayed date range and returns the number of months than span the display.



Applies to MonthCalendar control Syntax



controlname.GetDisplayRange ( start, end {, d } )



- Table 10.250:




|Argument|Description|
|---|---|
|controlname|The name of the MonthCalendar control for which you want the range of dates|
|start|A date specifying the first date in the displayed range returned by reference|
|end|A date specifying the last date in the displayed range returned by reference|
|d (optional)|A value of the MonthCalDisplayState enumerated variable. Values are: EntirelyDisplayed! -- Gets the range of dates for which all days in each month are displayed PartlyDisplayed! -- Gets the range of dates for which any days in each month are displayed (default)|



Return value Integer. Returns the number of months in the display range if it succeeds and -1 if it fails. Usage



The GetDisplayRange function retrieves the beginning and end dates of the range of dates currently displayed in the calendar.



If you do not supply the optional d argument (or specify PartlyDisplayed!), GetDisplayRange returns the number of months for which any of the days in the month



display. If the calendar displays one month, the return value is 3, because the last few days of the previous month and the first few days of the next month are included.



If you supply EntirelyDisplayed! as the d argument, GetDisplayRange returns the number of months for which all of the days in the month display. It ignores the leading and trailing days.



For example, if the calendar display shows the 12 months from November 2004 to October 2005 and you do not supply the d argument, GetDisplayRange returns 14 and the start and end arguments are set to October 25, 2004 and November 6, 2005.



If you supply EntirelyDisplayed! as the d argument, GetDisplayRange returns 12 and the start and end arguments are set to November 1, 2004 and October 31, 2005.
