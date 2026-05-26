# 6.6 Passing arguments to functions and events

In PowerBuilder, arguments for built-in or user-defined functions and events can be passed three ways:



- Table 6.7: Passing arguments to functions and events




|Method of passing|Description|
|---|---|
|By value|A copy of the variable is available in the function or event script. Any changes to its value affect the copy only. The original variable in the calling script is not affected.|
|By reference|A pointer to the variable is passed to the function or event script. Changes affect the original variable in the calling script.|
|Read-only|The variable is available in the function or event. Its value is treated as a constant changes to the variable are not allowed and cause a compiler error.<br><br>Read-only provides a performance advantage for some datatypes because it does not create a copy of the data, as with by value. Datatypes for which read-only provides a performance advantage are string, blob, date, time, and DateTime.<br><br>For other datatypes, read-only provides documentation for other developers by indicating something about the purpose of the argument.|
