# Table 10.99:

|Argument|Description|
|---|---|
|objectname|The name of the CompressorObject object.|
|source|A string whose value is the full directory of the folder or one or more files that will be compressed. If there are more than one source file with the same name, they will be recognized as the same file, although they are from different directories; and in such case the method will return the error code -11.<br><br>Or a blob whose value is the byte data that will be compressed.|
|dest|A string whose value is the target directory as well as the file name where the compressed file or folder will be located.<br><br>Or a blob value specifying the target compressed stream.|
|format (optional)|A value of the enumerated datatype ArchiveFormat specifying the the format of the target file. The supported values are:<br><br>• ArchiveFormatZIP! -- zip file. Supports AES-256 encryption for password. This is the default value.<br>• ArchiveFormat7Zip! -- 7zip file. Supports AES-256 encryption for password.<br>• ArchiveFormatGZip! -- gzip format archive. Supports compressing a single file.<br>• ArchiveFormatTAR! -- tar format archive.<br><br><br>If the extension in "dest" is inconsistent with the format specified in "format", the file or folder will be compressed according to the format specified in "format" and the extension of "dest" will not be revised.|
