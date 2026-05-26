# Balancing PrintOpen and PrintClose

When you open a print job, you must close (or cancel) it. To avoid hung print jobs, process and close a print job in the same event in which you open it.



Examples This example opens a job but does not give it a name:



ulong li_job li_job = PrintOpen()



This example opens a job, gives it a name, and displays the Print dialog box:



ulong li_job li_job = PrintOpen("Phone List", true)



See also Print PrintBitmap PrintCancel PrintClose PrintDataWindow PrintDefineFont PrintLine PrintOval PrintPage PrintRect PrintRoundRect PrintSend (obsolete) PrintSetFont PrintSetup PrintText PrintWidth



- PrintX

- PrintY


- 10.485 PrintOval Description Draws a white oval outlined in a line of the specified thickness on the print page. Syntax PrintOval ( printjobnumber, x, y, width, height, thickness )


- Table 10.608:




|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job|
|x|An integer specifying the x coordinate in thousandths of an inch of the upper-left corner of the oval's bounding box|
|y|An integer specifying the y coordinate in thousandths of an inch of the upper-left corner of the oval's bounding box|



|Argument|Description|
|---|---|
|width|An integer specifying the width in thousandths of an inch of the oval's bounding box|
|height|An integer specifying the height in thousandths of an inch of the oval's bounding box|
|thickness|An integer specifying the thickness of the line that outlines the oval in thousandths of an inch|
