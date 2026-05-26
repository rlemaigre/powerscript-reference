# Syntax

FOR varname = start TO end {STEP increment}



statementblock NEXT



- Table 7.9:




|Parameter|Description|
|---|---|
|varname|The name of the iteration counter variable. It can be any numerical type (byte, integer, double, real, long, longlong, or decimal), but integers provide the fastest performance.|
|start|Starting value of varname.|
|end|Ending value of varname.|
|increment (opt|ional)The increment value. Increment must be a constant and the same datatype as varname. If you enter an increment, STEP is required. +1 is the default increment.|
|statementblock|The block of statements you want to repeat.|



Ending statement You can end the FOR loop with the keywords END FOR instead of NEXT.



Usage Using the start and end parameters For a positive increment, end must be greater than start. For a negative increment, end must be less than start. When increment is positive and start is greater than end, statementblock does not execute. When increment is negative and start is less than end, statementblock does not execute. When start and end are expressions, they are reevaluated on each pass through the loop. If the expression's value changes, it affects the number of loops. Consider this example -- the body of the loop changes the number of rows, which changes the result of the RowCount function:



FOR n = 1 TO dw_1.RowCount( ) dw_1.DeleteRow(1) NEXT
