# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs or if objectname is a minimized or maximized window. If any argument's value is null, Resize returns null.



Usage You cannot use Resize for a child DataWindow. Resize does not resize a minimized or maximized sheet or window. If the window is minimized or maximized, Resize returns -1. Equivalent syntax You can set object's Width and Height properties instead of calling the Resize function. However, the two statements cause PowerBuilder to redraw objectname twice; first with the new width, and then with the new width and height.



objectname.Width = width objectname.Height = height



The first two statements, although they redraw gb_box1 twice, achieve the same result as the third statement:



gb_box1.Width = 100 // These lines resize gb_box1.Height = 150 // gb_box1 to 100 x 150 gb_box1.Resize(100, 150)// So does this line
