# Passing structures by value

You can pass PowerBuilder structures to external C functions if they have the same definitions and alignment as the structure's components. The DLL or shared library must be compiled using byte alignment; no padding is added to align fields within the structure.
