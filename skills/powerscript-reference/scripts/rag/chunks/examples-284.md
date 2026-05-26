# Examples

This example specifies different files in the library search path based on the selected application subsystem:



string ls_list ls_list = getlibrarylist () CHOOSE CASE configuration



- CASE "Config1" SetLibraryList(ls_list + ",lib1.pbd, lib2.pbd, &



lib5.pbd")



- CASE "Config2" SetLibraryList(ls_list + ",lib1.pbd, lib3.pbd, &




lib4.pbd") END CHOOSE



See also AddToLibraryList GetLibraryList



- 10.619 SetMask Description Sets the edit mask and edit mask datatype for an EditMask control. Applies to EditMask controls Syntax editmaskname.SetMask ( maskdatatype, mask )


- Table 10.769:




|Argument|Description|
|---|---|
|editmaskname|The name of the EditMask for which you want to specify the edit mask.|



|Argument|Description|
|---|---|
|maskdatatype|A MaskDataType enumerated datatype indicating the datatype of the mask. Values are:<br><br>• DateMask!<br>• DateTimeMask!<br>• DecimalMask!<br>• NumericMask!<br>• StringMask!<br>• TimeMask!<br>|
|mask|A string whose value is the edit mask.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetMask returns null. Usage



In an edit mask, a fixed set of characters represent a type of character that the user can enter. In addition, punctuation controls the format of the entered value. Each mask datatype has its own set of valid characters.



For example, the following is a mask of type string for a telephone number. The EditMask control displays the punctuation (the parentheses and dash). The pound signs represent the digits that the user enters. The user cannot enter any characters other than digits.



(###) ###-####



For help in specifying a valid mask, see the Edit Mask Style dialog box for an EditMask control in the Window painter. A ListBox in the dialog box shows the meaning of the special mask characters for each datatype, as well as masks that have already been defined.



If you are specifying the mask for a number, the format must use U.S. notation. That is, comma represents the thousands delimiter and a period represents the decimal place. At runtime, the locally correct symbols are displayed.



You cannot use SetMask to change the maskdatatype if the DropDownCalendar, Spin, or UseCodeTable properties of the EditMask control are set to true. If any of these properties is set to true, set the property value to false before calling SetMask, then reset the value to true.



You cannot use color for edit masks as you can for display formats. Examples



These statements set the mask for the EditMask password_mask to the mask in pword_code. The mask requires the user to enter a digit followed by four characters of any type:



string pword_code



pword_code = "#xxxx" password_mask.SetMask(StringMask!, pword_code)



This statement sets the mask for the EditMask password_mask to a 5-digit numeric mask:



password_mask.SetMask(NumericMask!, "#####")



- 10.620 SetMessage Description Sets an error message for an object of type Throwable. Syntax throwableobject.SetMessage (newMessage )


- Table 10.770:




|Argument|Description|
|---|---|
|throwableobject|Object of type Throwable for which you want to set an error message.|
|newMessage|String containing the message you want to set. Must be surrounded by quotation marks.|



Return value None Usage



Use to set a customized message on a user-defined exception object. Although it is possible to use SetMessage to modify the preset error messages for RuntimeError objects, this is not recommended.



Examples This statement is an example of a message set on a user object of type Throwable:



MyException.SetMessage ("MyException thrown")



This example uses SetMessage in the try-catch block for a user-defined function that takes an input value from one text box and outputs the arccosine for that value into another text box:



uo_exception lu_error Double ld_num ld_num = Double (sle_1.text)



TRY sle_2.text = string (acos (ld_num)) CATCH (runtimeerror er)



lu_error = Create uo_exception lu_error.SetMessage("Value must be between -1" +&



"and 1") Throw lu_error END TRY



See also GetMessage



- 10.621 SetMicroHelp Description Specifies the text to be displayed in the MicroHelp box in an MDI frame window. Applies to MDI frame windows Syntax windowname.SetMicroHelp ( string )

- Table 10.771:




|Argument|Description|
|---|---|
|windowname|The name of the MDI frame window with MicroHelp for which you want to set the MicroHelp text|
|string|A string whose value is the new MicroHelp text|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetMicroHelp returns null. Usage



The Tag property of a control is a useful place to store MicroHelp text. When the control gets the focus, you can use SetMicroHelp in the GetFocus event script to display the Tag property's text in the MicroHelp box on the window frame.



For menus, PowerBuilder automatically displays the MicroHelp text you have specified in the Menu painter when the user selects the menu item. You can use SetMicroHelp in the script for a menu item's Selected event to override the predefined MicroHelp and display some other text in the MicroHelp box. SetMicroHelp does not change the predefined MicroHelp text.



Examples



This statement changes the MicroHelp displayed in the frame of W_New to Delete selected text:



W_New.SetMicroHelp("Delete selected text")



In this example, the string Close the Window is a tag value associated with the CommandButton cb_done in W_New. In the script for the GetFocus event in cb_done, this statement displays Close the Window as MicroHelp in W_New when cb_done gets focus:



W_New.SetMicroHelp(This.Tag)



- 10.622 SetNewMobiLinkPassword Description Sets a new password for the current MobiLink user. Applies to




MLSynchronization, MLSync controls Syntax



syncObject.SetNewMobiLinkPassword (newPW)



- Table 10.772:



|Argument|Description|
|---|---|
|syncObject|The name of the synchronization object that starts a connection to the synchronization server.|
|newPW|A string consisting of the new password that you want to set for MobiLink.|



Return value Integer. Returns 1 for success and -1 for failure. Usage



SetNewMobiLinkPassword uses the properties in the synchronization object to generate a typical dbmlsync command line. The command line includes the -pi (ping) option as well as the -mn option to set the new MobiLink password (newPW). The new password will not be set if any of the required properties (Datasource, Publication, MLServerVersion, or MLUser) are missing from the synchronization object.



See also GetCommandString SetParm SetSyncRegistryProperties Synchronize



10.623 SetNull



Description



Sets a variable to null. The variable can be any datatype except for a structure or autoinstantiated object.



Syntax



SetNull ( anyvariable )



- Table 10.773:




|Argument|Description|
|---|---|
|anyvariable|The variable you want to set to null|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetNull returns null.
