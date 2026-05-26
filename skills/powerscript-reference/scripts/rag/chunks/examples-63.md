# Examples

This statement displays a checkmark next to the menu item m_Grid in the m_View dropdown menu on the menu bar m_Appl:



m_Appl.m_View.m_Grid.Check()



See also Uncheck



- 10.58 ChooseColor Description Displays the standard color selection dialog box. Syntax ChooseColor ( color {, customcolors [ ] } )

- Table 10.69:




|Argument|Description|
|---|---|
|color|A long passed by reference that represents the color selected in the dialog box|
|customcolors (optional)|A long array of custom colors passed by reference to the color selection dialog box|



Return value Integer. Returns 1 if the function succeeds, 0 if the user selects cancel (or the dialog box is closed), -1 if an error occurs. Examples



This example displays the color selection dialog box with a base color of red and with two different custom colors defined:



long red, green, blue long custom[ ] integer li_color red = 255 custom[1]=rgb(red, 200, blue) custom[2]=8344736 li_color = ChooseColor( red, custom [ ] )



See also RGB



- 10.59 ClassList Description Provides a list of the classes included in a performance analysis model. Applies to Profiling object Syntax




instancename.ClassList ( list )
