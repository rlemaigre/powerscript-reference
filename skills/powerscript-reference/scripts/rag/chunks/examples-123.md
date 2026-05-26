# Examples

The following example displays a Select File dialog box that allows multiple selection. The file types are TXT, DOC, and all files, and the initial directory is C:\Program Files\Appeon. The option flag 18 specifies that the Explorer-style dialog box is used (2^1 = 2), and the Read Only check box is hidden (2^4 = 16). The selected filenames are displayed in a MultiLineEdit control.



If the user selects a single file, the docpath variable contains both the path and the file name. The example contains an IF clause to allow for this.



string docpath, docname[] integer i, li_cnt, li_rtn, li_filenum



li_rtn = GetFileOpenName("Select File", & docpath, docname[], "DOC", &



+ "Text Files (*.TXT),*.TXT," &

+ "Doc Files (*.DOC),*.DOC," &

+ "All Files (*.*), *.*", & "C:\Program Files\Appeon", 18)



mle_selected.text = "" IF li_rtn < 1 THEN return li_cnt = Upperbound(docname)



// if only one file is picked, docpath contains the // path and file name if li_cnt = 1 then



mle_selected.text = string(docpath) else // if multiple files are picked, docpath contains the // path only - concatenate docpath and docname



for i=1 to li_cnt mle_selected.text += string(docpath) &



+ "\" +(string(docname[i]))+"~r~n" next



end if



In the following example, the dialog box has the title Open and displays text files, batch files, and INI files in the Files of Type drop-down list. The initial directory is d:\temp. The option flag 512 specifies that the old-style dialog box is used and the Network button is hidden (2^9



= 512).



// instance variables // string is_filename, is_fullname int li_fileid



if GetFileOpenName ("Open", is_fullname, is_filename, & "txt", "Text Files (*.txt),*.txt,INI Files " &



+ "(*.ini), *.ini,Batch Files (*.bat),*.bat", & "d:\temp", 512) < 1 then return



li_fileid = FileOpen (is_fullname, StreamMode!) FileRead (li_fileid, mle_notepad.text) FileClose (li_fileid)



See also DirList DirSelect GetFileSaveName GetFolder
