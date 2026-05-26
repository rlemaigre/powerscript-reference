# Return value

- Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage




The directory must be empty and must not be the current directory for this function to succeed.



Examples This example removes a subdirectory from the current directory:



string ls_path="my targets" integer li_filenum



li_filenum = RemoveDirectory ( ls_path ) If li_filename <> 1 then MessageBox("Remove directory failed", &



+ "Check that the directory exists, is empty, and " &

+ "is not the current directory") else MessageBox("Success", "Directory " + ls_path + &



" deleted") end if
