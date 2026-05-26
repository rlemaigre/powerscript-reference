# Table 9.263:

|Argument|Description|
|---|---|
|flag|Unsigned long by reference. The value of flag is 0 by default and should not be changed.|
|userstr|String entered in the control by the user.|
|dtm|A DateTime value by reference to which the validated date should be assigned.|



Return Values Long. Return code: Ignored. Usage



When a user tabs into a DatePicker control, it is in normal editing mode and one part of the date (year, month, or day) can be edited. If the AllowEdit property is set to true, the user can press F2 or click in the control to select all the text in the control for editing. When the control loses focus, the control returns to normal editing mode and the UserString event is fired, allowing you to test whether the text in the control is a valid date. The UserString event fires whether or not the text was modified.



The text entered in the control must be in a format that can be converted into a valid DateTime variable. If the string entered by the user can be converted to a valid DateTime value, you can assign the parsed DateTime value to the dtm argument to change the Value property of the control.



The ValueChanged event is fired after the UserString event if the value changed. Examples



This code in the UserString event script tests whether the string entered by the user is a valid date. If it is valid, the code converts the date to a DateTime so that it can be assigned to the DatePicker's Value property. Otherwise it displays an error message to the user:



IF IsDate(userstr) THEN



dtm = DateTime(Date(userstr)) ELSE



MessageBox("Invalid date", userstr) END IF



- 9.120 ValueChanged Description Occurs when the Value property in a DatePicker control changes. Event ID
