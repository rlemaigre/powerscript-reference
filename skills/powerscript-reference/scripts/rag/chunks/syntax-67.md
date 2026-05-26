# Syntax

objectname.GetParent ( )



- Table 10.312:




|Argument|Description|
|---|---|
|objectname|A control in a window or user object or an item on a menu for which you want the parent object|



Return value PowerObject. Returns a reference to the parent of objectname. Examples



In event scripts for a user object that will be used as a tab page, you can use code like the following to make references to the parent Tab control generic:



// a_tab is generic; // it does not know about specific pages tab a_tab



// a_tab_page is generic; // it does not know about specific controls userobject a_tab_page



// Get values for the Tab control and the tab page a_tab = this.GetParent( ) // Somewhat redundant, for illustration only a_tab_page = this



// Set properties for the tab page a_tab_page.PowerTipText = "Important property page" // Set properties for the Tab control a_tab.PowerTips = TRUE



// Run Tab control functions a_tab.SelectTab(a_tab_page)



You cannot refer to controls on the user object because a_tab_page does not know about them. You cannot refer to specific pages in the Tab control because a_tab does not know about them either.



In event scripts for controls on the tab page user object, you can use two levels of GetParent to refer to the user object and the Tab control containing the user object as a tab page:



// For a control, add one more level of GetParent() // and you can make the same settings as above tab a_tab userobject a_tab_page



a_tab_page = this.GetParent() a_tab = a_tab_page.GetParent()



a_tab_page.PowerTipText = "Important property page" a_tab.PowerTips = TRUE



a_tab.SelectTab(a_tab_page)
