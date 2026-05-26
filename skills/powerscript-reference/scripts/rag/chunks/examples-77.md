# Examples

These statements convert the date and time stored in ld_OrderDate and lt_OrderTime to a DateTime value that can be used to update the database:



DateTime ldt_OrderDateTime date ld_OrderDate time lt_OrderTime



ld_OrderDate = Date(sle_orderdate.Text) lt_OrderTime = Time(sle_ordertime.Text) ldt_OrderDateTime = DateTime( &



ld_OrderDate, lt_OrderTime)



See also Date Time DateTime method for DataWindows in Section 2.4.28, “DateTime” in DataWindow Reference



10.97.2 Syntax 2: For extracting DateTime values from blobs Description Extracts a DateTime value from a blob. Syntax



DateTime ( blob )



- Table 10.124:




|Argument|Description|
|---|---|
|blob|A blob in which the first value is a DateTime value. The rest of the contents of the blob is ignored. Blob can also be an Any variable containing a blob.|



Return value DateTime. Returns the DateTime value stored in blob. If blob is null, DateTime returns null. Usage



DateTime data is used only for reading and writing DateTime values to and from a database. To use the date and time values in scripts, use the Date and Time functions to assign values to date and time variables.
