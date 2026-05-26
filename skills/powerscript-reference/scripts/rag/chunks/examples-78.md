# Examples

After assigning blob data from the database to lb_blob, the following example obtains the DateTime value stored at position 20 in the blob (the length you specify for BlobMid must be



- at least as long as the DateTime value but can be longer):




DateTime dt dt = DateTime(BlobMid(lb_blob, 20, 40))



See also Date Time



- 10.98 Day Description Obtains the day of the month in a date value. Syntax Day ( date )


- Table 10.125:




|Argument|Description|
|---|---|
|date|A date value from which you want the day|



Return value Integer. Returns an integer (1 to 31) representing the day of the month in date. If date is null, Day returns null. Examples



These statements extract the day (31) from the date literal 2004-01-31 and set li_day_portion to that value:



integer li_day_portion li_day_portion = Day(2004-01-31)



These statements check to be sure the date in sle_date is valid, and if so set li_day_portion to the day in the sle_date:



integer li_day_portion IF IsDate(sle_date.Text) THEN



li_day_portion = Day(Date(sle_date.Text)) ELSE



MessageBox("Error", & "This date is invalid: " &



+ sle_date.Text)



END IF



See also Date IsTime Month Year Day method for DataWindows in Section 2.4.29, “Day” in DataWindow Reference.



- 10.99 DayName Description Determines the day of the week in a date value and returns the weekday's name. Syntax DayName ( date )


- Table 10.126:




|Argument|Description|
|---|---|
|date|A date value for which you want the name of the day|



Return value String. Returns a string whose value is the weekday (Sunday, Monday, and so on) of date. If date is null, DayName returns null. Usage



DayName returns a name in the language of the runtime files available on the machine where the application is run. If you have installed localized runtime files in the development environment or on a user's machine, then on that machine the name returned by DayName is in the language of the localized files.



For information about localized runtime files, which are available in French, German, Italian, Spanish, Dutch, Danish, Norwegian, and Swedish, see Section 29.4, “Localizing the product” in Application Techniques.



Examples These statements evaluate the date literal 2003-07-04 and set day_name to Sunday:



string day_name day_name = DayName(2003-07-04)



These statements check to be sure the date in sle_date is valid, and if so set day_name to the day in sle_date:



string day_name IF IsDate(sle_date.Text) THEN



day_name = DayName(Date(sle_date.Text))



ELSE



MessageBox("Error", & "This date is invalid: " &



+ sle_date.Text) END IF



See also Day DayNumber IsDate DayName method for DataWindows in Section 2.4.30, “DayName” in DataWindow Reference.



- 10.100 DayNumber Description Determines the day of the week of a date value and returns the number of the weekday. Syntax DayNumber ( date )


- Table 10.127:




|Argument|Description|
|---|---|
|date|The date value from which you want the number of the day of the week|



Return value Integer. Returns an integer (1-7) representing the day of the week of date. Sunday is day 1, Monday is day 2, and so on. If date is null, DayNumber returns null. Examples



These statements evaluate the date literal 2000-01-31 and set day_nbr to 4 (January 31, 2000, was a Wednesday):



integer day_nbr day_nbr = DayNumber(2000-01-31)



These statements check to be sure the date in sle_date is valid, and if so set day_nbr to the number of the day in the sle_date:



integer day_nbr IF IsDate(sle_date.Text) THEN



day_nbr = DayNumber(Date(sle_date.Text)) ELSE



MessageBox("Error", & "This date is invalid: " &



+ sle_date.Text) END IF
