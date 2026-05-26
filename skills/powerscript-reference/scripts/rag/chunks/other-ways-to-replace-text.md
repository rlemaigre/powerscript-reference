# Other ways to replace text

To use the contents of the clipboard as the replacement text, call the Paste function, instead of ReplaceText.



To replace text in a string, rather than a control, use the Replace function.



Examples If the MultiLineEdit mle_Comment contains Offer Good for 3 Months and the selected text is



- 3 Months, this statement replaces 3 Months with 60 Days and returns 7. The resulting value of mle_Comment is Offer Good for 60 Days: mle_Comment.ReplaceText("60 Days")




If there is no selected text, this statement inserts "Draft" at the cursor position in the SingleLineEdit sle_Comment3:



sle_Comment3.ReplaceText("Draft")



See also Copy Cut Paste



- 10.524 ReplaceW (obsolete) Description Replaces a portion of one string with another. This function is obsolete. It has the same behavior as Replace in all environments. Syntax ReplaceW ( string1, start, n, string2 )

- 10.525 Reset Clears data from a control or object. The syntax you choose depends on the target object.




For syntax for DataWindows and DataStores, see the Reset method for DataWindows in Section 9.122, “Reset” in DataWindow Reference.



- Table 10.648:




|To|Use|
|---|---|
|Delete all items from a list|Syntax 1|
|Delete all the data (and optionally the series and categories) from a graph|Syntax 2|
|Return to the beginning of a trace file|Syntax 3<br><br>|



- 10.525.1 Syntax 1: For list boxes Description Deletes all the items from a list. Applies to ListBox, DropDownListBox, PictureListBox, and DropDownPictureListBox controls Syntax listboxname.Reset ( )



Table 10.649:



|Argument|Description|
|---|---|
|listboxname|The name of the ListBox control from which to delete all items|



Return value



Integer. Returns 1 if it succeeds and -1 if an error occurs. If listboxname is null, Reset returns null. The return value is usually not used.



Examples This statement deletes all items in the ListBox portion of ddlb_Actions:



ddlb_Actions.Reset()



See also DeleteItem



- 10.525.2 Syntax 2: For graphs Description Deletes the data, the categories, or the series from a graph. Applies to




Graph controls in windows and user objects and graphs within a DataWindow object with an external data source.



Does not apply to other graphs within DataWindow objects because their data comes directly from the DataWindow.
