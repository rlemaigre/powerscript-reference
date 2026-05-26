# 10.123 DirSelect Description

When a ListBox has been populated with the DirList function, DirSelect retrieves the current selection and stores it in a string variable.



Applies to ListBox, DropDownListBox, PictureListBox, and DropDownPictureListBox controls Syntax



listboxname.DirSelect ( selection )



- Table 10.152:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox control from which you want to retrieve the current selection. The ListBox must have been populated using DirList, and the selection must be a drive letter, a file, or the name of a directory.|
|selection|A string variable in which the selected path name will be put.|



Return value Boolean. Returns true if the current selection is a drive letter or a directory name (which can contain files and other directories) and false if it is a file (indicating the user's final choice). If any argument's value is null, DirSelect returns null. Usage



Use DirSelect in the SelectionChanged event to find out what the user chose. When the user's selection is a drive or directory, use the selection as a new directory specification for DirList.
