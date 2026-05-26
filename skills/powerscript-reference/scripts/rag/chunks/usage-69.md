# Usage

You must open a window before you can access the properties of the window. If you access the window's properties before you open it, an execution error will occur.



To reference an open window in scripts, use windowvar. The window object specified in windowtype must be the same datatype as windowvar (the datatype includes datatypes inherited from it). The datatype of windowvar is usually window, from which all windows are inherited, but it can be any ancestor of windowtype. If it is not the same type, an execution error will occur. Use this syntax to open an array of windows when each window in the array will have a different datatype. See the last example, in which the window datatypes are stored in one array and are used for the windowtype argument when each window in another array is opened.
