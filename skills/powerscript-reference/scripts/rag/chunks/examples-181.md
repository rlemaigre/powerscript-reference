# Examples

This example gets a list of the routines included in a performance analysis model and then gets a list of the lines in each routine:



Long ll_cnt ProfileLine lproln_line[]



lpro_model.BuildModel() lpro_model.RoutineList(iprort_list)



FOR ll_cnt = 1 TO UpperBound(iprort_list) iprort_list[ll_cnt].LineList(lproln_line)



... NEXT



See also BuildModel



- 10.381 LinkTo Description Establishes a link between an OLE control and a file or an item within the file. Syntax olecontrol.LinkTo ( filename {, sourceitem } )


- Table 10.461:




|Argument|Description|
|---|---|
|olecontrol|The name of the OLE control in which you want to insert a linked object.|
|filename|A string whose value is the file name containing the data that you want to insert in olecontrol, with a link connecting the object in PowerBuilder to the original data. If you do not specify sourceitem, a link is established with the whole file.|
|sourceitem (option|Aal)string that names an item within file name to which you want to link. The way you specify sourceitem is determined by the OLE server application.|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- File not found
- -2 -- Item not found
- -9 -- Other error If any argument's value is null, LinkTo returns null. Examples




This example creates an object in the OLE control, ole_1. The object is linked to the file C: \XLS\EXPENSE.XLS:



integer result result = ole_1.LinkTo("c:\xls\expense.xls")



This example links to a section of rows and columns in the same spreadsheet as in the previous example:



integer result result = ole_1.LinkTo("c:\xls\expense.xls", &



"R1C1:R5C5")
