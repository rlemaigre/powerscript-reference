# Examples

This example declares and creates an OLEObject variable and connects to an Excel worksheet, which is opened in Excel. It then sets a value in the worksheet, saves it, and destroys the OLEObject variable, which exits the Excel:



integer result OLEObject myoleobject



myoleobject = CREATE OLEObject result = myoleobject.ConnectToObject( &



"c:\excel\expense.xls")



IF result = 0 THEN myoleobject.application.workbooks(1).& worksheets(1).cells(1,1).value = 14 myoleobject.application.workbooks(1).save()



END IF DESTROY myoleobject



This example connects to an Excel chart (using a Windows path name):



integer result OLEObject myoleobject



myoleobject = CREATE OLEObject result = myoleobject.ConnectToObject( &



"c:\excel\expense.xls", "excel.chart")



This example connects to the currently active object in Excel, which is already running:



integer result OLEObject myoleobject



myoleobject = CREATE OLEObject result = myoleobject.ConnectToObject("", &



"excel.application")



See also ConnectToNewObject DisconnectObject
