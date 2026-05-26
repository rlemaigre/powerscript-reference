# Functions

The rules for functions are similar to those for events, except functions must exist: if a function is not found, an error always occurs. Although events can exist without a script, if a function is defined it has to have code. Consider the following statements:



- 1. This statement calls a function without looking for a return value: object.DYNAMIC funcname( )

- 2. This statement looks for an integer return value:



int li_int li_int = object.DYNAMIC funcname( )



- 3. This statement looks for an Any return value:




any la_any la_any = object.DYNAMIC funcname( )



The following table uses these statements as examples.



Table 6.5: Dynamic function calling errors



|Condition 1|Condition 2|Result|Example|
|---|---|---|---|
|The function does not exist.|None.|Execution error 65: Dynamic function not found.|All the statements cause error 65.|
|The function is found and executed but is not defined with a return value.|The code is looking for a return value.|Execution error 63: Function/event with no return value used in expression.|Statements 2 and 3 cause error 63.|



Events Consider these statements:



- 1. This statement calls an event without looking for a return value: object.EVENT DYNAMIC eventname( )

- 2. This example looks for an integer return value:



int li_int li_int = object.EVENT DYNAMIC eventname( )



- 3. This example looks for an Any return value:




any la_any la_any = object.EVENT DYNAMIC eventname( )



The following table uses these statements as examples.



- Table 6.6: Dynamic event calling errors




|Condition 1|Condition 2|Result|Example|
|---|---|---|---|
|The event does not exist.|The code is not looking for a return value.|Nothing; the call fails silently.|Statement 1 fails but does not cause an error.|



|Condition 1|Condition 2|Result|Example|
|---|---|---|---|
| |The code is looking for a return value.|A null of the Any datatype is returned.|La_any is set to null in statement 3.|
| | |If the expected datatype is not Any, execution error 19 occurs: Cannot convert Any in Any variable to datatype.|The assignment to li_int causes execution error 19 in statement 2.|
|The event is found but is not implemented (there is no script).|The event has a defined return value.|A null of the defined datatype is returned.|If eventname is defined to return integer, li_int is set to null in statement 2.|
| |The event does not have a defined return value.|A null of the Any datatype is returned.|La_any is set to null in statement 3.|
| | |If the expected datatype is not Any, execution error 19 occurs: Cannot convert Any in Any variable to datatype.|The assignment to li_int causes execution error 19 in statement 2.|
|The event is found and executed but is not defined with a return value.|The code is looking for a return value.|Execution error 63: Function/event with no return value used in expression.|Statements 2 and 3 cause error 63.|
