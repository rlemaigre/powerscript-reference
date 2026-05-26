# Error-proofing your code

Calling functions and events dynamically opens up your application to potential errors. The surest way to avoid these errors is to always make static calls to functions and events. When



that is not possible, your design and testing can ensure that there is always an appropriate function or event with the correct return datatype.



One type of error you can check for and avoid is data conversion errors. The preceding tables illustrated that a function or event can return a null value either as an Any variable or as a variable of the expected datatype when a function or event definition exists but is not implemented. If you always assign return values to Any variables for dynamic calls, you can test for null (which indicates failure) before using the value in code. This example illustrates the technique of checking for null before using the return value.



any la_any integer li_gotvalue la_any = object.DYNAMIC uf_getaninteger( ) IF IsNull(la_any) THEN



... // Error handling ELSE



li_gotvalue = la_any END IF
