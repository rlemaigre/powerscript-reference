# Usage

When the RichTextEdit shares data with a DataWindow, the RichTextEdit contains multiple instances of the document, one instance for each row.



When the first page of the document for one row is visible, calling ScrollPriorPage goes to the last page for the prior row.



ScrollNextPage and ScrollPriorPage work in the RichTextEdit control edit mode only when the HeaderFooter property of a rich text control is selected. They work in print preview mode regardless of the HeaderFooter property setting and they work for the RichText DataWindow control in edit mode whether or not the DataWindow has header or footer bands.
