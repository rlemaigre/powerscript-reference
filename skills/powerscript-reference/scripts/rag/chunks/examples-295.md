# Examples

These statements set the transparency percentage to 50% for the clicked series in the graph gr_1 in the DataWindow control dw_employee:



integer SeriesNbr, ItemNbr, TransNbr string ls_SeriesName grObjectType clickedtype



// Get the number of the series and datapoint clickedtype = this.ObjectAtPointer("gr_1", &



SeriesNbr, ItemNbr)



//Get the name of series ls_SeriesName = dw_employee.SeriesName("gr_1", &



SeriesNbr)



//The following statement sets Transparency to 50% TransNbr = 50



dw_employee.SetSeriesTransparency("gr_1", & ls_SeriesName, TransNbr)



These statements set the transparency to 50% for the clicked series in the graph gr_employee.



integer SeriesNbr, ItemNbr, TransNbr string ls_SeriesName grObjectType clickedtype



clickedtype = gr_employee.ObjectAtPointer( &



SeriesNbr, ItemNbr) ls_SeriesName = gr_employee.SeriesName(SeriesNbr) TransNbr = 50 gr_employee.SetSeriesTransparency( & ls_SeriesName, TransNbr)



See also FindSeries GetSeriesTransparency GetDataTransparency



SetDataTransparency



- 10.644 SetSheetID Description Sets the unique identifier for an open sheet. Applies to Window objects Syntax controlname.SetSheetID ( sheetname )

- Table 10.803:




|Argument|Description|
|---|---|
|controlname|The open sheet to be identified.|
|sheetname|A unique string identifier for the sheet, which is used when layout is persisted.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetSheetID returns null. Usage



If no sheet identifier was set when it was opened by one of the OpenSheet functions, you can set an ID using the SetSheetID function. You can also change a sheet's ID.



Examples



window win[] OpenSheetDocked(win[1], this, WindowDockLeft!, "") win[1].SetSheetID("sheet1")



See also SetTextColor SetTextStyle



- 10.645 SetSpacing Description




Sets the line spacing for the selected paragraphs or the paragraph containing the insertion point in a RichTextEdit control.



Applies to RichTextEdit controls Syntax



rtename.SetSpacing ( spacing )
