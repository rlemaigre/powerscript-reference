# Syntax

FileRead ( file#, variable )



- Table 10.185:




|Argument|Description|
|---|---|
|file#|The integer assigned to the file when it was opened|
|variable|The name of the string or blob variable into which you want to read the data|



Return value Integer. Returns the number of bytes read. If an end-of-file mark (EOF) is encountered before any characters are read, FileRead returns -100. If the file is opened in LineMode and a CR or LF is encountered before any characters are read, FileRead returns 0. If an error occurs, FileRead returns -1. If any argument's value is null, FileRead returns null. If the file length is greater than 32,765 bytes, FileRead returns 32,765. Usage FileRead can read files with ANSI, UTF-8, UTF-16LE, and UTF-16BE encoding.



If the file is an ANSI or UTF-8 file and is read into a string, FileRead converts the text to Unicode before saving it in the string variable. No conversion is needed for UTF-16 files. For Unicode files, the BOM is not written to the string.



If the file is read into a blob, FileRead saves the contents of the file with no conversion. For Unicode files, the BOM is not written to the blob in text mode, but it is written to the blob in stream mode.



If the file was opened in line mode, FileRead reads a line of the file (that is, until it encounters a CR, LF, or EOF). It stores the contents of the line in the specified variable, skips the line-end characters, and positions the file pointer at the beginning of the next line. If the second argument is a blob, FileRead returns -1.



If the file was opened in text mode, FileRead returns -1. Use FileReadEx to read a file in text mode.



If the file was opened in stream mode, FileRead reads to the end of the file or the next 32,765 bytes, whichever is shorter. FileRead begins reading at the file pointer, which is positioned at the beginning of the file when the file is opened for reading. If the file is longer than 32,765 bytes, FileRead automatically positions the pointer after each read operation so that it is ready to read the next chunk of data.



FileRead can read a maximum of 32,765 bytes at a time. Therefore, before calling the FileRead function, call the FileLength64 function to check the file length. If your system has file sharing or security restrictions, you might need to call FileLength64 before you call FileOpen. Use FileReadEx to read longer files.



An end-of-file mark is a null character (ASCII value 0). Therefore, if the file being read contains null characters, FileRead stops reading at the first null character, interpreting it as the end of the file. For Unicode files and files that you convert to Unicode, you must make sure that the file length value is an even number. Otherwise FileRead cannot parse the entire file.
