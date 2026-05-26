# Usage

Access modifiers give you more control over which objects have access to a particular object's variables. A typical use is to declare a public variable but only allow the owner object to modify it:



public protectedwrite integer ii_count



You can also group declarations that have the same access by specifying the access-right keyword as a label (see Another format for access-right keywords).



When you look at exported object syntax, you might see the access modifiers SYSTEMREAD and SYSTEMWRITE. Only PowerBuilder can access variables with these modifiers. You cannot refer to variables with these modifiers in your scripts and functions and you cannot use these modifiers in your own definitions.



Examples To declare these variables, select Declare>Instance Variables in the appropriate painter. These declarations use access keywords to control the scripts that have access to the variables:



private integer ii_a, ii_n public integer ii_Subtotal protected integer ii_WinCount



This protected variable can only be changed by scripts of the owner object; descendants of the owner can read it:



protected privatewrite string is_label



These declarations have public access (the default) but can only be changed by scripts in the object itself:



privatewrite real ir_accum, ir_current_data



This declaration defines an integer that only the owner objects can write or read but whose name is reserved at the public level:



public privateread privatewrite integer ii_reserved



Private variable not recognized outside its object Suppose you have defined a window w_emp with a private integer variable ii_int:



private integer ii_int



In a script you declare an instance of the window called w_myemp. If you refer to the private variable ii_int, you get a compiler warning that the variable is not defined (because the variable is private and is not recognized in scripts outside the window itself):



w_emp w_myemp w_myemp.ii_int = 1 // Variable not defined



Public variable with restricted access Suppose you have defined a window w_emp with a public integer variable ii_int with write access restricted to private:



public privatewrite integer ii_int



If you write the same script as above, the compiler warning will say that you cannot write to the variable (the name is recognized because it is public, but write access is not allowed):



w_emp w_myemp w_myemp.ii_int = 1 // Cannot write to variable



- 3.1.3.5 Another format for access-right keywords Description




You can also group declarations of PowerScript variables according to access by specifying the access-right keyword as a label. It appears on its own line, followed by a colon (:).
