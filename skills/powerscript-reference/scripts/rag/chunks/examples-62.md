# Examples

These statements get the number of categories in the graph gr_revenues in the DataWindow control dw_findata:



integer li_count li_count = &



dw_findata.CategoryCount("gr_revenues")



These statements get the number of categories in the graph gr_product_data:



integer li_count li_count = gr_product_data.CategoryCount()



See also DataCount SeriesCount



- 10.51 CategoryName Description Obtains the category name associated with the specified category number. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls . Syntax controlname.CategoryName ( { graphcontrol, } categorynumber )


- Table 10.62:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to find the name of a specific category, or the name of the DataWindow control containing the graph.|
|graphcontrol (DataWindow control only) (optional)|A string whose value is the name of the graph in the DataWindow for which you want the name of a specific category. Graphcontrol is required if controlname is a DataWindow control.|
|categorynumber|The number of the category for which you want the name.|



Return value String. Returns the name of categorynumber in controlname. If an error occurs, it returns the empty string (""). If any argument's value is null, CategoryName returns null. Usage



Categories are numbered consecutively, from 1 to the value returned by CategoryCount. When you delete a category, the categories are renumbered to keep the numbering



consecutive. You can use CategoryName to find out the named category associated with a category number.



Examples These statements obtain the name of category 5 in the graph gr_product_data:



string ls_name ls_name = gr_product_data.CategoryName(5)



These statements obtain the name of category 5 in the graph gr_revenues in the DataWindow control dw_findata:



string ls_name ls_name = &



dw_findata.CategoryName("gr_revenues", 5)



See also AddCategory SeriesName



- 10.52 Ceiling Description Determines the smallest whole number that is greater than or equal to a specified limit. Syntax Ceiling ( n )


- Table 10.63:




|Argument|Description|
|---|---|
|n|The number for which you want the smallest whole number that is greater than or equal to it|
