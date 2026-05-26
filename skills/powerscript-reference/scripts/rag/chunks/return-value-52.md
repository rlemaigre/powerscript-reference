# Return value

Long. Returns the number of rows that were imported if it succeeds and one of the following negative integers if an error occurs:



- -1 -- No rows or startrow value supplied is greater than the number of rows in the file
- -2 -- Empty file or input data does not match number of columns or required column type
- -3 -- Invalid argument
- -4 -- Invalid input
- -5 -- Could not open the file
- -6 -- Could not close the file
- -7 -- Error reading the text
- -8 -- Unsupported file name suffix (must be *.txt, *.csv, *.dbf or *.xml)
- -10 -- Unsupported dBase file format (not version 2 or 3)
- -11 -- XML Parsing Error; XML parser libraries not found or XML not well formed
- -12 -- XML Template does not exist or does not match the DataWindow
- -15 -- File size exceeds limit




If any argument's value is null, ImportFile returns null. If the optional importtype argument is specified and is not a valid type, ImportFile returns -3.
