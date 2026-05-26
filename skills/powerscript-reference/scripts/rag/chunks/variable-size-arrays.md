# Variable-size arrays

Assigning a value to an element of a variable-size array that is outside its current values increases the array's size. However, accessing a variable-size array above its largest assigned value or below its lower bound causes an error at runtime:



integer li_stock[ ] li_stock[50]=200



// Establish array size 50 elements. IF li_stock[51]=0 then Beep(1)



// This causes an execution error. IF li_stock[0]=0 then Beep(1)



// This causes an execution error.
