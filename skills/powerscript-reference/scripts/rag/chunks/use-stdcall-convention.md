# Use _stdcall convention

C and C++ compilers typically support several calling conventions, including _cdecl (the default calling convention for C programs), _stdcall (the standard convention for Windows API calls), _fastcall, and thiscall. PowerBuilder, like many other Windows development



tools, requires external functions to be exported using the WINAPI (_stdcall) format. Attempting to use a different calling convention can cause an application crash.



When you create your own C or C++ DLLs containing functions to be used in PowerBuilder, make sure that they use the standard convention for Windows API calls.



For example, if you are using a DEF file to export function definitions, you can declare the function like this:



LONG WINAPI myFunc() {



... };
