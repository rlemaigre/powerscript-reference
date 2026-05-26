# Unqualified function names

If you do not qualify a function name with an object, PowerBuilder searches for the function and executes the first one it finds that matches the name and arguments. It searches for a match in the following order:



- 1. A global external function.
- 2. A global function.
- 3. An object function and local external function. If the object is a descendant, PowerBuilder searches upward through the ancestor hierarchy to find a match for the function prototype.
- 4. A system function.
