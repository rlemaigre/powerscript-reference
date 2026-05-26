# Examples

This example sorts TreeView items according to PictureIndex and Label sorting by PictureIndex first, then by label:



TreeViewItem tvi, tvi2



This.GetItem(handle1, tvi) This.GetItem(handle2, tvi2)



IF tvi.PictureIndex > tvi2.PictureIndex THEN ELSEIF tvi.PictureIndex < tvi2.PictureIndex THEN



- RETURN 1




RETURN -1 ELSEIF tvi.Label > tvi2.Label THEN RETURN 1 ELSEIF tvi.Label < tvi2.Label THEN



RETURN -1 ELSE



RETURN 0 END IF



- 9.109 SQLPreview Description Occurs immediately before a SQL statement is submitted to the DBMS. Event ID


- Table 9.246:



|Event ID|Objects|
|---|---|
|None|Transaction objects|



Arguments



- Table 9.247:




|Argument|Description|
|---|---|
|sqlfunc|The SQLFunction system enumeration passed by value. This enumeration indicates the function that initiated database activity. Values for this enumeration are: SQLDBInsert! SQLDBUpdate!, SQLDBDelete!, SQLDBSelect!, SQLDBProcedure!, SQLDBRPC!, and SQLDBOthers!.|
|sqlsyntax|String by value. The full text of the SQL statement.|



Return Values Long. Set the return code to affect the outcome of the event: 0 -- Continue processing 1 -- Stop processing Usage Use with embedded SQL This event is triggered before SQL statements are passed to the DBMS. Use with DataWindow/DataStore When using this event of the Transaction object with a DataWindow that also defines a SQLPreview event, the DataWindow's event is fired first. If the return value of DataWindow



SQLPreview event is 0 (continue processing), the Transaction object's SQLPreview event is triggered next.
