# Examples

These statements store the number of the series in the graph gr_product_data that was entered in the SingleLineEdit sle_series in SeriesNbr:



integer SeriesNbr SeriesNbr = &



gr_product_data.FindSeries(sle_series.Text)



These statements obtain the number of the series named PCs in the graph gr_computers in the DataWindow control dw_equipment and store it in SeriesNbr:



integer SeriesNbr SeriesNbr = &



dw_equipment.FindSeries("gr_computers", "PCs")



See also AddSeries DeleteSeries FindCategory
