# Times and dates from a DataWindow control

When you call GetItemTime or GetItemString as an argument for the String function and do not specify a display format, the value is formatted as a DateTime value. This statement returns a string like "2/26/03 00:00:00":



String(dw_1.GetItemTime(1, "start_date"))



International deployment When you use String to format a date and the month is displayed as text (for example, the display format includes "mmm"), the month is in the language of the runtime DLLs available when the application is run. If you have installed localized runtime files in the development environment or on a user's machine, then on that machine, the month in the resulting string is in the language of the localized files. For information about the localized runtime files, which are available in French, German, Italian, Spanish, Dutch, Danish, Norwegian, and Swedish, see Chapter 29, Internationalizing an Application in Application Techniques. Handling ANSI data



Since this function does not have an encoding argument to allow you to specify the encoding of the data, the string returned can contain garbage characters if the data has ANSI encoding. You can handle this by converting the ANSI string returned from the String function to a Unicode blob, and then converting the ANSI string in the blob to a Unicode string, using the encoding parameters provided in the Blob and String conversion functions:



ls_temp = String(long, "address" ) lb_blob = blob(ls_temp) //EncodingUTF16LE! is default ls_result = string(lb_blob, EncodingANSI!)



Message object You can also use String to extract a string from the Message object after calling TriggerEvent or PostEvent. For more information, see the TriggerEvent or PostEvent functions. Examples This statement applies a display format to a date value and returns Jan 31, 2002:



String(2002-01-31, "mmm dd, yyyy")



This example applies a format to the value in order_date and sets date1 to 6-11-02:



Date order_date = 2002-06-11 string date1 date1 = String(order_date,"m-d-yy")



This example includes a format for a null date value so that when order_date is null, date1 is set to none:



Date order_date = 2002-06-11 string date1 SetNull(order_date) date1 = String(order_date, "m-d-yy;'none'")



This statement applies a format to a DateTime value and returns Jan 31, 2001 6 hrs and 8 min:



String(DateTime(2001-01-31, 06:08:00), & 'mmm dd, yyyy h "hrs and" m "min"')



This example builds a DateTime value from the system date and time using the Today and Now functions. The String function applies formatting and sets the text of sle_date to that value, for example, 6-11-02 8:06 pm:



DateTime sys_datetime string datetime1 sys_datetime = DateTime(Today(), Now()) sle_date.text = String(sys_datetime, &



"m-d-yy h:mm am/pm;'none'")



This statement applies a format to a numeric value and returns $5.00:



String(5,"$#,##0.00")



These statements set string1 to 0123:



integer nbr = 123 string string1 string1 = String(nbr,"0000;(000);****;empty")



These statements set string1 to (123):



integer nbr = -123 string string1 string1 = String(nbr,"000;(000);****;empty")



These statements set string1 to ****:



integer nbr = 0 string string1 string1 = String(nbr,"0000;(000);****;empty")



These statements set string1 to "empty":



integer nbr string string1 SetNull(nbr) string1 = String(nbr,"0000;(000);****;empty")



This statement formats string data and returns A-B-C. The display format assigns a character in the source string to each @ and inserts other characters in the format at the appropriate positions:



String("ABC", "@-@-@")



This statement returns A*B:



String("ABC", "@*@")



This statement returns ABC:



String("ABC", "@@@")



This statement returns a space:



String("ABC", " ")



This statement applies a display format to time data and returns 6 hrs and 8 min:



String(06:08:02,'h "hrs and" m "min"')



This statement returns 08:06:04 pm:



String(20:06:04,"hh:mm:ss am/pm")



This statement returns 8:06:04 am:



String(08:06:04,"h:mm:ss am/pm")



See also String method for DataWindows in Section 2.4.121, “String” in DataWindow Reference.



- 10.691.2 Syntax 2: For blobs Description




Converts data in a blob to a string value. If the blob's value is not text data, String attempts to interpret the data as characters.
