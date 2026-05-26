# Examples

This example calls the GetHostObject function. Ici_info is an instance variable of type ContextInformation, which has been populated using the GetContextService function; ole1 is an instance variable of type OLEObject:



Integer li_return



li_return = ici_info.GetHostObject(ole1) IF li_return = 1 THEN



sle_1.Text = "GetHostObject succeeded" ELSE



sle_1.Text = "GetHostObject failed" cb_goback.Enabled = FALSE cb_navigate.Enabled = FALSE



END IF



See also GetCompanyName GetName GetShortName GetVersionName



- 10.227 GetItem Retrieves data associated with a specified item in ListView and TreeView controls.


- Table 10.275:



|To retrieve data associated with a specified|Use|
|---|---|
|ListView control item|Syntax 1|
|ListView control item and column|Syntax 2|
|TreeView item|Syntax 3<br><br>|



- 10.227.1 Syntax 1: For ListView controls Description Retrieves a ListViewItem object from a ListView control so you can examine its properties. Applies to ListView controls Syntax listviewname.GetItem ( index, {column}, item )


- Table 10.276:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control for which you want to retrieve the ListView item|
|index|The index number of the item you want to retrieve|
|column|The index number of the column for which you want item information|
|item|The ListViewItem variable in which you want to store the ListViewItem object|
