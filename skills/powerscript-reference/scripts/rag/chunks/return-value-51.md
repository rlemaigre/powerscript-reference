# Return value

Returns the number of rows that were imported if it succeeds and one of the following negative integers if an error occurs:



- -1 -- No rows or startrow value supplied is greater than the number of rows in the string
- -2 -- Input data does not match number of columns or required column type
- -3 -- Invalid argument
- -4 -- Invalid input
- -11 -- XML Parsing Error; XML parser libraries not found, or XML not well formed
- -12 -- XML Template does not exist or does not match the DataWindow




If any argument's value is null, ImportClipboard returns null. If the optional importtype argument is specified and is not a valid type, ImportClipboard returns -3.
