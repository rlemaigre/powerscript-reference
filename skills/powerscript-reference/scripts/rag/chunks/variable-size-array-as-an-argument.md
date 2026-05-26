# Variable-size array as an argument

For example, suppose a function named uf_convertarray accepts a variable-size array of integers. If the argument's name is intarray, then for Name enter intarray[ ] and for Type enter integer.



In the script that calls the function, you either declare an array variable or use an instance variable or value that has been passed to you. The declaration of that variable, wherever it is, looks like this:



integer a[]



When you call the function, omit the brackets, because you are passing the whole array. If you specified brackets, you would be passing one value from the array:



uf_convertarray(a)
