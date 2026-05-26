# 10.415 MidW (obsolete) Description Obtains a specified number of characters from a specified position in a string. This function is obsolete. It has the same behavior as Mid. Syntax MidW ( string, start {, length } )

- 10.416 Min Description Determines the smaller of two numbers. Syntax Min ( x, y )

- Table 10.505:



|Argument|Description|
|---|---|
|x|The number to which you want to compare y|
|y|The number to which you want to compare x|



Return value



The datatype of x or y, whichever datatype is more precise. If any argument's value is null, Min returns null.



Usage If either of the values being compared is null, Min returns null. Examples This statement returns 4:



Min(4,7)



This statement returns -7:



Min(- 4, - 7)



This statement returns 3.0, a decimal value:



Min(9.2,3.0)



See also Max Min method for DataWindows in Section 2.4.78, “Min” in DataWindow Reference.



10.417 Minute



Description Obtains the number of minutes in the minutes portion of a time value. Syntax



Minute ( time )



- Table 10.506:






|Argument|Description|
|---|---|
|time|The time value from which you want the minutes|
