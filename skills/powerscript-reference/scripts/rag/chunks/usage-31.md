# Usage

When names of input fields match names of columns in the DataWindow object, the data in the columns is assigned to the matching input fields.



The document in the RichTextEdit control is associated with one row in the DataWindow. There is an instance of the document for each retrieved row. The text in the RichTextEdit control is repeated, with all its formatting, in every document instance. The content of the input fields changes as the data in each row changes. Except for the contents of the input fields, the contents of each instance is the same -- you cannot make changes to the surrounding text that affect individual instances only.



If the InputFieldNamesVisible property of the RichTextEdit control is true, the fields will show their names instead of the data they contain. Change the property value to false to see the data. The following RichTextEdit functions operate on or report information about an instance of the document:



- Table 10.117:




|LineCount PageCount InsertDocument SaveDocument SelectedPage|SelectedStart SelectedLine SelectText SelectTextAll|
|---|---|



The following RichTextEdit function affects the collection of documents: Print Examples



This example establishes the DataWindow control dw_1 as the data source for the RichTextEdit rte_1:



rte_1.DataSource(dw_1)



This example inserts a document called LETTER.RTF into the RichTextEdit rte_letter (the names of the document's input fields match the columns in a DataWindow object d_emp), creates a DataStore, associates it with d_emp, and retrieves data. Then it inserts the document in rte_letter and sets up the DataStore as the data source for rte_1:



DataStore ds_empinfo ds_empinfo = CREATE DataStore ds_empinfo.DataObject = "d_emp" ds_empinfo.SetTransObject(SQLCA) ds_empinfo.Retrieve()



rte_letter.InsertDocument("LETTER.RTF", TRUE) rte_letter.DataSource(ds_empinfo)



See also InputFieldChangeData InputFieldCurrentName InputFieldDeleteCurrent



InputFieldGetData InputFieldInsert
