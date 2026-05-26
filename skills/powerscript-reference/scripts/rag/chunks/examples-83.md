# Examples

The following script for the SelectionChanged event for the ListBox lb_FileList calls DirSelect to test whether the user's selection is a file. If not, the script joins the directory name with the file pattern, and calls DirList to populate the ListBox and display the current drive and directory in the StaticText st_FilePath. If the current selection is a file, other code processes the file name:



string ls_filename, ls_filespec = "*.TXT" IF lb_FileList.DirSelect(ls_filename) THEN



//If ls_filename is not a file, //append directory to ls_filespec. ls_filename = ls_filename + ls_filespec lb_filelist.DirList(ls_filename, &



16400, st_FilePath) ELSE



... //Process the file. END IF



See also DirList GetFolder
