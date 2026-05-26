# Syntax

controlname.DeleteSeries ( seriesname )



- Table 10.144:




|Argument|Description|
|---|---|
|controlname|The graph in which you want to delete a series|
|seriesname|A string whose value is the name of the series you want to delete from controlname|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, DeleteSeries returns null. Usage



The series in a graph are numbered consecutively, in the order they were added to the graph. When a series is deleted, the remaining series are renumbered.
