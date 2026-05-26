# See also

AddData AddSeries



- 10.427 OffsetPos Description Sets the offset for progress bar controls. Applies to Progress bar controls Syntax control.OffsetPos (increment )

- Table 10.517:



|Argument|Description|
|---|---|
|control|The name of the progress bar control|
|increment|An integer that is added to the start position of the progress bar control|



Return value Integer.



- Returns 1 if it succeeds and -1 if there is an error. Examples This statement offsets the start position of a horizontal progress bar by 10: HProgressBar.OffsetPos ( 10 ) See also SelectionRange SetRange StepIt




10.428 Open



Opens a window, an OLE object, or a trace file. For windows Open displays a window and makes all its properties and controls available to scripts.



- Table 10.518:






|To|Use|
|---|---|
|Open an instance of a particular window datatype|Syntax 1|
|Allow the application to select the window's datatype when the script is executed|Syntax 2<br><br>|
