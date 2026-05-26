# Usage

The Compress method cannot append files or folders to an existing compressed file; instead it will overwrite the existing compressed file with the subsequent files or folders.



Return value Integer. Returns the following value. If any argument's value is null, the method returns null. 1 -- Success



- -1 -- A general error occurred. If the CompressorObject object is used in asynchronous mode, this function will return the general error.
- -2 -- The password entered is illegal.
- -3 -- The operation is not supported for the source file format.
- -4 -- The task thread is aborted.
- -5 -- A task thread is currently running.
- -6 -- The folder to be compressed does not exist.
- -7 -- The folder to be compressed is empty.
- -8 -- The compression format does not support multi-file compression.
- -9 -- Failed to read file from the folder for compression.
- -10 -- The target path does not exist.
- -11 -- More than one source file has the same file name.
- -12 -- Invalid compressed file name or no compressed file name is specified in the "dest" argument.
- -13 -- Failed to compress.


- Example 1 This example demonstrates how to compress a folder.



CompressorObject lnv_compress Integer li_return string ls_source, ls_target ls_source = "C:\Program Files (x86)\Appeon\Shared\PowerBuilder\theme190" ls_target = "D:\testcom" lnv_compress = create CompressorObject li_return = lnv_compress.Compress(ls_source,ls_target, ArchiveFormat7Zip!)



- Example 2 This example demonstrates how to compress a single file.



CompressorObject lnv_compress Integer li_return string ls_source, ls_target ls_source = "C:\Program Files (x86)\Appeon\Shared\PowerBuilder\egreg.txt" ls_target = "D:\testcom" lnv_compress = create CompressorObject li_return = lnv_compress.Compress(ls_source,ls_target, ArchiveFormat7Zip!)



- Example 3




This example demonstrates how to compress multiple files.



CompressorObject lnv_compress Integer li_return string ls_source[], ls_target ls_source[1] = "C:\Program Files (x86)\Appeon\Shared\PowerBuilder\egreg.txt" ls_source[2] = "C:\Program Files (x86)\Appeon\Shared\PowerBuilder\zlib.dll" ls_target = "D:\testcom" lnv_compress = create CompressorObject li_return = lnv_compress.Compress(ls_source,ls_target, ArchiveFormat7Zip!)



- Example 4 This example demonstrates how to compress the data stream.




CompressorObject lnv_compress Integer li_return blob lb_source,lb_target



lb_source = blob("A123456") lnv_compress = create CompressorObject li_return = lnv_compress.Compress(lb_source,lb_target, ArchiveFormat7Zip!)



See also Cancel
