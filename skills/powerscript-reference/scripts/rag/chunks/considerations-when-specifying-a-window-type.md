# Considerations when specifying a window type

When you use Syntax 2, PowerBuilder opens an instance of a window of the datatype specified in windowtype and places a reference to this instance in the variable windowvar.



If windowtype is a descendant window, you can only reference properties, events, functions, or structures that are part of the definition of windowvar. For example, if a user event is declared for windowtype, you cannot reference it.



The object specified in windowtype is not automatically included in your executable application. To include it, you must save it in a PBD file (PowerBuilder dynamic library) that you deliver with your application.



For information about the parent of an opened window, see Syntax 1. Examples



This example opens a window of the type specified in the string s_w_name and stores the reference to the window in the variable w_to_open. The SELECT statement retrieves data specifying the window type from the database and stores it in s_w_name:



window w_to_open string s_w_name



SELECT next_window INTO : s_w_name FROM routing_table WHERE... ;



Open(w_to_open, s_w_name)



This example opens an array of ten windows of the type specified in the string is_w_emp1 and assigns a title to each window in the array. The string is_w_emp1 is an instance variable whose value is a window type:



integer n window win_array[10]



FOR n = 1 to 10



Open(win_array[n], is_w_emp1) win_array[n].title = "Window " + string(n)



NEXT



The following statements open four windows. The type of each window is stored in the array w_stock_type. The window reference from the Open function is assigned to elements in the array w_stock_win:



window w_stock_win[ ] string w_stock_type[4]



- w_stock_type[1] = "w_stock_wine"
- w_stock_type[2] = "w_stock_scotch"
- w_stock_type[3] = "w_stock_beer"
- w_stock_type[4] = "w_stock_soda"




FOR n = 1 to 4



Open(w_stock_win[n], w_stock_type[n]) NEXT



See also Close OpenWithParm Show



- 10.428.3 Syntax 3: For loading an OLE object from a file into a control Description Opens an OLE object in a file and loads it into an OLE control. Applies to OLE controls Syntax olecontrol.Open ( OLEsourcefile )


- Table 10.523:




|Argument|Description|
|---|---|
|olecontrol|The name of the OLE control into which you want to load an OLE object.|
|OLEsourcefile|A string specifying the name of an OLE storage file containing the object. The file must already exist and contain an OLE object. OLEsourcefile can include a path for the file, as well as path information inside the OLE storage.|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- The file is not found or its data has an invalid format
- -9 -- Other error




If any argument's value is null, Open returns null. Examples



This example opens the object in the file MYSTUFF.OLE and loads it into in the control ole_1:



integer result result = ole_1.Open("c:\ole2\mystuff.ole")



See also InsertFile Save SaveAs



- 10.428.4 Syntax 4: For opening an OLE object in memory into a control Description




Opens an OLE object that is in a OLE storage object in memory and loads it into an OLE control.



Applies to OLE controls Syntax



olecontrol.Open ( sourcestorage, substoragename )



- Table 10.524:




|Argument|Description|
|---|---|
|olecontrol|The name of the OLE control into which you want to load an OLE object|
|sourcestorage|The name of an object variable of OLEStorage containing the object you want to load into olecontrol|
|substoragename|A string specifying the name of a substorage that contains the desired object within storagename|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -2 -- The parent storage is not open
- -9 -- Other error If any argument's value is null, Open returns null. Examples




This example opens the object in the substorage excel_obj within the storage variable stg_stuff and loads it into the control ole_1. Olest_stuff is already open:



integer result



result = ole_1.Open(stg_stuff, "excel_obj")



This example opens a substorage in the storage variable stg_stuff and loads it into the control ole_1. The substorage name is specified in the variable stuff_1. Olest_stuff is already open:



integer result string stuff_1 = "excel_obj" result = ole_1.Open(stg_stuff, stuff_1)



See also InsertFile Save SaveAs



- 10.428.5 Syntax 5: For opening an OLE object in a file into an OLEStorage Description Opens an OLE object in an OLE storage file and loads it into a storage object in memory. Applies to OLE storage objects Syntax olestorage.Open ( OLEsourcefile {, readmode {, sharemode } } )


- Table 10.525:




|Argument|Description|
|---|---|
|olestorage|The name of an object variable of type OLEStorage into which you want to load the OLE object.|
|OLEsourcefile|A string specifying the name of an OLE storage file containing the object. The file must already exist and contain OLE objects. OLEsourcefile can include the file's path, as well as path information within the storage.|
|readmode (optiona|Al) value of the enumerated datatype stgReadMode that specifies the type of access you want for OLEsourcefile. Values are:<br><br>• stgReadWrite! -- (Default) Read/Write access. If the file does not exist, Open creates it.<br>• stgRead! -- Read-only access. You cannot change OLEsourcefile.<br>• stgWrite! -- Write access. You can rewrite OLEsourcefile but not read its current contents. If the file does not exist, Open creates it.<br>|
|sharemode (optional)|A value of the enumerated datatype stgShareMode that specifies how other attempts, by your own or other applications, to open OLEsourcefile will fare. Values are:<br><br>• stgExclusive! -- (Default) No other attempt to open OLEsourcefile will succeed.|



|Argument|Description|
|---|---|
| |• stgDenyNone! -- Any other attempt to open OLEsourcefile will succeed.<br>• stgDenyRead! -- Other attempts to open OLEsourcefile for reading will fail.<br>• stgDenyWrite -- Other attempts to open OLEsourcefile for writing will fail.<br>|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- The file is not an OLE storage file
- -3 -- The file is not found
- -9 -- Other error If any argument's value is null, Open returns null. Usage




An OLE storage file is structured like a directory. Each OLE object can contain other OLE objects (substorages) and other data (streams). You can open the members of an OLE storage belonging to a server application if you know the structure of the storage. However, the PowerBuilder functions for manipulating storages are provided so that you can build your own storage files for organizing the OLE objects used in your applications.



The whole file can be an OLE object and substorages within the file can also be OLE objects. More frequently, the structure for a storage file you create is a root level that is not an OLE object but contains independent OLE objects as substorages. Any level in the storage hierarchy can contain OLE objects or be simply a repository for another level of substorages.
