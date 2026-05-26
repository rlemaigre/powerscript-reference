# Unicode file format

Unicode files sometimes have two extra bytes at the start of the file to indicate that they are Unicode files. If you are opening a Unicode file in stream mode, skip the first two bytes if they are present.



See also Blob FromAnsi FromUnicode ToUnicode



- 10.707 Today Description Obtains the system date and, in some cases, the system time. Syntax Today ( ) Return value Date. Returns the current system date. Usage




Although the datatype of the Today function is date, it can also return the current time. This occurs when Today is used as an argument for another function and that argument allows different datatypes.



For example, if you call Today as an argument to the String function, String returns both the date and time when you use a date-plus-time display format. A second example: if you call Today as an argument for the SetItem function and the datatype of the target column is DateTime, both the date and time are assigned to the DataWindow.



Examples This statement returns the current system date:



Today()



This statement executes some statements when the current system date is before April 15, 2003:



IF Today() < 2003-04-15 THEN ...



This statement displays the current date in the StaticText st_date in the corner of a window:



st_date.Text = String(Today(), "m/d/yy")



This statement displays the current date and time in the StaticText st_date:



st_date.Text = String(Today(), "m/d/yy hh:mm")



See also Now Today method for DataWindows in Section 2.4.126, “Today” in DataWindow Reference.
