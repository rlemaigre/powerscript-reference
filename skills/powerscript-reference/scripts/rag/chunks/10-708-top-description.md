# 10.708 Top Description

Obtains the index number of the first visible item in a ListBox control. Top lets you to find out how the user has scrolled the list.



Applies to ListBox and PictureListBox controls Syntax



listboxname.Top ( )



- Table 10.884:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox or PictureListBox in which you want the index of the first visible item in the list|



Return value Integer. Returns the index of the first visible item in listboxname. Top returns -1 if an error occurs. If listboxname is null, Top returns null. Usage



The index of a list item is its position in the full list of items, regardless of how many are currently visible in the control.
