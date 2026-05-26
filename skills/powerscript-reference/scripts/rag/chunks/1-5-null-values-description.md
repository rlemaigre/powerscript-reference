# 1.5 NULL values Description

Null means undefined or unknown. It is not the same as an empty string or zero or a date of 0000-00-00. For example, null is neither 0 nor not 0.



Typically, you work with null values only with respect to database values. Usage Initial values for variables



Although PowerBuilder supports null values for all variable datatypes, it does not initialize variables to null. Instead, when a variable is not set to a specific value when it is declared, PowerBuilder sets it to the default initial value for the datatype -- for example, zero for a numeric value, false for boolean, and the empty string ("") for a string.



Null variables A variable can become null if one of the following occurs:



- • A null value is read into it from the database. If your database supports null, and a SQL INSERT or UPDATE statement sends a null to the database, it is written to the database as null and can be read into a variable by a SELECT or FETCH statement.



Note Null in a variable When a null value is read into a variable, the variable remains null unless it is changed in a script.



- • The SetNull function is used in a script to set the variable explicitly to null. For example:




string city // city is an empty string. SetNull(city) // city is set to NULL.



Nulls in functions and expressions



Most functions that have a null value for any argument return null. Any expression that has a variable with a null value results in null.



A boolean expression that is null is considered undefined and therefore false. Testing for null



To test whether a variable or expression is null, use the IsNull function. You cannot use an equal sign (=) to test for null.



Valid This statement shows the correct way to test for null:



IF IsNull(a) THEN ...



Invalid This statement shows the incorrect way to test for null:



IF a = NULL THEN ...
