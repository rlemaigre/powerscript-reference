# Return value

Returns the number of data points that were imported if it succeeds and one of the following negative integers if an error occurs:



- -1 -- No rows or startrow value supplied is greater than the number of rows in the string
- -2 -- Empty string or input data does not match number of columns or required column type
- -3 -- Invalid argument
- -4 -- Invalid input
- -11 -- XML Parsing Error; XML parser libraries not found or XML not well formed
- -12 -- XML Template does not exist or does not match the DataWindow If any argument's value is null, ImportString returns null. If the optional importtype argument is specified and is not a valid type, ImportString returns -3. Usage




For graph controls, ImportString only uses three columns on each line and ignores other columns. The three columns must contain information that depends on the type of graph:



- • For all graph types except scatter, the first column to be imported is the series name, the second column contains the category, and the third column contains the data.
- • For scatter graphs, the first column to be imported is the series name, the second column is the data's x value, and the third column is the y value.




You can add data to more than one series by specifying different series names in the first column.
