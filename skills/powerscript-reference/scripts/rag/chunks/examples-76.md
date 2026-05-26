# Examples

This example creates a new subdirectory in the current path and then makes the new subdirectory the current directory:



string ls_path="my targets" integer li_filenum CreateDirectory ( ls_path ) li_filenum = ChangeDirectory( ls_path )



See also GetCurrentDirectory RemoveDirectory
