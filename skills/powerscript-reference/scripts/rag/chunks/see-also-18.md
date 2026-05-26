# See also

Cancel



- 10.142 Fact Description Determines the factorial of a number. Syntax Fact ( n )

- Table 10.174:



|Argument|Description|
|---|---|
|n|The number for which you want the factorial|



Return value Double. Returns the factorial of n. If n is null, Fact returns null. Examples This statement returns 24 (that is, 1 * 2 * 3 * 4):



Fact(4)



Both these statements return 1:



Fact(1) Fact(0)



See also Fact method for DataWindows in Section 2.4.36, “Fact” in DataWindow Reference.



10.143 FileClose



Description



Closes the file associated with the specified file number. The file number was assigned to the file with the FileOpen function.



Syntax



FileClose ( file# )



- Table 10.175:






|Argument|Description|
|---|---|
|file#|The integer assigned to the file you want to close. The FileOpen function returns the file number when it opens the file.|
