# Examples

These statements store in the variable ls_SeriesName the name of series 5 in the graph gr_product_data:



string ls_SeriesName ls_SeriesName = gr_product_data.SeriesName(5)



These statements store in the variable ls_SeriesName the name of series 5 in the graph gr_computers in the DataWindow control dw_equipment:



string ls_SeriesName ls_SeriesName = &



dw_equipment.SeriesName("gr_computers", 5)



See also CategoryName DeleteSeries FindSeries



- 10.589 SetAbort Declares that a transaction on a transaction server should be rolled back.


- Table 10.727:



|To roll back a transaction|Use|
|---|---|
|For OLETxnObject objects|Syntax 1|
|For TransactionServer objects|Syntax 2<br><br>|



10.589.1 Syntax 1: For OLETxnObject objects Description Declares that the current transaction should be rolled back. Applies to OLETxnObject objects Syntax



oletxnobject.SetAbort ( )



- Table 10.728:




|Argument|Description|
|---|---|
|oletxnobject|The name of the OLETxnObject variable that is connected to the COM object|



Returns 1 if it succeeds and -1 if an error occurs. Usage



Call the SetAbort function from the client to force a COM+ transaction to be rolled back. The default is to complete the transaction if all participants in the transaction on the COM+ server have called SetComplete or EnableCommit.
