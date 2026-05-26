# Using indicator variables

PowerBuilder supports indicator variables, which are used to identify null values or conversion errors after a database retrieval. Indicator variables are integers that are specified in the HostVariableList of a FETCH or SELECT statement.



Each indicator variable is separated from the variable it is indicating by a space (but no comma). For example, this statement is a HostVariableList without indicator variables:



:Name, :Address, :City



The same HostVariableList with indicator variables looks like this:



:Name :IndVar1, :Address :IndVar2, :City :IndVar3



Indicator variables have one of these values:



- Table 8.1:




|Page|Meaning|
|---|---|
|0|Valid, non-null value|
|-1|Null value|
|-2|Conversion error|
