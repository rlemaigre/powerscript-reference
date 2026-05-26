# Calling Open twice

If you call Syntax 1 of the Open function twice for the same window, PowerBuilder activates the window twice; it does not open two instances of the window.



To open an array of windows where each window has different datatype, use Syntax 2 of Open.



Parent windows for the opened window Generally, if you are opening a child or a pop-up window and specify parent, the window identified by parent is the parent of the opened window (windowname or windowvar). When a parent window is closed, all its child and pop-up windows are closed too. Not all types of windows can be parent windows. Only a window whose borders are not confined within another window can be a parent. A child window or a window opened as a sheet cannot be a parent. If you specify a confined window as a parent, PowerBuilder checks its parent, and that window's parent, until it finds a window that it can use as a parent. Therefore if you open a pop-up window and specify a sheet as its parent, PowerBuilder makes the MDI frame that contains the sheet its parent. If you do not specify a parent for a child or pop-up window, the active window becomes the parent. Therefore, if one pop-up is active and you open another pop-up, the first pop-up is the parent, not the main window. When the first pop-up is closed, PowerBuilder closes the second pop-up too.



However, in an MDI application, the active sheet is not the active window and cannot be the parent. In Windows, it is clear that the MDI frame, not the active sheet, is the active window -- its title bar is the active color and it displays the menu.
