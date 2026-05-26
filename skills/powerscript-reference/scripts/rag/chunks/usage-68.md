# Usage

The ObjectAtPointer function allows you to find out how the user is interacting with the graph. The function returns a value of the grObjectType enumerated datatype identifying the part of the graph. When the user clicks in a series, data point, or category, ObjectAtPointer stores the series and/or data point numbers in designated variables.



When the user clicks a data point (or other data mark, such as line or bar), or on the series labels in the legend, ObjectAtPointer stores the series number in the designated variable.



When the user clicks on a data point or category tickmark label, ObjectAtPointer stores the data point number in the designated variable.



When the user clicks in a series, but not on the actual data point, ObjectAtPointer stores 0 in datapoint and when the user clicks in a category, ObjectAtPointer stores 0 in seriesnumber. When the user clicks other parts of the graph, ObjectAtPointer stores 0 in both variables.
