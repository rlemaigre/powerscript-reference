# Changing the WindowState property

Do not change the WindowState property in the Open event of a window opened as a sheet. Doing so might result in duplicate controls on the title bar. You can change the property in other scripts once the window is open.



When a window is opened, other events occur, such as Constructor for each control in the window, Activate and Show for the window, and GetFocus for the first control in the window's tab order.



When a sheet is opened in an MDI frame, other events occur, such as Show and Activate for the sheet and Activate for the frame.
