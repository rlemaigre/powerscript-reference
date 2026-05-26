# Examples

This statement changes the X and Y properties of gb_box1 to 150 and 200, respectively, and moves gb_box1 to the new location:



gb_box1.Move(150, 200)



This statement moves the picture p_Train2 next to the picture p_Train1:



P_Train2.Move(P_Train1.X + P_Train1.Width, & P_Train1.Y)



- 10.422 MoveTab Description Moves a tab page to another position in a Tab control, changing its index number. Applies to Tab controls Syntax tabcontrolname.MoveTab (source, destination )


- Table 10.513:




|Argument|Description|
|---|---|
|tabcontrolname|The name of the Tab control containing the tab you want to move.|
|source|An integer whose value is the index of the tab you want to move.|
|destination|An integer whose value is the index of the destination tab before which source is moved. If destination is 0 or greater than the number of tabs, source is moved to the end.|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. Usage




MoveTab also reorders the tab pages in the Tab control's Control array (which is a property that lists the tab pages within the Tab control) to match the new tab order.



Examples This example moves the first tab to the end:



tab_1.MoveTab(1, 0)



This example move the fourth tab to the first position:



tab_1.MoveTab(4, 1)



This example move the fourth tab to the third position:



tab_1.MoveTab(4, 3)



See also OpenTab SelectTab



- 10.423 _Narrow (obsolete) Description Converts a CORBA object reference from a general supertype to a more specific subtype. This function is used by PowerBuilder clients connecting to EAServer.
