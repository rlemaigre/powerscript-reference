# 3.3.3.3 Errors that occur when addressing arrays Fixed-size arrays

In PowerBuilder, referring to array elements outside the declared size causes an error at runtime; for example:



int test[10] test[11]=50 // This causes an execution error. test[0]=50 // This causes an execution error.



int trial[5,10] trial [6,2]=75 // This causes an execution error. trial [4,11]=75 // This causes an execution error.
