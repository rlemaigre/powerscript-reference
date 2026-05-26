# How memory is allocated

Initializing elements of a variable-size array allocates memory for those elements. You specify initial values just as you do for fixed-size arrays, by listing the values in braces. The following statement sets code[1] equal to 11, code[2] equal to 242, and code[3] equal to



27. The array has a size of 3 initially, but the size will change if you assign values to higher positions:



integer li_code[ ]={11,242,27}



For example, these statements declare a variable-size array and assigns values to three array elements:



long ll_price[ ] ll_price[100] = 2000 ll_price[50] = 3000 ll_price[110] = 5000



When these statements first execute, they allocate memory as follows:



- • The statement ll_price[100]=2000 will allocate memory for 100 long numbers ll_price[1] to ll_price[100], then assign 0 (the default for numbers) to ll_price[1] through ll_price[99] and assign 2000 to ll_price[100].
- • The statement ll_price[50]=3000 will not allocate more memory but will assign the value 3000 to the 50th element of the ll_price array.
- • The statement ll_price[110]=5000 will allocate memory for 10 more long numbers named ll_price[101] to ll_price[110] and then assign 0 (the default for numbers) to ll_price[101] through ll_price[109] and assign 5000 to ll_price[110].


- 3.3.3 More about arrays This section provides technical details about:


- • Assigning one array to another

- • Using arraylists to assign values to an array

- • Errors that occur when addressing arrays


- 3.3.3.1 Assigning one array to another General information




When you assign one array to another, PowerBuilder uses the following rules to map the values of one onto the other.



One-dimensional arrays To an unbounded array The target array is the same as the source:



integer a[ ], b[ ]



- a = {1,2,3,4}
- b = a To a bounded array




If the source array is smaller, values from the source array are copied to the target array and extra values are set to zero. In this example, b[5] and b[6] are set to 0:



integer a[ ], b[6] a = {1,2,3,4} b = a



If the source array is larger, values from the source array are copied to the target array until it is full (and extra values from the source array are ignored). In this example, the array b has only the first three elements of a:



integer a[ ], b[3] a = {1,2,3,4} b = a
