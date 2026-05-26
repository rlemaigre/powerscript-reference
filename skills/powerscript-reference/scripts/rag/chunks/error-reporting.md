# Error reporting

Not all DBMSs return a conversion error when the datatype of a column does not match the datatype of the associated variable.



The following statement uses the indicator variable IndVar2 to see if Address contains a null value:



if IndVar2 = -1 then...



You can also use the PowerScript IsNull function to accomplish the same result without using indicator variables:



if IsNull( Address ) then ...



This statement uses the indicator variable IndVar3 to set City to null:



IndVar3 = -1



You can also use the PowerScript SetNull function to accomplish the same result without using indicator variables:



SetNull( City )
