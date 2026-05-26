# See also

ClearHeaders GetBody GetHeader GetHeaders SetAccessToken SetBody SetHeader



- 10.615 SetItem Sets the value of an item in a list.




For use with DataWindows and DataStores, see the SetItem method for DataWindows in Section 9.171, “SetItem” in DataWindow Reference.



- Table 10.762:



|To set the values of|Use|
|---|---|
|A ListView control item|Syntax 1|
|A ListView control item and column|Syntax 2|
|A TreeView control item|Syntax 3<br><br>|



- 10.615.1 Syntax 1: For ListView controls Description




Sets data associated with a ListView item to the property values you specify in a ListViewItem variable.



Applies to ListView controls Syntax



listviewname.SetItem ( index, { column }, item )



- Table 10.763:




|Argument|Description|
|---|---|
|listviewname|The ListView for which you are setting item properties|
|index|The index number of the item for which you are setting properties|
|column|The index number of the column of the item for which you want to set properties|
|item|The ListViewItem variable containing property values you want to assign to a ListView item|
