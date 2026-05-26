# 10.220 GetFixesVersion Description

Returns the fix level for the current PowerBuilder execution context. For example, at maintenance level 10.2.1, the fix version is 1.



Applies to ContextInformation objects Syntax



servicereference.GetFixesVersion ( fixversion )



- Table 10.263:




|Argument|Description|
|---|---|
|servicereference|Reference to the ContextInformation service instance.|
|fixversion|Integer into which the function places the fix version. This argument is passed by reference.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage Call this function to determine the current fix version. Examples This example calls the GetFixesVersion function:



String ls_name



Constant String ls_currver = "8.0.3" Integer li_majver, li_minver, li_fixver ContextInformation ci



this.GetContextService ("ContextInformation", ci) ci.GetMajorVersion(li_majver) ci.GetMinorVersion(li_minver) ci.GetFixesVersion(li_fixver) IF li_majver <> 8 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) ELSEIF li_minver <> 0 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) ELSEIF li_fixver <> 3 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) END IF



See also GetCompanyName GetHostObject GetMajorVersion GetMinorVersion GetName GetShortName GetVersionName



- 10.221 GetFocus Description Determines the control that currently has focus. Syntax GetFocus ( ) Return value




GraphicObject. Returns the control that currently has focus. Returns an invalid control reference if an error occurs.



Use the IsValid function to determine whether GetFocus has returned a valid control. Examples



These statements set which_control equal to the datatype of the control that currently has focus, and then set text_value to the text property of the control:



GraphicObject which_control SingleLineEdit sle_which CommandButton cb_which string text_value



which_control = GetFocus()



CHOOSE CASE TypeOf(which_control) CASE CommandButton!



cb_which = which_control text_value = cb_which.Text



CASE SingleLineEdit! sle_which = which_control text_value = sle_which.Text



CASE ELSE



text_value = "" END CHOOSE



See also IsValid SetFocus



- 10.222 GetFolder Description Displays a folder selection dialog box. Syntax GetFolder ( title, directory )


- Table 10.264:




|Argument|Description|
|---|---|
|title|String for a title that displays above a list box containing a tree view for folder selection.|
|directory|String for the directory name passed by reference to the folder selection dialog box. The directory name is selected, and its subfolders, if any, are displayed in a dialog box tree view.|



Return value Integer. Returns 1 if the function succeeds, 0 if the user selects cancel (or the dialog box is closed), -1 if an error occurs. Usage



The directory selected by the user is returned in the same variable that is passed to the folder selection dialog box.
