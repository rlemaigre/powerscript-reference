# Table 9.214:

|Argument|Description|
|---|---|
|index|Integer by value (the index of the item or tab the user clicked)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



When the user clicks in the display area of the Tab control, the tab page user object gets an RButtonDown event rather than a RightClicked event for the Tab control.



Examples



This example for the RightClicked event of a ListView control displays a pop-up menu when the user clicks the right mouse button:



// Declare a menu variable of type m_main m_main m_lv_popmenu // Create an instance of the menu variable m_lv_popmenu = CREATE m_main // Display menu at pointerposition m_lv_popmenu.m_entry.PopMenu(Parent.PointerX(), &



Parent.PointerY())



See also Clicked RightDoubleClicked



- 9.99.2 Syntax 2: For TreeView controls Description Occurs when the user clicks the right mouse button on the TreeView control. Event ID
