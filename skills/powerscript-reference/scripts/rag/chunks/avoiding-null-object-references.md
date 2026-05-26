# Avoiding null object references

When you pass a PowerObject as a parameter, you are passing a reference to the object. The object must exist when you refer to it later or you get a null object reference, which causes an error. For example, if you pass the name of a control on a window that is being closed, that control will not exist when a script accesses the parameter.



Opening response windows Do not use the OpenSheetWithParm function to open a response window.



See the usage notes for OpenSheet, which also apply to OpenSheetWithParm. Examples



This example opens the sheet w_child_1 in the MDI frame MDI_User in its original size and stores MA in message.StringParm. It appends the names of the open sheet to the second menu item in the menu bar of MDI_User (the menu associated with w_child_1). OpenSheetWithParm might return -1 or throw a runtime error if the call fails. To ensure that both of these possibilities are trapped, this example checks the return value of the function and uses a try-catch statement to catch a possible runtime error:



integer li_return try



li_return = OpenSheetWithParm(w_child_1, "MA", &



MDI_User, 2, Original!) if IsNull(li_return) then



MessageBox ("Failure", "Null argument provided") elseif li_return= 1 then



MessageBox ("Success", "Sheet opened.") else



MessageBox ("Failure", "Sheet open failed.")



end if catch (runtimeerror rt) Messagebox("Failure", "Sheet open failed. " &



+ rt.getmessage()) //Handle the error end try



The next example illustrates how to access parameters passed in the Message object. These statements are in the scripts for two different windows. The script for the first window declares child as a window and opens an instance of w_child_1 as an MDI sheet. The name of the sheet is appended to the fourth menu item associated with w_child_1 and is layered. The script also passes a reference to the SingleLineEdit control sle_state as a PowerObject parameter of the Message object. The script for the Open event of w_child_1 uses the text in the edit control to determine what type of calculations to perform. Note that this would fail if sle_state no longer existed when the second script refers to it. As an alternative, you could pass the text itself, which would be stored in the String parameter of Message. The second script determines the text in the SingleLineEdit and performs processing based on that text. The script for the first window is:



window child OpenSheetWithParm(child, sle_state, &



"w_child_1", MDI_User, 4, Layered!)



The second script, for the Open event in w_child_1, is:



SingleLineEdit sle_state sle_state = Message.PowerObjectParm IF sle_state.Text = "overtime" THEN ... // overtime hours calculations ELSEIF sle_state.Text = "vacation" THEN



... // vacation processing ELSEIF sle_state.Text = "standard" THEN



... // standard hours calculations END IF



See also ArrangeSheets OpenSheet
