# Table 9.216:

|Argument|Description|
|---|---|
|handle|Long by value (the handle of the item the user clicked)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



This example for the RightClicked event of a TreeView control displays a pop-up menu when the user clicks the right mouse button:



// Declare a menu variable of type m_main m_main m_tv_popmenu



// Create an instance of the menu variable m_tv_popmenu = CREATE m_main



// Display menu at pointer position m_tv_popmenu.m_entry.PopMenu(Parent.PointerX(), &



Parent.PointerY())



See also Clicked RightDoubleClicked



- 9.100 RightDoubleClicked The RightDoubleClicked event has different arguments for different objects:
