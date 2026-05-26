# Examples

These statements modify the data point 9 in the series named Test One in the scatter graph gr_product_data:



integer SeriesNbr SeriesNbr = gr_product.FindSeries("Test One") gr_product_data.ModifyData(SeriesNbr, &



9, 4.55, 86.38)



FindSeries



- 10.420 Month Description Determines the month of a date value. Syntax Month ( date )

- Table 10.511:




|Argument|Description|
|---|---|
|date|The date from which you want the month|



Return value Integer. Returns an integer (1 to 12) whose value is the month portion of date. If date is null, Month returns null. Examples This statement returns 1:



Month(2004-01-31)



These statements store in start_month the month entered in the SingleLineEdit sle_start_date:



integer start_month start_month = Month(date(sle_start_date.Text))



See also Day Date Year Month method for DataWindows in Section 2.4.82, “Month” in DataWindow Reference.



- 10.421 Move Description




Moves a control or object to another position relative to its parent window, or for some window objects, relative to the screen.



Applies to Any object or control Syntax



objectname.Move ( x, y )



- Table 10.512:




|Argument|Description|
|---|---|
|objectname|The name of the object or control you want to move to a new location|
|x|The x coordinate of the new location in PowerBuilder units|
|y|The y coordinate of the new location in PowerBuilder units|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs or if objectname is a maximized window. If any argument's value is null, Move returns null. Usage




The x and y coordinates you specify are the new coordinates of the upper-left corner of the object or control. If the shape of the object or control is not rectangular (such as, a RadioButton or Oval), x and y are the coordinates of the upper-left corner of the box enclosing it. For a line control, x and y are the BeginX and BeginY properties.



When you move controls, drawing objects, and child windows, the coordinates you specify are relative to the upper-left corner of the parent window. When you use Move to position main, pop-up, and response windows, the coordinates you specify are relative to the upperleft corner of the display screen.



Move does not move a maximized sheet or window. If the window is maximized, Move returns -1.



You can specify coordinates outside the frame of the parent window or screen, which effectively makes the object or control invisible.



To draw the image of a Picture control at a particular position, without actually moving the control, use the Draw function.



The Move function changes the X and Y properties of the moved object. Equivalent syntax The syntax below directly sets the X and Y properties of an object or control. Although the result is equivalent to using the Move function, it causes PowerBuilder to redraw objectname twice, first at the new location of X and then at the new X and Y location:



objectname.X = x objectname.Y = y



These statements cause PowerBuilder to redraw gb_box1 twice:



gb_box1.X = 150 gb_box1.Y = 200



This statement has the same result but redraws gb_box1 once:



gb_box1.Move(150,200)
