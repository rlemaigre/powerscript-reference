# Usage

The format of the file can be indicated by specifying the optional importtype parameter, or by including the appropriate file extension.



For graph controls, ImportFile only uses three columns and ignores other columns. Each row of data must contain three pieces of information. The information depends on the type of graph:



- • For all graph types except scatter, the first column to be imported is the series name, the second column contains the category, and the third column contains the data.
- • For scatter graphs, the first column to be imported is the series name, the second column is the data's x value, and the third column is the y value.




You can add data to more than one series by specifying different series names in the first column. To let users select the file to import, specify a null string for filename. PowerBuilder displays the Select Import File dialog box.



Double quotes



The location and number of double quote marks in a field in a tab delimited file affect how they are handled when the file is imported. If a string is enclosed in one pair of double quotes, the quotes are discarded. If it is enclosed in three pairs of double quotes, one pair is retained when the string is imported. If the string is enclosed in two pairs of double quotes, the first pair is considered to enclose a null string, and the rest of the string is discarded.



When there is a double quote at the beginning of a string, any characters after the second double quote are discarded. If there is no second double quote, the tab character delimiting the fields is not recognized as a field separator and all characters up to the next occurrence of a double quote, including a carriage return, are considered to be part of the string. A validation error is generated if the combined strings exceed the length of the first string.



Double quotes after the first character in the string are rendered literally. Here are some examples of how tab-delimited strings are imported into a two-column DataWindow:



- Table 10.380:




|Text in file|Result|
|---|---|
|"Joe" TAB "Donaldson"|Joe Donaldson|
|Bernice TAB """Ramakrishnan"""|Bernice "Ramakrishnan"|
|""Mary"" TAB ""Li""|Empty cells|
|"Mich"ael TAB """Lopes"""|Mich "Lopes"|
|"Amy TAB Doherty"|Amy<TAB>Doherty in first cell, second cell empty|
|3""" TAB 4"|3""" 4"|
