# File not found

If PowerBuilder does not find the file, it creates a new file, giving it the specified name, if the fileaccess argument is set to Write!. If the argument is not set to Write!, FileOpen returns -1.



If the optional encoding argument is not specified and the file does not exist, the file is created with ANSI encoding.



When you create a new text file using FileOpen, use line mode or text mode. If you specify the encoding parameter, the BOM is written to the file based on the specified encoding.



When you create a new binary file using stream mode, the encoding parameter, if provided, is ignored.
