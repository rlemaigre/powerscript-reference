# Examples

These statements store the series number and data point number at the pointer location in the graph named gr_product in SeriesNbr and ItemNbr. If the object type is TypeSeries! they obtain the series name, and if it is TypeData! they get the data value:



integer SeriesNbr, ItemNbr double data_value grObjectType object_type string SeriesName



object_type = &



gr_product.ObjectAtPointer(SeriesNbr, ItemNbr) IF object_type = TypeSeries! THEN



SeriesName = &



gr_product.SeriesName(SeriesNbr) ELSEIF object_type = TypeData! THEN



data_value = &



gr_product.GetData(SeriesNbr, ItemNbr) END IF



These statements store the series number and data point number at the pointer location in the graph named gr_computers in the DataWindow control dw_equipment in SeriesNbr and ItemNbr:



integer SeriesNbr, ItemNbr dw_equipment.ObjectAtPointer("gr_computers", &



SeriesNbr, ItemNbr)
