# Syntax

CommandParm ( )



Return value String. Returns the application's argument string if it succeeds and the empty string ("") if it fails or if there were no arguments. Usage



Command arguments can follow the program name in the command line of a Windows program item or in the Program Manager's Run response window. For example, when the user chooses File>Run in the Program Manager and enters:



MyAppl C:\EMPLOYEE\EMPLIST.TXT



CommandParm retrieves the string C:\EMPLOYEE\EMPLIST.TXT.



If the application's command line includes several arguments, CommandParm returns them all as a single string. You can use string functions, such as Mid and Pos, to parse the string.



You do not need to call CommandParm in the application's Open event. Use the commandline argument instead.
