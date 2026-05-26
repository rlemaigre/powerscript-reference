# Examples

This example creates an OLEObject variable and calls ConnectToNewObject to create a new Excel object and connect to it:



integer result OLEObject myoleobject myoleobject = CREATE OLEObject result = myoleobject.ConnectToNewObject( &



"excel.application")



This example creates an OLETxnObject variable and calls ConnectToNewObject to create and connect to a new instance of a PowerBuilder COM object on a COM+ server:



OLETxnObject EmpObj Integer li_rc EmpObj = CREATE OLETxnObject li_rc = EmpObj.ConnectToNewObject("PB125COM.employee") IF li_rc < 0 THEN



DESTROY EmpObj MessageBox("Connecting to COM Object Failed", &



"Error: " + String(li_rc))



Return END IF // Perform some work with the COM object



... // If the work completed successfully, commit



// the transaction and disconnect the object EmpObj.SetComplete() EmpObj.DisconnectObject()



See also ConnectToObject DisconnectObject SetAbort SetComplete
