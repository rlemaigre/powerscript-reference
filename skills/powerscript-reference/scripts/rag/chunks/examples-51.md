# Examples

In this example, when the user or the server application saves a Word document in an OLE control, the data is saved as a blob in a file. The file can then be opened as a Word document:



blob l_myobjectdata l_myobjectdata = this.objectdata integer l_file l_file = FileOpen("c:\myfile.doc", StreamMode!, Write!) FileWrite( l_file, l_myobjectdata ) FileClose( l_file )



See also Close Save
