# Usage

The clipboard data must be formatted in tab-separated or comma-separated columns or in XML. The datatypes and order of the DataWindow object's columns must match the data on the clipboard.



For graphs, ImportClipboard uses only three columns and ignores other columns. Each row of data must contain three pieces of information. The information depends on the type of graph:



- • For all graph types except scatter, the first column to be imported is the series name, the second column contains the category, and the third column contains the data.
- • For scatter graphs, the first column to be imported is the series name, the second column is the data's x value, and the third column is the y value.




If a series or category already exists in the graph, the data is assigned to it. Otherwise, the series and categories are added to the graph.



You can add data to more than one series by specifying different series names in the first column.
