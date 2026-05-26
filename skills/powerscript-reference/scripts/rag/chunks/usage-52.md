# Usage

You should call GetLibraryList and append any libraries you want to add to the list before updating the search path using the SetLibraryList function.



Examples This example obtains the list of libraries, adds a library to the list, then resets the list:



string ls_list, ls_newlist ls_list = getlibrarylist () ls_newlist = ls_list + ",c:\my_library.pbl" setlibrarylist (ls_newlist)



See also AddToLibraryList SetLibraryList
