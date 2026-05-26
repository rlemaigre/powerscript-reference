# Examples

These statements display the Select File dialog box so that the user can select a single file. The default file extension is .DOC, the filter is all files, and the initial directory is C:\My Documents. The aFlag option 32770 specifies that an Explorer-style dialog box is used with the Read Only check box selected when the dialog box is created. If a file is selected successfully, its path displays in a SingleLineEdit control:



string ls_path, ls_file int li_rc



ls_path = sle_1.Text li_rc = GetFileSaveName ( "Select File", &



ls_path, ls_file, "DOC", & "All Files (*.*),*.*" , "C:\My Documents", & 32770)



IF li_rc = 1 Then



sle_1.Text = ls_path End If



See also DirList DirSelect GetFileOpenName GetFolder



- 10.219 GetFirstSheet Description Obtains the top sheet in the MDI frame, which may or may not be active. Applies to MDI frame windows Syntax mdiframewindow.GetFirstSheet ( )


- Table 10.262:




|Argument|Description|
|---|---|
|mdiframewindow|The MDI frame window for which you want the top sheet|
