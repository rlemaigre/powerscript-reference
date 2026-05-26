# See also

MemberDelete MemberExists Open



- 10.412 MessageBox Description Displays a system MessageBox with the title, text, icon, and buttons you specify. Syntax MessageBox ( title, text {, icon {, button {, default } } } )


- Table 10.502:




|Argument|Description|
|---|---|
|title|A string specifying the title of the message box, which appears in the box's title bar.|
|text|The text you want to display in the message box. The text can be a numeric datatype (double or longlong), a string, or a boolean value.|
|icon (optional)|A value of the Icon enumerated datatype indicating the icon you want to display on the left side of the message box. Values are:<br><br>• Information! (Default)<br>• StopSign!<br>• Exclamation!<br>• Question!<br>• None!<br>|
|button (optional)|A value of the Button enumerated datatype indicating the set of CommandButtons you want to display at the bottom of the message box. The buttons are numbered in the order listed in the enumerated datatype. Values are:<br><br>• OK! -- (Default) OK button|



|Argument|Description|
|---|---|
| |• OKCancel! -- OK and Cancel buttons<br>• YesNo! -- Yes and No buttons<br>• YesNoCancel! -- Yes, No, and Cancel buttons<br>• RetryCancel! -- Retry and Cancel buttons<br>• AbortRetryIgnore! -- Abort, Retry, and Ignore buttons<br>|
|default (optional)|The number of the button you want to be the default button. The default is 1. If you specify a number larger than the number of buttons displayed, MessageBox uses the default.|



Return value Integer. Returns the number of the selected button (1, 2, or 3) if it succeeds and -1 if an error occurs. If any argument's value is null, MessageBox returns null. Usage



If the value of title or text is null, the MessageBox does not display. Unless you specify otherwise, PowerBuilder continues executing the script when the user clicks the button or presses enter, which is appropriate when the MessageBox has one button. If the box has multiple buttons, you will need to include code in the script that checks the return value and takes an appropriate action.



Before continuing with the current application, the user must respond to the MessageBox. However, the user can switch to another application without responding to the MessageBox.



When you are running a version of Windows that supports right-to-left languages and want to display Arabic or Hebrew text for the message and buttons, set the RightToLeft property of the application object to true. The characters of the message will display from right to left. However, the button text will continue to display in English unless you are running a localized version of PowerBuilder.
