# Syntax

{ access } datatype variablename { d1, ..., dn } { = { valuelist } }



The following table describes the parameters used to declare array variables.



- Table 3.6: Array variable declaration parameters




|Parameter|Description|
|---|---|
|access (opt|ional)(For instance variables only) Keywords specifying the access for the variable. For information, see Access for instance variables.<br><br>|
|datatype|The datatype of the variable. You can specify a standard datatype, a system object, or a previously defined structure.<br><br>For decimals, you can specify the precision of the data by including an optional value in brackets after datatype (see Syntax of a variable declaration):<br><br>decimal {2} variablename [ ]<br><br>For blobs, fixed-length blobs within an array are not supported. If you specify a size after datatype, it is ignored.|
|variablenam|Thee name of the variable (name must be a valid PowerScript identifier, as described in Identifier names).<br><br>You can define additional arrays with the same datatype by naming additional variable names with brackets and optional value lists, separated by commas.|
|[ { d1, ..., dn } ]|Brackets and (for fixed-size arrays) one or more integer values (d1 through dn, one for each dimension) specifying the sizes of the dimensions.<br><br>For a variable-size array, which is always one-dimensional, specify brackets only.<br><br>For more information on how variable-size arrays change size, see Size of variable-size arrays.<br><br>For a fixed-size array, the number of dimensions is determined by the number of integers you specify and is limited only by the amount of available memory.|



|Parameter|Description|
|---|---|
| |For fixed-size arrays, you can use TO to specify a range of element numbers (instead of a dimension size) for one or more of the dimensions. Specifying TO allows you to change the lower bound of the dimension (upperbound must be greater than lowbound):<br><br>[ d1lowbound TO d1upperbound {, ... , dnlowbound TO dnupperbound } ]|
|{ valuelist|}A(optional)list of initial values for each position of the array. The values are separated by commas and the whole list is enclosed in braces. The number of values cannot be greater than the number of positions in the array. The datatype of the values must match datatype.|



Examples These declarations create variable-size arrays:



integer li_stats[ ] // Array of integers. decimal {2} ld_prices[ ] // Array of decimals with



// 2 places of precision. blob lb_data[ ] // Array of variable-size



// blobs. date ld_birthdays[ ] // Array of dates. string ls_city[ ] // Array of strings.



// Each string can be // any length.



This statement declares a variable-size array of decimal number (the declaration does not specify a precision, so each element in the array takes the precision of the value assigned to it):



dec lc_limit[ ]



Fixed arrays These declarations create fixed-size, one-dimensional arrays:



integer li_TaxCode[3] // Array of 3 integers. string ls_day[7] // Array of 7 strings. blob ib_image[10] // Array of 10



// variable-size blobs.



dec{2} lc_Cost[10] // Array of 10 decimal // numbers. // Each value has 2 digits // following the decimal // point.



decimal lc_price[20] // Array of 20 decimal // numbers. // Each takes the precision // of the value assigned.



Using TO to change array index values These fixed-size arrays use TO to change the range of index values for the array:



real lr_Rate[2 to 5] // Array of 4 real numbers:



// Rate[2] through Rate[5] integer li_Qty[0 to 2] // Array of 3 integers



string ls_Test[-2 to 2] // Array of 5 strings integer li_year[76 to 96] // Array of 21 integers string ls_name[-10 to 15] // Array of 26 strings



Incorrect declarations using TO In an array dimension, the second number must be greater than the first. These declarations are invalid:



integer li_count[10 to 5] // INVALID: 10 is



// greater than 5 integer li_price[-10 to -20] // INVALID: -10



// is greater than -20



Arrays with two or more dimensions This declaration creates a six-element, two-dimensional integer array. The individual elements are li_score[1,1], li_score[1,2], li_score[1,3], li_score[2,1], li_score[2,2], and li_score[2,3]:



integer li_score[2,3]



This declaration specifies that the indexes for the dimensions are 1 to 5 and 10 to 25:



integer li_RunRate[1 to 5, 10 to 25]



This declaration creates a 3-dimensional 45,000-element array:



long ll_days[3, 300, 50]



This declaration changes the subscript range for the second and third dimension:



integer li_staff[100, 0 to 20, -5 to 5]



More declarations of multidimensional arrays:



string ls_plant[3,10] // two-dimensional array // of 30 strings



dec{2} lc_rate[3,4] // two-dimensional array of 12 // decimals with 2 digits // after the decimal point



This declaration creates three decimal arrays:



- decimal{3} lc_first[10],lc_second[15,5],lc_third[ ]


- 3.3.1 Values for array elements General information




PowerBuilder initializes each element of an array to the same default value as its underlying datatype. For example, in a newly declared integer array:



integer li_TaxCode[3]



the elements li_TaxCode[1], li_TaxCode[2], and li_TaxCode[3] are all initialized to zero. For information about default values for basic datatypes, see Initial values for variables. Simple array



In a simple array, you can override the default values by initializing the elements of the array when you declare the array. You specify the values in a comma-separated list of values



enclosed in braces. You do not have to initialize all the elements of the array, but you cannot initialize values in the middle or end without initializing the first elements.
