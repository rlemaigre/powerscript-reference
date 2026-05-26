# Examples

This example searches the RichTextEdit rte_1 for text the user specifies in the SingleLineEdit sle_search. The search proceeds forward from the cursor position. The search is case insensitive and not limited to whole words:



integer li_charsfound li_charsfound = rte_1.Find(sle_search.Text, &



TRUE, TRUE, FALSE, TRUE)



See also FindNext



- 10.162 FindCategory Description Obtains the number of a category in a graph when you know the category's label. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.FindCategory ( { graphcontrol, } categoryvalue )


- Table 10.194:




|Argument|Description|
|---|---|
|controlname|A string whose value is the name of the graph in which you want to find a specific category, or the name of the DataWindow control containing the graph.|
|graphcontrol (DataWindow control only)|(Optional) A string whose value is the name of the graph in the DataWindow control in which you want to find a specific category.|
|categoryvalue|A value that is the category for which you want the number. The value you specify must be the same datatype as the datatype of the category axis.|



Return value Integer. Returns the number of the category named in categoryvalue in the graph controlname, or if controlname is a DataWindow control, in graphcontrol. If an error occurs, FindCategory returns -1. If any argument's value is null, FindCategory returns null. Usage



Most of the category manipulation functions require a category number, rather than a name. However, when you delete and insert categories, existing categories are renumbered to keep the numbering consecutive. Use FindCategory when you know only a category's label or when the numbering may have changed.
