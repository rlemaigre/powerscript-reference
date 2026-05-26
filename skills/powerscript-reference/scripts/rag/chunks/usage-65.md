# Usage

If you call LibraryDirectory with a PBD file as the first argument, no comments are displayed because they are not included in PBD files.



You can display the result of LibraryDirectory in a DataWindow control by passing the returned string to the ImportString function for that DataWindow. The DataWindow should contain three string columns. The columns must be wide enough to fit the data in the input string. If not, PowerBuilder reports validation errors.



To return the object's type, use LibraryDirectoryEx. For an example of parsing tab-delimited data, see the Pos function. Examples



This code imports the string returned by LibraryDirectory to the DataWindow dw_list and then redraws the dw_list. The DataWindow was defined with an external source and three string columns:



String ls_entries ls_entries = LibraryDirectory( &



"c:\pb\dwTemp.pbl", DirUserObject!) dw_list.SetRedraw(FALSE) dw_list.Reset( ) dw_list.ImportString(ls_Entries) dw_list.SetRedraw(TRUE)



See also ImportString LibraryCreate LibraryDelete LibraryDirectoryEx LibraryExport LibraryImport
