# Table 8.22:

|Format|When used|
|---|---|
|Format 1|Non-result-set statements with no input parameters|
|Format 2|Non-result-set statements with input parameters|



|Format|When used|
|---|---|
|Format 3|Result-set statements in which the input parameters and result-set columns are known at compile time|
|Format 4|Result-set statements in which the input parameters, the result-set columns or both are unknown at compile time|



- • To handle these situations, you use:
- • The PowerBuilder dynamic SQL statements
- • The dynamic versions of CLOSE, DECLARE, FETCH, OPEN, and EXECUTE
- • The PowerBuilder datatypes DynamicStagingArea and DynamicDescriptionArea
