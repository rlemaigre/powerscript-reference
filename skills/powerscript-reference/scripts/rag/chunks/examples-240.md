# Examples

These statements change the color of data point 10 in the series named Costs in the graph gr_product_data to the color for the series:



SeriesNbr = gr_product_data.FinSeries("Costs") gr_product_data.ResetDataColors(SeriesNbr, 10)



These statements change the color of data point 10 in the series named Costs in the graph gr_comps in the DataWindow control dw_equip to the color for the series:



SeriesNbr = dw_equipment.FindSeries("Costs") dw_equip.ResetDataColors("gr_comps", SeriesNbr, 10)



See also GetDataStyle SeriesName GetSeriesStyle SetDataStyle SetSeriesStyle



- 10.528 ResetInk Description Clears ink from an InkPicture control. Applies to InkPicture controls Syntax inkpicname.ResetInk ( )


- Table 10.654:




|Argument|Description|
|---|---|
|inkpicname|The name of the InkPicture control from which you want to clear ink.|



Return value Integer. Returns 1 for success and -1 for failure. Usage Use the ResetInk function to clear the ink from an InkPicture control.



The following example clears the ink from an InkPicture control:



ip_1.ResetInk()



See also LoadInk LoadPicture ResetPicture SaveInk Save



- 10.529 ResetPicture Description Clears a picture from an InkPicture control. Applies to InkPicture controls Syntax inkpicname.ResetPicture ( )


- Table 10.655:




|Argument|Description|
|---|---|
|inkpicname|The name of the InkPicture control from which you want to clear a picture.|



Return value Integer. Returns 1 for success and -1 for failure. Usage Use the ResetInk function to clear the image from an InkPicture control. Examples The following example clears the image from an InkPicture control:



ip_1.ResetPicture()



See also LoadInk LoadPicture ResetInk SaveInk Save
