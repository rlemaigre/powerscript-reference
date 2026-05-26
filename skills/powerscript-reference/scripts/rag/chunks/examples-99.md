# Examples

These statements obtain the number of a category in the graph gr_prod_data. The category name is the text in the SingleLineEdit sle_ctory:



integer CtgryNbr CtgryNbr =gr_prod_data.FindCategory(sle_ctgry.Text)



These statements obtain the number of the category named Qty in the graph gr_computers in the DataWindow control dw_equip:



integer CtgryNbr



CtgryNbr = dw_equip.FindCategory("gr_computers", "Qty")



See also AddCategory DeleteData DeleteSeries FindSeries
