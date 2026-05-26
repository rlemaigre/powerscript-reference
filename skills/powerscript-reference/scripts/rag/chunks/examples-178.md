# Examples

These statements export the DataWindow object dw_emp from the library called dwTemp to a string named ls_dwsyn and then use it to create a DataWindow:



String ls_dwsyn, ls_errors ls_dwsyn = LibraryExport("c:\pb\dwTemp.pbl", &



"d_emp", ExportDataWindow!) dw_1.Create(ls_dwsyn, ls_errors)



See also Create method for DataWindows in Section 9.13, “Create” in DataWindow Reference. LibraryCreate LibraryDelete LibraryDirectory LibraryImport
