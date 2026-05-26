# Examples

These statements display the menu m_Emp.M_Procedures at location 100, 200 in the active window. M_Emp is the menu associated with the window:



m_Emp.M_Procedures.PopMenu(100, 200)



This statement displays the menu m_Appl.M_File at the cursor position, where m_Appl is the menu associated with the window.



m_Appl.M_file.PopMenu(PointerX(), PointerY())



These statements display a pop-up menu at the cursor position. Menu4 was created in the Menu painter and includes a menu called m_language. Menu4 is not the menu for the active window. NewMenu is an instance of Menu4 (datatype Menu4):



Menu4 NewMenu NewMenu = CREATE Menu4 NewMenu.m_language.PopMenu(PointerX(), PointerY())



In an MDI application, the last line would include the MDI frame as the object for the pointer functions:



NewMenu.m_language.PopMenu( & w_frame.PointerX(), w_frame.PointerY())



- 10.462 PopulateError Description Fills in the Error object without causing a SystemError event. Syntax PopulateError ( number, text )


- Table 10.583:




|Argument|Description|
|---|---|
|number|The integer to be stored in the number property of the Error object|
|text|The string to be stored in text property of the Error object|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. The return value is usually not used. Usage



If the values you want to populate the Error object with depend on the current value of a variable in your script, you can use PopulateError to assign values to the number and text fields in the Error object (the remaining fields of the Error object will be populated automatically, including the line number of the error). Then you can call SignalError without arguments to trigger a SystemError. You will need to include code in the SystemError event script to recognize and handle the error you have created. If there is no script for the SystemError event, the SignalError function does nothing.
