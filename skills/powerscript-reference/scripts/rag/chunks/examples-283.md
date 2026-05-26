# Examples

This example assigns display values to three columns in a report view for three lv_list ListView items:



listviewitem l_lvi integer li_count, li_index



FOR li_index = 1 to 3 li_count=li_count+1 lv_1ist.AddItem("Category " + String(li_index), 1)



NEXT lv_list.AddColumn("Composition", Left! , 860) lv_list.AddColumn(" Album", Left! , 610) lv_list.AddColumn(" Artist", Left! , 710)



- lv_list.SetItem(1 , 1 , "St. Thomas") lv_list.SetItem(1 , 2 , "The Bridge") lv_list.SetItem(1 , 3 , "Sonny Rollins")
- lv_list.SetItem(2 , 1 , "So What") lv_list.SetItem(2 , 2 , "Kind of Blue") lv_list.SetItem(2 , 3 , "Miles Davis")


- lv_list.SetItem(3 , 1 , "Goodbye, Porkpie Hat")
- lv_list.SetItem(3 , 2 , "Mingus-Ah-Um")
- lv_list.SetItem(3 , 3 , "Charles Mingus") See also GetItem


- 10.615.3 Syntax 3: For TreeView controls Description Sets the data associated with a specified item. Applies to TreeView controls Syntax treeviewname.SetItem ( itemhandle, item )
