# Examples

The following example connects to a COM+ component and calls a method on the component that returns an ADO Recordset to an OLEObject object. Then it creates an ADOResultSet object and populates it with data from the OLEObject using SetRecordSet:



OLEObject loo_mycomponent OLEObject loo_ADOrecordset ADOresultset lrs_ADOresultset integer li_rc



loo_mycomponent = CREATE OLEObject li_rc = loo_mycomponent.ConnectToNewObject("PB.Test") IF li_rc <> 0 THEN



MessageBox("Connect Failed", string(li_rc) ) RETURN



END IF



// Use an OLEObject to hold ADO Recordset // returned from method on COM+ component loo_ADOrecordset = loo_mycomponent.GetTestResult()



// Create an ADOResultSet and get its data // from OLEObject holding passed ADO Recordset lrs_ADOresultset = CREATE ADOResultSet lrs_ADOresultset.SetRecordSet(loo_ADOrecordset)



See also CreateFrom method for DataWindows in Section 9.15, “CreateFrom” in DataWindow Reference. GenerateResultSet method for DataWindows in Section 9.42, “GenerateResultSet” in DataWindow Reference. GetRecordSet SetResultSet



- 10.634 SetRedraw Description Controls the automatic redrawing of an object or control after each change to its properties. Applies to Any object except a Menu Syntax objectname.SetRedraw ( boolean ) Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If boolean is null, SetRedraw returns null. Usage




By default, PowerBuilder redraws a control after each change to properties that affect appearance. Use SetRedraw to turn off redrawing temporarily in order to avoid flicker and reduce redrawing time when you are making several changes to the properties of an object or control. If the window is not visible, SetRedraw fails.
