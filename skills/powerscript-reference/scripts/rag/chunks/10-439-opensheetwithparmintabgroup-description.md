# 10.439 OpenSheetWithParmInTabGroup Description

Opens a sheet in a tab group within an MDI frame window for dockable windows. OpenSheetWithParmInTabGroup also stores a parameter in the system's Message object so that it is accessible to the opened sheet.



Applies to Window objects Syntax



OpenSheetWithParmInTabGroup ( sheetrefvar, parameter {, windowtype }, siblingname, sheetname )



- Table 10.543:




|Argument|Description|
|---|---|
|sheetrefvar|The name of any window variable that is not an MDI frame window. OpenSheetInwithParmTabGroup places a reference to the open sheet in sheetrefvar.|
|parameter|The parameter you want to store in the Message object when the sheet is opened. Parameter must have one of these datatypes:<br><br>• String<br>• Double<br>• PowerObject<br>|
|windowtype (optio|Anal)string whose value is the datatype of the window you want to open. The datatype of windowtype must be the same or a descendant of sheetrefvar.|
|siblingname|The name of a sibling window in either a docked state or in a nondocument tab group. The sheet opens in that tab group.|
|sheetname|A unique string identifier for the sheet, which is used when layout is persisted.|
