# Examples

If the text in the MultiLineEdit mle_Contact is James B. Smith and James B. is selected, these statements set the value of emp_fname to James B:



string ls_emp_fname ls_emp_fname = mle_Contact.SelectedText()



If the selected text in the edit portion of the DropDownListBox ddlb_Location is Maine, these statements display the ListBox lb_LBMaine:



string ls_Loc ls_Loc = ddlb_Location.SelectedText() IF ls_Loc = "Maine" THEN



lb_LBMaine.Show() ELSE



... END IF



See also SelectText
