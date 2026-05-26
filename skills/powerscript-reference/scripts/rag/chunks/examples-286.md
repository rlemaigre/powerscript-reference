# Examples

These statements allow the user to select a file and then open the file and set the Picture control p_1 to the bitmap in the selected file:



integer fh, ret blob Emp_pic string txtname, named string defext = "BMP" string Filter = "bitmap Files (*.bmp), *.bmp" ret = GetFileOpenName("Open Bitmap", txtname, &



named, defext, filter)



IF ret = 1 THEN fh = FileOpen(txtname, StreamMode!) IF fh <> -1 THEN



FileRead(fh, Emp_pic) FileClose(fh) p_1.SetPicture(Emp_pic)



END IF END IF



- 10.629 SetPointer Sets the mouse pointer to a specified shape.


- Table 10.779:



|To|Use|
|---|---|
|Specifies a system-defined designated shape|Syntax 1|
|Specifies a file-defined designated shape|Syntax 2<br><br>|



- 10.629.1 Syntax 1: System-defined shape Description Sets the mouse pointer to a specified system-defined shape. Syntax SetPointer ( type )


- Table 10.780:




|Argument|Description|
|---|---|
|type|A value of the Pointer enumerated datatype indicating the type of pointer you want. Values are:<br><br>AppStarting! Arrow! Cross! Beam! Help!|



|Argument|Description|
|---|---|
| |HourGlass! Hyperlink! Icon! None! Size! SizeNS! SizeNESW! SizeWE! SizeNWSE! UpArrow!|
