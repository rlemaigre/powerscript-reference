# 10.359 IsValid Description

Determines whether an object variable is instantiated -- whether its value is a valid object handle. Syntax



IsValid ( objectvariable )



- Table 10.441:




|Argument|Description|
|---|---|
|objectvariable|An object variable or a variable of type Any -- typically a reference to an object that you are testing for validity|



Return value Boolean. Returns true if objectvariable is an instantiated object. Returns false if objectvariable is not an object, or if it is an object that is not instantiated. If objectvariable is null, IsValid returns null. Usage



Use IsValid instead of the Handle function to determine whether a window is open. Examples This statement determines whether the window w_emp is open and if it is not, opens it:



IF IsValid(w_emp) = FALSE THEN Open(w_emp)



This example returns -1 because the IsValid function returns false. Although the objectvariable argument is a valid string, it is not an instantiated object. The IsValid method would return true only if la_value was an instantiated object:



any la_value la_value = "I'm a string" IF NOT IsValid(la_value) THEN return -1
