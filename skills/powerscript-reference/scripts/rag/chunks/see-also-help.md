# See also Help

ShowPopupHelp



- 10.674 ShowPopupHelp Description Displays pop-up help for the specified control. Applies to Any control Syntax ShowPopupHelp ( helpfile, control, contextid )

- Table 10.837:




|Argument|Description|
|---|---|
|helpfile|String for the Help file name to be used|
|control|Dragobject for which the pop-up help is displayed|
|contextid|Long for the context ID number|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage



A typical location for the ShowPopupHelp call is in the Help event of a response window with the Context Help property enabled. Events relating to movement of the cursor over a control or to the dragging of a control or object are also logical places for a ShowPopupHelp call.



You must type a correct context ID number for the contextid argument or you get a message that a Help topic does not exist for the item calling the ShowPopupHelp function.



Examples This example calls a help file in a subdirectory of the current directory:



ShowPopupHelp ( "Help/my_app.hlp", this, 510)



See also Help ShowHelp



- 10.675 Sign Description Reports whether a number is negative, zero, or positive. Syntax Sign ( n )


- Table 10.838:



|Argument|Description|
|---|---|
|n|The number for which you want to find out the sign|



Return value Integer. Returns a number (-1, 0, or 1) indicating the sign of n. If n is null, Sign returns null. Examples This statement returns 1 (the number is positive):



Sign(5)



This statement returns 0 (zero has no sign):



Sign(0)



This statement returns -1 (the number is negative):



Sign(-5)



See also Sign method for DataWindows in Section 2.4.114, “Sign” in DataWindow Reference.



10.676 SignalError



Description Causes a SystemError event at the application level. Syntax



SignalError ( { number }, { text } )



- Table 10.839:




|Argument|Description|
|---|---|
|number (optional)|The integer (stored in the number property of the Error object) to be used in the message object|
|text (optional)|The string (stored in the text property of the Error object) to be used in the message object|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. The return value is usually not used. Usage



During development you can use SignalError to test error-processing scripts.You can call PopulateError to populate the Error object and call SignalError without arguments. You can examine how the SystemError event script handles the forced error. If you pass the optional number and text arguments to SignalError, it populates all the fields in the Error object and then triggers a SystemError event.



In an application, SignalError can also be useful. For example, if a user error is so severe that you do not want the application to continue, you can set values in the Error object, including your own error number, and call SignalError. You need to include code in the SystemError event script to recognize and handle the error you have created.If there is no script for the SystemError event, the SignalError function does nothing.



For the runtime error numbers assigned to the Number property of the Error object when an application error occurs, see Section 31.3.2, “Handling errors at runtime” in Users Guide.
