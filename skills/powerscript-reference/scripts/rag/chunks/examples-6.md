# Examples

- Example 1 This statement declares an initialized one-dimensional array of three variables: real lr_Rate[3]={1.20, 2.40, 4.80}

- Example 2 This statement initializes a two-dimensional array: integer li_units[3,4] = {1,2,3, 1,2,3, 1,2,3, 1,2,3} As a result:

- Li_units[1,1]

- , [1,2], [1,3], and [1,4] are all 1



Li_units[2,1]



- , [2,2], [2,3], and [2,4] are all 2



Li_units[3,1]



- , [3,2], [3,3], and [3,4] are all 3




- Example 3 This statement initializes the first half of a 3-dimensional array:




integer li_units[3,4,2] = & {1,2,3, 1,2,3, 1,2,3, 1,2,3}



As a result:



- Li_units[1,1,1]

- , [1,2,1], [1,3,1], and [1,4,1] are all 1


- Li_units[2,1,1]


- , [2,2,1], [2,3,1], and [2,4,1] are all 2



Li_units[3,1,1]



- , [3,2,1], [3,3,1], and [3,4,1] are all 3 Li_units[1,1,2]


- , [1,2,2], [1,3,2], and [1,4,2] are all 0 Li_units[2,1,2]
- , [2,2,2], [2,3,2], and [2,4,2] are all 0 Li_units[3,1,2]
- , [3,2,2], [3,3,2], and [3,4,2] are all 0


- 3.3.2 Size of variable-size arrays General information




A variable-size array consists of a variable name followed by square brackets but no number. PowerBuilder defines the array elements by use at execution time (subject only to memory constraints). Only one-dimensional arrays can be variable-size arrays.



Because you do not declare the size, you cannot use the TO notation to change the lower bound of the array, so the lower bound of a variable-size array is always 1.
