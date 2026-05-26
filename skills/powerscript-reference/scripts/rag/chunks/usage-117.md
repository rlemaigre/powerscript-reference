# Usage

For date, DateTime, numeric, and time data, PowerBuilder uses the system's default format for the returned string if you do not specify a format. For numeric data, the default format is the [General] format.



For string data, a display format mask is required. (Otherwise, the function would have nothing to do.)



The format can consist of one or more masks:



- • Formats for date, DateTime, string, and time data can include one or two masks. The first mask is the format for the data; the second mask is the format for a null value.
- • Formats for numeric data can have up to four masks. A format with a single mask handles both positive and negative data. If there are additional masks, the first mask is for positive values, and the additional masks are for negative, zero, and null values.




To display additional characters as part of the mask for a decimal value, you must precede each character with a backslash. For example, to display a decimal number with two digits of precision preceded by four asterisks, you must type a backslash before each asterisk:



dec{2} amount string = ls_result amount = 123456.32 ls_result = string(amount,"\*\*\*\*0.00")



The resulting string is ****123456.32. For more information on specifying display formats, see Section 21.4, “Defining display formats” in Users Guide. Note that, although a format can include color specifications, the colors are ignored when you use String in PowerScript. Colors appear only for display formats specified in the DataWindow painter. If the display format does not match the datatype, PowerBuilder tries to apply the mask, which can produce unpredictable results.
