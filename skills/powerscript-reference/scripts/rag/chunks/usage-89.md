# Usage

A new print job begins on a new page and the font is set to the default font for the printer. The print cursor is at the upper left corner of the print area.



If you specify true for the showprintdialog argument, the system Print dialog box displays allowing the user to cancel the print job. The option to specify a page range in the Print dialog box is disabled because PowerBuilder cannot determine the number of pages in the print job in advance. If you specify this argument in a component that runs on a server, the argument is ignored.



Use the job number that PrintOpen returns to identify this print job in all subsequent print functions.



Calling MessageBox after PrintOpen can cause undesirable behavior that is confusing to a user. Calling PrintOpen causes the currently active window in PowerBuilder to be disabled to allow Windows to handle printing. If you display a MessageBox after calling PrintOpen, Windows assigns the active window to be its parent, which is often another application, causing that application to become active.
