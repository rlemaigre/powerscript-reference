# Event ID

- Table 9.40:



|Event ID|Objects|
|---|---|
|pbm_dtpcloseup|DatePicker|



Arguments None. Return Values Long. Return code: Ignored.



- 9.14 ColumnClick Description Occurs when the user clicks a column header. Event ID


- Table 9.41:



|Event ID|Objects|
|---|---|
|pbm_lvncolumnclick|ListView|



Arguments



- Table 9.42:




|Argument|Description|
|---|---|
|column|The index of the clicked column|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



The ColumnClicked event is only available when the ListView displays in report view and the ButtonHeader property is set to true.
