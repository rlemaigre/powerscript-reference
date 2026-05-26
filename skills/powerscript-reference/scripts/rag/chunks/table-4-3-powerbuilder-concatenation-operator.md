# Table 4.3: PowerBuilder concatenation operator

|Operator|Meaning|Example|
|---|---|---|
|+|Concatenate|"cat " + "dog"|



Examples



- Example 1 These examples concatenate several strings:



string Test Test = "over" + "stock" // Test contains "overstock" string Lname, Fname, FullName FullName = Lname + ', ' + Fname



// FullName contains last name and first name, // separated by a comma and space.



- Example 2 This example shows how a blob can act as an accumulator when reading data from a file:




integer i, fnum, loops blob tot_b, b



. . . FOR i = 1 to loops



bytes_read = FileRead(fnum, b) tot_b = tot_b + b



NEXT



- 4.2 Operator precedence in PowerBuilder expressions Order of precedence




To ensure predictable results, all operators in a PowerBuilder expression are evaluated in a specific order of precedence. When the operators have the same precedence, PowerBuilder evaluates them left to right.



These are the operators in descending order of precedence:
