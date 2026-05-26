# Usage

ClassName cannot determine the datatype if variable is an enumerated datatype. In this case, ClassName returns the empty string.



Examples If gd_double is a global double variable, ClassName sets varname to double:



string varname varname = ClassName(gd_double)
