# 6.4 Static versus dynamic calls Calling functions and events

PowerBuilder calls functions and events in three ways, depending on the type of function or event and the lookup method defined.



- Table 6.2: How PowerBuilder calls functions and events




|Type of function|Compiler typing|Comments|
|---|---|---|
|Global and system functions|Strongly typed. The function must exist when the script is compiled.|These functions must exist and are called directly. They are not polymorphic, and no substitution is ever made at execution time.|
|Object functions with STATIC lookup|Strongly typed. The function must exist when the script is compiled.|The functions are polymorphic. They must exist when you compile, but if another class is instantiated at execution time, its function is called instead.|
|Object functions with DYNAMIC lookup|Weakly typed. The function does not have to exist when the script is compiled.|The functions are polymorphic. The actual function called is determined at execution time.|
