# Examples

In this example, a table in a database tracks changes of OLE objects; when the user saves an Excel spreadsheet in an OLE control, this code puts the current date in a DataWindow so that the database table can be updated:



long ll_row // Find the row with information for the Excel file ll_row = dw_1.Find("file_name = 'expenses.xls'", &



1, 999) IF ll_row > 0 THEN



// Make the found row current dw_1.SetRow(ll_row)



// Put today's date in the last_updated column dw_1.Object.last_updated[ll_row] = Today( )



// Update and refresh the DataWindow dw_1.Update( ) dw_1.Retrieve( )



ELSE



MessageBox("Find", "No row found") END IF



See also Close SaveObject



- 9.102 SaveObject Description Occurs when the server application saves the object in the control. Event ID


- Table 9.223:




|Event ID|Objects|
|---|---|
|pbm_omnsaveobject|OLE|



Arguments None Return Values Long. Return code: Ignored Usage



Using the SaveObject event is the preferred technique for retrieving the ObjectData blob value of an OLE control when the server saves the data in the embedded object. Unlike the Save and Close events, the SaveObject event does not require you to post a user event back to the control to prevent the generation of a runtime error.



Because of differences in the behavior of individual servers, this event is not triggered consistently across all server applications. Using Microsoft Word or Excel, the SaveObject event is triggered when the DisplayType property of the control is set to DisplayAsActiveXDocument! or DisplayAsIcon!, but not when it is set to DisplayAsContent!. For other applications, such as Paint Shop Pro, the event is triggered when the display type is DisplayAsContent! but not when it is DisplayAsActiveXDocument!.



Because some servers might also fire the PowerBuilder Save event and the relative timing of the two events cannot be guaranteed, your program should handle only the SaveObject event.
