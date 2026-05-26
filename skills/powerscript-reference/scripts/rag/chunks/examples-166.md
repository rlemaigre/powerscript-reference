# Examples

This example inserts a PNG file at the insertion point in the RichTextEdit control rte_1. The PNG file will be saved in the RTF file in WMF format:



integer li_rtn li_rtn = rte_1.InsertPicture("c:\windows\earth.png")



This example inserts a JPG file at the insertion point in the RichTextEdit control rte_1. The JPG file will be saved in the RTF file in JPG format:



integer li_rtn li_rtn = rte_1.InsertPicture("c:\windows\earth.jpg", 4)



See also InputFieldInsert



InsertDocument
