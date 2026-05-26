# Examples

When you run or debug the application in the development environment, the following code is always parsed and you always see the message box. When you run the executable file, the code is parsed only if the DEBUG symbol is enabled on the General page in the Project painter:



#if defined DEBUG then



MessageBox("Debugging","Ctr value is " + string(i)) #end if



For examples of using conditional compilation in .NET targets, see Deploying Components as .NET Assemblies or Web Services (Obsolete).
