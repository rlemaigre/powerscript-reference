# 3.4.3 Defining source for external functions

You can use external functions written in any language that supports the standard calling sequence for 32-bit platforms. If you are calling functions on Windows in libraries that you have written yourself, remember that you need to export the functions. Depending on your compiler, you can do this in the function prototype or in a linker definition (.DEF) file. For more information about using external functions, see Section 23.1, “Using external functions” in Application Techniques.
