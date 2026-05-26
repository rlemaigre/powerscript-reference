# Examples

This example creates an OLEObject variable and calls ConnectToNewObject to create a new Excel object and connect to it. It also creates an object of type oleobjectchild (which is a descendant of OLEObject) and sets the automation pointer of the descendant object to the value of the automation pointer in the OLEObject object. Then it sets a value in the worksheet using the descendant object, saves it to a different file, and destroys both objects:



OLEObject ole1 oleobjectchild oleChild integer rs



ole1= CREATE OLEObject rs = ole1.ConnectToNewObject("Excel.Application") oleChild = CREATE oleobjectchild rs = oleChild.SetAutomationPointer(ole1 ) IF ( rs = 0 ) THEN



oleChild.workbooks.open("d:\temp\expenses.xls") oleChild.cells(1,1).value = 11111 oleChild.activeworkbook.saveas( &



"d:\temp\newexp.xls") oleChild.activeworkbook.close() oleChild.quit()



END IF ole1.disconnectobject() DESTROY oleChild DESTROY ole1
