# Examples

This example takes user-entered text from a SingleLineEdit control, capitalizing the first letter in each word and setting the other letters to lowercase, before passing it in a string variable:



string ls_fullname ls_fullname = WordCap (sle_1.text)



The text joe MaCdonald would be rendered as Joe Macdonald by the WordCap function.



- 10.738 WorkSpaceHeight Description Obtains the height of the workspace within the boundaries of the specified window. Applies to Window objects Syntax windowname.WorkSpaceHeight ( )


- Table 10.911:




|Argument|Description|
|---|---|
|windowname|The name of the window for which you want the height of the workspace area|



Return value Integer. Returns the height of the workspace area in PowerBuilder units in windowname. If an error occurs, WorkSpaceHeight returns -1. If windowname is null, WorkSpaceHeight returns null. Usage



The workspace height does not include the thickness of the frame, the title bar, menu bar, horizontal scroll bar, or any toolbars at the top or bottom. The workspace height includes the MicroHelp status bar.



The workspace width does not include the thickness of the frame, the vertical scroll bar, or any toolbars on the left or right.



Examples This example returns the height of the workspace area in the w_employee window:



Integer Height Height = W_employee.WorkSpaceHeight()



This example resizes the client area of a custom MDI frame window (that is, a frame window in which you have placed controls). P_logo is the control that has been placed on the window. The code belongs in the script for the frame's Resize event:



integer lw, lh // Get the current workspace measurements lw = This.WorkSpaceWidth() lh = This.WorkSpaceHeight()



// Subtract the logo, MicroHelp from the height lh = lh - (p_logo.Y + p_logo.Height) lh = lh - MDI_1.MicroHelpHeight



// Add the distance between the top of the frame // (just below the menu bar or toolbar, if any) // and top of the workspace. lh = lh + This.WorkspaceY( )



// Move the client area below the picture control MDI_1.Move(This.WorkspaceX( ), &



p_logo.Y + p_logo.Height)



// Resize the client area using the calculated dims mdi_1.Resize(lw, lh)



See also WorkSpaceWidth WorkSpaceX WorkSpaceY



- PointerX

- PointerY


- 10.739 WorkSpaceWidth Description Obtains the width of the workspace within the boundaries of the specified window. Applies to Window objects Syntax windowname.WorkSpaceWidth ( )


- Table 10.912:




|Argument|Description|
|---|---|
|windowname|The name of the window for which you want the width of the workspace area|



Return value Integer. Returns the width of the workspace area (in PowerBuilder units) in windowname. If an error occurs, WorkSpaceWidth returns -1. If windowname is null, WorkSpaceWidth returns null. Usage



The workspace height does not include the thickness of the frame, the title bar, menu bar, horizontal scroll bar, or any toolbars at the top or bottom. The workspace height includes the MicroHelp status bar.



The workspace width does not include the thickness of the frame, the vertical scroll bar, or any toolbars on the left or right.



Examples This example returns the width of the workspace area in the w_employee window:



integer Width Width = w_employee.WorkSpaceWidth()
