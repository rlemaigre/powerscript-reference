# Examples

In this example, the first call to BlobMid stores 10 bytes of the blob datablob starting at position 5 in the blob data_1; the second call stores the bytes of datablob from position 5 to the end in data_2:



blob data_1, data_2, datablob



... // Read a blob datatype into datablob.



- data_1 = BlobMid(datablob, 5, 10)


- data_2 = BlobMid(datablob, 5)




This code copies a bitmap in the blob emp_photo starting at position 1, stores the position at which the next copy can begin in nbr, and then copies a date into the blob emp_photo after the bitmap data. Then, using the date's start position, it extracts the date from the blob and displays it in the StaticText st_1:



blob{1000} emp_photo blob temp date pic_date ulong nbr



... // Read BMP file containing employee picture



... // into temp using FileOpen and FileRead. pic_date = Today() nbr = BlobEdit(emp_photo, 1, temp) BlobEdit(emp_photo, nbr, pic_date) st_1.Text = String(Date(BlobMid(emp_photo, nbr)))



See also Blob BlobEdit
