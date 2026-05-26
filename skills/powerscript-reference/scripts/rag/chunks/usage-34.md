# Usage

The Extract method determines the archive format according to the file extension; therefore, if the file extension has been changed manually (for example, from .rar to .zip), the Extract method will fail to extract the file and will return the error code -10.



Returns the following value. If any argument's value is null, the method returns null. 1 -- Success



- -1 -- A general error occurred.
- -2 -- The password entered is illegal.
- -3 -- The operation is not supported for the source file format.
- -4 -- The task thread is aborted.
- -5 -- A task thread is currently running.
- -6 -- No password is entered. You must enter the password.
- -7 -- The password is incorrect.
- -8 -- Failed to get new memory when saving the decompressed file.
- -9 -- Failed to read the compressed file.
- -10 -- Unrecognized format or the encrypted file name option is used when compressing the document.
- -11 -- Access denied when extracting the archive.
- -12 -- The compressed file does not exist.
- -13 -- The directory where the decompressed file will be saved does not exist.
- -14 -- Failed to extract the compressed file.


- Example 1 This example demonstrates how to extract a file.



ExtractorObject lnv_extractor Integer li_return string ls_source, ls_target ls_source = "D:\testcom.7Z" ls_target = "D:\testextract" lnv_extractor =Create ExtractorObject li_return = lnv_extractor.extract(ls_source,ls_target)



- Example 2 This example demonstrates how to extract a data stream.




CompressorObject lnv_compress ExtractorObject lnv_extractor Integer li_return blob lb_source,lb_target, lb_extract



lb_source = blob("A123456") lnv_compress = create CompressorObject lnv_extractor = create ExtractorObject li_return = lnv_compress.Compress(lb_source,lb_target, ArchiveFormat7Zip!) if li_return = 1 then



li_return = lnv_extractor.extract(lb_target,lb_extract,ArchiveFormat7Zip!) end if
