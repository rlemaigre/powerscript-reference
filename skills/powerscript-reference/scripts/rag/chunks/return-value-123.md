# Return value

- Integer. Returns 1 if it is successful and -1 if an error occurs. If any argument's value is null, Run returns null. Usage




You can use Run for any program that you can run from the operating system. If you do not specify parameters, Run opens the application and displays the first application window. If you specify windowstate, the application window is displayed in the specified state.



If you specify parameters, the application determines the meaning of those parameters. A typical use is to identify a data file to be opened when the program is executed. If you are running another PowerBuilder application, that application can call the CommandParm function to retrieve the parameters and process them as it sees fit.



If the file extension is omitted from the file name, PowerBuilder assumes the extension is .EXE. To run a program with another extension (for example, .BAT, .COM, or .PIF), you must specify the extension.



Examples This statement runs the Microsoft Windows Clock accessory application in its normal size:



Run("Clock")



This statement runs the Microsoft Windows Clock accessory application minimized:



Run("Clock", Minimized!)



This statement runs the program WINNER.COM on the C drive in a maximized state. The parameter passed to WINNER.COM opens the file EMPLOYEE.INF:



Run("C:\WINNER.COM EMPLOYEE.INF", Maximized!)



This example runs the DOS batch file MYBATCH.BAT and passes the parameter TEST to the batch file. In the batch file, you include percent substitution characters in the commands to indicate where the parameter is used:



Run("MYBATCH.BAT TEST")



In the batch file the following statement renames FILE1 to TEST:



RENAME c:\PB\FILE1 %1
