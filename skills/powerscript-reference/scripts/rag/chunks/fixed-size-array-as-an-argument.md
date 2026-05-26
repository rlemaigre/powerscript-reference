# Fixed-size array as an argument

For comparison, suppose the uf_convertarray function accepts a fixed-size array of integers of 10 elements instead. If the argument's name is intarray, then for Name enter intarray[10], and for Type enter integer.



The declaration of the variable to be passed looks like this:



integer a[10]



You call the function the same way, without brackets:



uf_convertarray(a)
