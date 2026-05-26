# Examples

In a DataWindow Clicked event, these statements obtain the number of the series and data point clicked by the user in gr_1 and determine whether the label is set for that data point.



integer SeriesNbr, ItemNbr boolean refB grObjectType clickedtype



clickedtype = this.ObjectAtPointer("gr_1", & SeriesNbr, ItemNbr)



this.GetDataLabelling("gr_1", SeriesNbr, & ItemNbr, refB)



These statements obtain the number of the series and data point clicked by the user in a graph object and determine whether the label is set for that data point.



integer SeriesNbr, ItemNbr boolean refB grObjectType clickedtype



clickedtype = this.ObjectAtPointer(SeriesNbr, ItemNbr) this.GetDataLabelling(SeriesNbr, ItemNbr, refB)



See also GetSeriesLabelling SetDataLabelling SetSeriesLabelling
