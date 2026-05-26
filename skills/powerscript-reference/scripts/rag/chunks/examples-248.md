# Examples

This statement saves the contents of the graph gr_History. The file and format information are not specified, so PowerBuilder prompts for the file name and save the graph as tabdelimited text:



gr_History.SaveAs()



This statement saves the contents of gr_History to the file G:\HR\EMPLOYEE.HIS. The format is CSV without column headings:



gr_History.SaveAs("G:\HR\EMPLOYEE.HIS" ,CSV!, FALSE)



This statement saves the contents of gr_computers in the DataWindow control dw_equipmt to the file G:\INVENTORY\SALES.XLS. The format is Excel with column headings:



dw_equipmt.SaveAs("gr_computers", & "G:\INVENTORY\SALES.XLS", Excel!, TRUE)
