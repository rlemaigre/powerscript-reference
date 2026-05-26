# Return value

Long. Returns the number of rows that were imported if it succeeds and one of the following negative integers if an error occurs. The return value will count the rows imported into the primary, filter, and delete buffers, but not the rows imported into DataWindowChild.



0 -- When all of the data in the JSON string is null, or the JSON string only contains data for DataWindowChild, or no JSON key matches with the DataWindow column.



- -1 -- General error.
- -2 -- No row is supplied or the startrow value supplied is greater than the number of rows in the JSON data.
- -3 -- Invalid argument.
- -4 -- Invalid JSON.
- -5 -- JSON format error.
- -6 -- Unsupported DataWindow presentation style for import.
- -7 -- Error resolving DataWindow nesting.




The method returns null if any of the following:



- • any argument's value is null
- • the DataWindow object (dataobject) is invalid Usage




There is no forced conversion between strings and numbers. For example, the number 123 in JSON string will not be imported into the DataWindow column of char(10) type. For such case, a data type mismatch warning will be recorded in the error argument.



A boolean value (true or false) will be converted to 0 or 1 when imported from the JSON string to the DataWindow; however, 0 or 1 will not be converted to a boolean value (true or false) when exported from the DataWindow to the JSON string.



If the string length in JSON is larger than the string length in DataWindow, the string will be truncated when imported into the DataWindow. For example, JSON string [{"name":"TestForTrancate"}] is imported as "Test" when the data type of DataWindow column "name" is char(4).



When the number value is imported from the JSON string to the DataWindow column of number data type (with uncertain precision), the value will have uncertain decimals, for example, 6.78 becomes 6.78000020980835 after imported from the JSON string to the DataWindow.



- Example 1 This example obtains the key value from the JSON string and sets the value to DataWindow.




// long GetValueToDataWindow ( string key, dwcontrol DWControl ) Integer li_Return JsonPackage ljpk_Dept ljpk_Dept = Create JsonPackage



// The DataWindow column name and type must match with that in the JSON string dw_Dept.DataObject = "d_example_dept"



// Loads the DataWindow JSON string to the JsonPackage object ljpk_Dept.LoadString('{"name":"Powerbuilder", "dept": {"identity":"70c86603-983b-4bd9-adbc-259436e43cbd", "version":1,



"platform":"PowerBuilder", "mapping-method":0, "dataobject":



{"name":"d_example_dept", "meta-columns":[{"name":"dept_id", "index":0, "datatype":"long", "nullable":1}, {"name":"dept_name", "index":1, "datatype":"string", "nullable":1}, {"name":"dept_head_id", "index":2, "datatype":"long", "nullable":1}], "primary-rows":[{"row-status":0, "columns":



{"dept_id":[100], "dept_name":["R & D8"], "dept_head_id":[105]}}, {"row-status":0,



"columns":{"dept_id":[200], "dept_name":["Sales"], "dept_head_id":[129]}}, {"rowstatus":0, "columns":{"dept_id":[300], "dept_name":["Finance"], "dept_head_id": [102]}}, {"row-status":0, "columns":{"dept_id":[400], "dept_name":["Marketing"],



"dept_head_id":[1576]}}, {"row-status":0, "columns":{"dept_id":[500], "dept_name": ["Shipping"], "dept_head_id":[703]}}, {"row-status":0, "columns":{"dept_id":[999],



"dept_name":["test4"], "dept_head_id":[null]}}]}}}') // Loads the data from the JSON string to DataWindow li_Return = ljpk_Dept.GetValueToDatawindow ("dept", dw_Dept) If li_Return <= 0 Then



// Prints the error message End If // Loads the plain JSON string to the JsonPackage object



ljpk_Dept.LoadString('{"dept2":[{"dept_id":100, "dept_name":"R & D8", "dept_head_id":105}, {"dept_id":200, "dept_name":"Sales", "dept_head_id":129}, {"dept_id":300, "dept_name":"Finance", "dept_head_id":102}, {"dept_id":400, "dept_name":"Marketing", "dept_head_id":1576}, {"dept_id":500, "dept_name":"Shipping", "dept_head_id":703}]}')



// Loads the data from the JSON string to DataWindow li_Return = ljpk_Dept.GetValueToDatawindow ("dept2", dw_Dept) If li_Return <= 0 Then



// Prints the error message End If
