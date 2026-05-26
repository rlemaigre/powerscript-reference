# Avoid overflow

If start or end is too large for the datatype of varname, varname will overflow, which might create an infinite loop. Consider this statement for the integer li_int:



FOR li_int = 1 TO 50000



The end value 50000 is too large for an integer. When li_int is incremented, it overflows to a negative value before reaching 50000, creating an infinite loop.
