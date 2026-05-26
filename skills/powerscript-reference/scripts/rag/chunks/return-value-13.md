# Return value

The datatype of n. Returns the smallest whole number that is greater than or equal to n. If n is null, Ceiling returns null.



Examples These statements set num to 5:



decimal dec, num dec = 4.8 num = Ceiling(dec)



These statements set num to -4:



decimal num num = Ceiling(-4.2) num = Ceiling(-4.8)



See also Int Round



Truncate Ceiling method for DataWindows in Section 2.4.10, “Ceiling” in DataWindow Reference.



- 10.53 ChangeDirectory Description Changes the current directory. Syntax ChangeDirectory ( directoryname )

- Table 10.64:



|Argument|Description|
|---|---|
|directoryname|String for the name of the directory you want to set as the current directory|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Examples



This example changes the current directory to the parent directory of the current directory and displays the new current directory in a SingleLineEdit control:



ChangeDirectory( ".." ) sle_1.text= GetCurrentDirectory( )



See also CreateDirectory GetCurrentDirectory



10.54 ChangeMenu



Description



Changes the menu associated with a window. If the window is an MDI frame window, ChangeMenu appends the list of open sheets to the currently active menu.



Applies to Window objects Syntax



windowname.ChangeMenu ( menuname {, position } )



- Table 10.65:






|Argument|Description|
|---|---|
|windowname|The name of the window for which you want to change the menu.|
|menuname|The name of the menu you want to make the current menu.|



|Argument|Description|
|---|---|
|position (MDI frame windows only)|The number of the item on the menu bar to which you want to append the names of the open sheets. Items on the menu bar are numbered from the left, beginning with 1. The default is 0, which lists the open sheets on the menu bar's next-to-last menu (or the last menu if there is only one available).|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, ChangeMenu returns null. The return value is usually not used. Usage



If you are changing the menu associated with an MDI frame window, the new menu will not be visible if an open sheet with its own menu is active. When a sheet has its own menu, the list of open sheets appears on its menu, as well as on the hidden menu for the frame.



In an MDI frame window, if you change to a menu with a different menu and toolbar style (traditional or contemporary), the style of the menu changes but the style of the toolbar does not.



Examples This statement changes the top-level menu of the w_Employee window to m_Emp1:



w_Employee.ChangeMenu(m_Emp1)



- 10.55 Char Description Extracts the first Unicode character of a string or converts an integer to a char. Syntax Char ( n )


- Table 10.66:




|Argument|Description|
|---|---|
|n|A string that begins with the character you want, an integer you want to convert to a character, or a blob in which the first value is a string or integer. The rest of the contents of the string or blob is ignored. N can also be an Any variable containing a string, integer, or blob.|



Return value Char. Returns the first Unicode character of n. If n is null, Char returns null. Examples This example sets ls_S to an asterisk, the character corresponding to the ASCII value 42:



string ls_S



ls_S = Char(42)



These statements generate delivery codes A to F for the values 1 through 6 of li_DeliveryNbr:



string ls_Delivery integer li_DeliveryNbr



FOR li_DeliveryNbr = 1 to 6 ls_Delivery = Char(64 + li_DeliveryNbr)



... // Additional processing of ls_Delivery NEXT



See also Asc CharA



- 10.56 CharA Description Extracts the first ASCII character of a string or converts an integer to a char. Syntax CharA ( n )


- Table 10.67:




|Argument|Description|
|---|---|
|n|A string that begins with the character you want, an integer you want to convert to a character, or a blob in which the first value is a string or integer. The rest of the contents of the string or blob is ignored. N can also be an Any variable containing a string, integer, or blob.|



Return value Char. Returns the first character of n. If n is null, CharA returns null. Examples This example sets ls_S to an asterisk, the character corresponding to the ASCII value 42:



string ls_S ls_S = CharA(42)



These statements generate delivery codes A to F for the values 1 through 6 of li_DeliveryNbr:



string ls_Delivery integer li_DeliveryNbr



FOR li_DeliveryNbr = 1 to 6 ls_Delivery = CharA(64 + li_DeliveryNbr)



... // Additional processing of ls_Delivery NEXT
