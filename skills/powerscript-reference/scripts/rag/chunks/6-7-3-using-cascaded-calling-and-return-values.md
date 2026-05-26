# 6.7.3 Using cascaded calling and return values

PowerBuilder dot notation allows you to chain together several object function or event calls. The return value of the function or event becomes the object for the following call.



This syntax shows the relationship between the return values of three cascaded function calls:



func1returnsobject( ).func2returnsobject( ).func3returnsanything( )
