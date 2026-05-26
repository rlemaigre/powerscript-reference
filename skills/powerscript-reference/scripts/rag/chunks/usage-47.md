# Usage

Use GetDynamicString when the value of OutParmType is TypeString! for the value that you want to retrieve from the array.



Examples These statements set LName to the String data in the second output descriptor:



String LName LName = SQLDA.GetDynamicString(2)



For an example of retrieving data from the DynamicDescriptionArea, see GetDynamicDate. See also GetDynamicDate GetDynamicDateTime GetDynamicNumber GetDynamicTime SetDynamicParm Using dynamic SQL
