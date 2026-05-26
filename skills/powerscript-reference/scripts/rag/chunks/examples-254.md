# Examples

In this example, dw_1 has retrieved at least 25 rows of data. After calling DataSource, the RichTextEdit control contains at least 25 instances of its document. ScrollToRow scrolls to the 25th instance:



rte_1.DataSource(dw_1) rte_1.ScrollToRow(25)



See also Scroll ScrollNextPage ScrollNextRow ScrollPriorPage ScrollPriorRow



- 10.561 Second Description Obtains the number of seconds in the seconds portion of a time value. Syntax Second ( time )


- Table 10.692:




|Argument|Description|
|---|---|
|time|The time value from which you want the seconds|



Return value Integer. Returns the seconds portion of time (00 to 59). If time is null, Second returns null. Examples This statement returns 31:



Second(19:01:31)



See also Hour Minute



Second method for DataWindows in Section 2.4.112, “Second” in DataWindow Reference.



- 10.562 SecondsAfter Description Determines the number of seconds one time occurs after another. Syntax SecondsAfter ( time1, time2 )


- Table 10.693:




|Argument|Description|
|---|---|
|time1|A time value that is the start time of the interval being measured|
|time2|A time value that is the end time of the interval|



Return value Long.



Returns the number of seconds time2 occurs after time1. If time2 occurs before time1, SecondsAfter returns a negative number. If any argument's value is null, SecondsAfter returns null.



Examples This statement returns 15:



SecondsAfter(21:15:30, 21:15:45)



This statement returns -15:



SecondsAfter(21:15:45, 21:15:30)



This statement returns 0:



SecondsAfter(21:15:45, 21:15:45)



If you declare start_time and end_time time variables and assign 19:02:16 to start_time and 19:02:28 to end_time as shown below:



time start_time, end_time start_time = 19:02:16 end_time = 19:02:28



then each of these statements returns 12:



SecondsAfter(start_time, end_time) SecondsAfter(19:02:16, end_time) SecondsAfter(start_time, 19:02:28) SecondsAfter(19:02:16, 19:02:28)



See also DaysAfter RelativeDate RelativeTime



SecondsAfter method for DataWindows in Section 2.4.113, “SecondsAfter” in DataWindow Reference.
