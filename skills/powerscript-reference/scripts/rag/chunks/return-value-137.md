# Return value

Long. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.



- Example 1 This example exports data from the DataWindow to the JSONPackage object.




// Integer SetValueByDataWindow (string Key, dwcontrol DWControl {, boolean



format}) String ls_Dept_id_100 Restclient lrc_Dept JsonPackage ljpk_Dept ljpk_Dept = Create JsonPackage lrc_Dept = Create RestClient



// The DataWindow column name and type must match with that of the JSON string



returned from http://demo.appeon.com/PB/webapi_client/department dw_Dept.DataObject = "d_example_dept" lrc_Dept.Retrieve( dw_Dept, "http://demo.appeon.com/PB/webapi_client/ department" ) // Gets data via RestClient dw_Dept.SetFilter( "dept_id = 100" ) // Filters the data that will be exported to



the JSON string dw_Dept.Filter() // Exports the data from DataWindow to JSONPackage as a plain JSON string ljpk_Dept.SetValueByDataWindow("dept_id_100", dw_Dept, False)



ls_Dept_id_100 = ljpk_Dept.GetJsonString() // Exports the data from JSONPackage at the string format // Prints ls_Dept_id_100 = {"dept_id_100":[{"dept_id":100, "dept_name":"R & D8", "dept_head_id":105}]}



- Example 2 This example exports the modified data from the DataWindow to the JSONPackage object.



// Integer SetValueByDataWindow (string Key, dwcontrol DWControl {, DWBuffer



dwbuffer}, boolean changedonly, boolean format) String ls_Dept_ModifyRow Restclient lrc_Dept JsonPackage ljpk_Dept ljpk_Dept = Create JsonPackage lrc_Dept = Create RestClient



// The DataWindow column name and type must match with that of the JSON string



returned from http://demo.appeon.com/PB/webapi_client/department dw_Dept.DataObject = "d_example_dept" lrc_Dept.Retrieve( dw_Dept, "http://demo.appeon.com/PB/webapi_client/ department" ) // Gets data via RestClient



// Modifies the DataWindow data If dw_Dept.RowCount() > 0 Then



dw_Dept.SetItem(1, 2, "TestJsonPackage") End If // Exports the modified data from DataWindow to JSONPackage as a plain JSON string ljpk_Dept.SetValueByDataWindow("Dept_ModifyRow", dw_Dept, Primary!, TRUE, FALSE) ls_Dept_ModifyRow = ljpk_Dept.GetJsonString() // Exports the data from JSONPackage



at the string format // Prints ls_Dept_ModifyRow = {"Dept_ModifyRow":[{"dept_id":100, "dept_name":"TestJsonPackage", "dept_head_id":105}]}



- Example 3




This example exports the data from the specified DataWindow row and column to the JSONPackage object.



// Integer SetValueByDataWindow (string Key, dwcontrol DWControl, DWBuffer dwbuffer {, long startrow {, long endrow {, long startcolumn {, long endcolumn } } } } {, boolean format })



String ls_Dept_Row_Column Integer li_Return Restclient lrc_Dept JsonPackage ljpk_Dept ljpk_Dept = Create JsonPackage lrc_Dept = Create RestClient



// The DataWindow column name and type must match with that of the JSON string



returned from http://demo.appeon.com/PB/webapi_client/department dw_Dept.DataObject = "d_example_dept" lrc_Dept.Retrieve( dw_Dept, "http://demo.appeon.com/PB/webapi_client/ department" ) // Gets data via RestClient



// Exports data in rows 1 through 3 and in column 2 li_Return = ljpk_Dept.SetValueByDataWindow ("Dept_Name", dw_Dept, Primary!, 1, 3,



2, 2, FALSE) If li_Return <> 1 Then // Prints the error message if SetValueByDataWindow failed End If ls_Dept_Row_Column = ljpk_Dept.GetJsonString() // Exports the data as a string



// Prints ls_Dept_Row_Column={"Dept_Name":[{"dept_name":"R & D8"}, {"dept_name":"Sales"}, {"dept_name":"Finance"}]}



See also GetValueToDataWindow SetValueBlob SetValueBoolean SetValueDate SetValueDateTime SetValueNumber SetValueString SetValueTime
