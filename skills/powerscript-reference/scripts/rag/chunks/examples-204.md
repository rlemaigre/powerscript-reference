# Examples

This example opens the sheet child_1 in the MDI frame MDI_User in its original size. It appends the name of the opened sheet to the second menu item in the menu bar, which is now the menu associated with child_1, not the menu associated with the frame. OpenSheet might return -1 or throw a runtime error if the call fails. To ensure that both of these possibilities are trapped, this example checks the return value of the function and uses a try-catch statement to catch a possible runtime error:



integer li_return try



li_return = Opensheet (child_1, MDI_User, 2, & Original!) if IsNull(li_return) then



MessageBox ("Failure", "Null argument provided") elseif li_return= 1 then



MessageBox ("Success", "Sheet opened.") else



MessageBox ("Failure", "Sheet open failed.") end if



catch (runtimeerror rt) Messagebox("Failure","Sheet open failed. " &



+ rt.getmessage()) //Handle the error or not end try



This example opens an instance of the window object child_1 as an MDI sheet and stores a reference to the opened window in child. The name of the sheet is appended to the fourth menu associated with child_1 and is layered:



window child OpenSheet(child, "child_1", MDI_User, 4, Layered!)



See also ArrangeSheets GetActiveSheet OpenSheetWithParm



- 10.431 OpenSheetAsDocument Description Opens a sheet as a document within an MDI frame window for dockable windows. Applies to Window objects Syntax




OpenSheetAsDocument ( sheetrefvar {, windowtype }, mdiframe, sheetname {, tabalign } )
