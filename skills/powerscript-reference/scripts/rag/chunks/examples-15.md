# Examples

- Example 1 These statements add 10 to A as long as n is >=5 and <=25:



FOR n = 5 to 25



A = A+10 NEXT



- Example 2 These statements add 10 to A and increment n by 5 as long as n is >= 5 and <=25:



FOR N = 5 TO 25 STEP 5



A = A+10 NEXT



- Example 3



These statements contain two lines that will never execute because increment is negative and start is less than end:



FOR Count = 1 TO 100 STEP -1 IF Count < 1 THEN EXIT // These 2 lines Box[Count] = 10 // will never execute.



NEXT



- Example 4 These are nested FOR...NEXT statements:




Int Matrix[100,50,200] FOR i = 1 to 100



FOR j = 1 to 50 FOR k = 1 to 200



Matrix[i,j,k]=1



NEXT NEXT



NEXT



- 7.10 GOTO Description Transfers control from one statement in a script to another statement that is labeled. Syntax GOTO label


- Table 7.10:




|Parameter|Description|
|---|---|
|label|The label associated with the statement to which you want to transfer control. A label is an identifier followed by a colon (such as OK:). Do not use the colon with a label in the GOTO statement.|
