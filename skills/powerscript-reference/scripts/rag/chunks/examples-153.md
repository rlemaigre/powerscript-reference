# Examples

This statement copies all the data in the file D:\EMPLOYEE.TXT to gr_employee starting at the first row:



gr_employee.ImportFile("D:\EMPLOYEE.TXT")



This statement copies the data from the file D:\EMPLOYEE.TXT starting with row 2 column



- 3 and ending with row 30 column 5 to the graph gr_employee: gr_employee.ImportFile("D:\EMPLOYEE.TXT", 2, 30, 3)




The following statements are equivalent. Both import the contents of the XML file named myxmldata:



gr_control.ImportFile(myxmldata.xml) gr_control.ImportFile(XML!, myxmldata)



This example causes PowerBuilder to display the Specify Import File dialog box:



string null_str SetNull(null_str) dw_main.ImportFile(null_str)



See also ImportClipboard ImportString
