# Syntax

objectref.UpdateLinksDialog ( )



- Table 10.904:




|Argument|Description|
|---|---|
|objectref|The name of the OLE control or the fully qualified name of a OLE DWObject within a DataWindow control that contains the object for which you want to establish a link.<br><br>The fully qualified name for a DWObject has this syntax:<br><br>dwcontrol.Object.dwobjectname|



Return value Integer. Returns 0 if it succeeds and -1 if an error occurs. Usage



If a container's LinkUpdateOptions property is set for automatic update, PowerBuilder tries to update the link when the OLE container is created and the object is loaded (for example, when the window is opened). If the linked file is not found, a message informs the user and he or she can choose to edit the link (for example, break the link or browse for the correct file).



UpdateLinksDialog and LinkTo are useful when a linked file has been moved and the container's LinkUpdateOptions property is set for manual update.



UpdateLinksDialog Calling this function triggers the same process that occurs for automatic update. PowerBuilder tries to find the file and if it fails it gives the user the opportunity to edit the link. LinkTo If you want to establish a link without involving the user, call the LinkTo function. Its arguments specify the file and item you want to link. If you want to display your own dialog for selecting the linked file, you can take the information the user specifies and call the LinkTo function. If the OLE container holds an embedded object, calling UpdateLinksDialog has no effect. It returns zero because no link is broken. For more information about updating links, see Section 21.3.2, “Linking versus embedding” in Application Techniques. Examples



This example looks for the linked file for an OLE control ole_report. If the file is missing, it prompts the user to display the Links dialog and edit the link:



ole_report.UpdateLinksDialog()



This example looks for the linked file for an OLE DWObject ole_word in the DataWindow control dw_customer_data. If the file is missing, the user can choose to edit the link using the Links dialog:



dw_customer_data.Object.ole_word.UpdateLinksDialog()



See also InsertObject LinkTo



- 10.732 Upper Description Converts all the characters in a string to uppercase. Syntax Upper ( string )

- Table 10.905:



|Argument|Description|
|---|---|
|string|The string you want to convert to uppercase letters|



Return value String. Returns string with lowercase letters changed to uppercase if it succeeds and the empty string ("") if an error occurs. If string is null, Upper returns null. Examples This statement returns BABE RUTH:



Upper("Babe Ruth")



See also Lower Upper method for DataWindows in Section 2.4.129, “Upper” in DataWindow Reference.



10.733 UpperBound



Description Obtains the upper bound of a dimension of an array. Syntax



UpperBound ( array {, n } )



- Table 10.906:






|Argument|Description|
|---|---|
|array|The name of the array for which you want the upper bound of a dimension|
|n (optional)|The number of the dimension for which you want the upper bound. The default is 1|



Return value Long. Returns the upper bound of dimension n of array. If n is greater than the number of dimensions of the array, UpperBound returns -1. If any argument's value is null, UpperBound returns null. Usage



For variable-size arrays, memory is allocated for the array when you assign values to it. UpperBound returns the largest value that has been defined for the array in the current script. Before you assign values, the lower bound is 1 and the upper bound is 0. For fixed arrays, whose size is specified when it is declared, UpperBound always returns the declared size.
