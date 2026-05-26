# Examples

This example displays the folder contents of the Appeon directory in a folder selection dialog box. The string passed in the title argument displays above the tree view:



string ls_path = "d:\program files\appeon" integer li_result li_result = GetFolder( "my targets", ls_path ) sle_1.text=ls_path



// puts the user-selected path in a SingleLineEdit box.



See also DirectoryExists DirList DirSelect GetCurrentDirectory GetFileOpenName GetFileSaveName
