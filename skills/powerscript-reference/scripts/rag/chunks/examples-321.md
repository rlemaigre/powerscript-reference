# Examples

The following statements illustrate the values UpperBound reports for fixed-size arrays and for variable-size arrays before and after memory has been allocated:



- integer a[5] UpperBound(a) // Returns 5 UpperBound(a,1) // Returns 5 UpperBound(a,2) // Returns -1; no 2nd dimension
- integer b[10,20] UpperBound(b,1) // Returns 10 UpperBound(b,2) // Returns 20
- integer c[ ] UpperBound(c) // Returns 0; no memory allocated c[50] = 900 UpperBound(c) // Returns 50 c[60] = 800 UpperBound(c) // Returns 60 c[60] = 800 c[50] = 700 UpperBound(c) // Returns 60
- integer d[10 to 50] UpperBound(d) // Returns 50




This example determines the position of a menu bar item called File, and if the item has a cascading menu with an item called Update, disables the Update item. The code could be a script for a control in a window.



The code includes a rather complicated construct: Parent.Menuid.Item. Its components are:



- • Parent -- The parent window of the control that is running the script.
- • Menuid -- A property of a window whose value identifies the menu associated with the window.
- • Item -- A property of a menu that is an array of items in that menu. If Item is itself a dropdown or cascading menu, it has its own item array, which can be a fourth qualifier.




The script is:



long i, k, tot1, tot2



// Determine how many menu bar items there are. tot1 = UpperBound(Parent.Menuid.Item)



FOR i = 1 to tot1 // Find the position of the File item. IF Parent.Menuid.Item[i].text = "File" THEN



MessageBox("Position", &



"File is in Position "+ string(i)) tot2 = UpperBound(Parent.Menuid.Item[i].Item) FOR k = 1 to tot2



// Find the Update item under File. IF Parent.Menuid.Item[i].Item[k].Text = &



"Update" THEN // Disable the Update menu option. Parent.Menuid.Item[i].Item[k].Disable() EXIT



END IF



NEXT EXIT



END IF NEXT



See also LowerBound



- 10.734 UrlDecode Description Decodes a string value using URL decoder. Applies to CoderObject object Syntax coder.UrlDecode ( variable )


- Table 10.907:




|Argument|Description|
|---|---|
|coder|The name of the CoderObject object.|
|variable|A string whose value is the data you want to decode with URL decoder.|
