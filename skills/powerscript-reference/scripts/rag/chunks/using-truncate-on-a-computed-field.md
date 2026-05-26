# Using Truncate on a computed field

A real number loaded into a floating point register (used for calculation) is represented as precisely as the binary storage will permit. For example, the real number displayed as 2.07 is actually stored as 2.06999999999999999999999997.



Truncating such a number may not give the expected result. To avoid this problem, you can change the initial real datatype to long, integer, or decimal, or you can append a constant in the truncate argument: Truncate (x + 0.0000001, n )



Examples This statement returns 9.2:



Truncate(9.22, 1)



This statement returns 9.2:



Truncate(9.28, 1)



This statement returns 9:



Truncate(9.9, 0)



This statement returns -9.2:



Truncate(-9.29, 1)



See also Ceiling Init (obsolete) Round Truncate method for DataWindows in Section 2.4.128, “Truncate” in DataWindow Reference.
