# Multidimensional arrays

PowerBuilder stores multidimensional arrays in column major order, meaning the first subscript is the fastest varying -- [1,1], [2,1], [3,1]).



When you assign one array to another, PowerBuilder linearizes the source array in column major order, making it a one-dimensional array. PowerBuilder then uses the rules for onedimensional arrays (described above) to assign the array to the target.



Not all array assignments are allowed, as described in the following rules. One multidimensional array to another If the dimensions of the two arrays match, the target array becomes an exact copy of the source:



integer a[2,10], b[2,10]



a = b



If both source and target are multidimensional but do not have matching dimensions, the assignment is not allowed and the compiler reports an error:



integer a[2,10], b[4,10]



- a = b // Compiler error One-dimensional array to a multidimensional array



A one-dimensional array can be assigned to a multidimensional array. The values are mapped onto the multidimensional array in column major order:



integer a[ ], b[2,2]



- b = a Multidimensional array to a one-dimensional array



A multidimensional array can also be assigned to a one-dimensional array. The source is linearized in column major order and assigned to the target:



integer a[ ], b[2,2] a = b



Examples



Suppose you declare three arrays (a, b, and c). One (c) is unbounded and one-dimensional; the other two (a and b) are multidimensional with different dimensions:



integer c[ ], a[2,2], b[3,3] = {1,2,3,4,5,6,7,8,9}



Array b is laid out like this:



Table 3.7:



|1 for b[1,1]|4 for b[1,2]|7 for b[1,3]|
|---|---|---|
|2 for b[2,1]|5 for b[2,2]|8 for b[2,3]|
|3 for b[3,1]|6 for b[3,2]|9 for b[3,3]|



This statement causes a compiler error, because a and b have different dimensions:



- a = b // Compiler error This statement explicitly linearizes b into c:



c = b



You can then assign the linearized version of the array to a:



- a = c The values in array a are laid out like this:




- Table 3.8:




|1 for a[1,1]|3 for a[1,2]|
|---|---|
|2 for a[2,1]|4 for a[2,2]|



Initializing a with an arraylist produces the same result:



- integer a[2,2] = {1,2,3,4}




The following section describes arraylists.
