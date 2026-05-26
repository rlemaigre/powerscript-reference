# 10.494 PrintSetup Description

Calls the Printer Setup dialog box provided by the system printer driver and lets the user specify settings for the printer.



Syntax



PrintSetup ( )



Return value



Integer. Returns 1 if it succeeds and -1 if an error occurs or if the application user clicks Cancel in the Printer Setup dialog box.



Usage



The user's settings have effect for the duration of the application only. After the application exits, printer settings revert to their previous values.



Examples



These statements call the Printer Setup dialog box for the current system printer and then start a new print job:



long Job // Call the printer setup program. PrintSetup() // Start a job and a new page. Job = PrintOpen()



See also PrintOpen
