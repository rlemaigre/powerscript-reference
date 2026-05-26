# Examples

This statement populates the ListBox lb_emp with a list of read/write files with the file extension TXT in the search path C:\EMPLOYEE\*.TXT:



lb_emp.DirList("C:\EMPLOYEE\*.TXT", 0)



This statement populates the ListBox lb_emp with a list of read-only files with the file extension DOC in the search path C:\EMPLOYEE\*.DOC and displays the path specification in the StaticText st_path:



lb_emp.DirList("C:\EMPLOYEE\*.DOC", 1, st_path)



These statements in the script for a window Open event initialize a ListBox to all files in the current directory that match *.TXT:



String s_filespec s_filespec = "*.TXT" lb_filelist.DirList(s_filespec, 16400, st_filepath)



See also DirSelect GetFolder
