# Usage

Use Handle when you need an object handle as an argument to Windows Software Development Kit (SDK) functions or the PowerBuilder Send function.



Use IsValid instead of the Handle function to determine whether a window is open. When you ask for the handle of the application, Handle returns 0 when you are using the PowerBuilder Run command. As far as Windows is concerned, your application does not have a handle when it is run from PowerBuilder. When you build and run an executable version of your application, the Handle function returns a valid handle for the application.



If you ask for the handle of a previous instance of an application by setting the previous flag to true, Handle always returns 0 in current versions of Windows. Use the Windows FindWindow function to determine whether an instance of the application's main window is already open.



Examples This statement returns the handle to the window w_child:



Handle(w_child)



These statements use an external function called FlashWindow to change the title bar of a window to inactive and then return it to active. The external function declaration is:



function boolean flashwindow(uint hnd, boolean inst) & library "user.exe"



The code that flashes the window's title bar is:



integer nLoop // Loop counter long hWnd // Handle to control



// Get the handle to a PowerBuilder window. hWnd = Handle(Parent) // Make the title bar flash 300 times. FOR nLoop = 1 to 300



FlashWindow (hWnd, true) NEXT // Return the window to its original state. FlashWindow (hWnd, FALSE)



For applications, the Handle function does not return a useful value when the previous flag is true. You can use the FindWindow Windows function to determine whether a Windows application is already running. FindWindow returns the handle of a window with a given title.



Declare FindWindow and SetForegroundWindow as global external functions:



PUBLIC FUNCTION unsignedlong FindWindow (long & classname, string windowname) LIBRARY "user32.dll" & ALIAS FOR FindWindowW



PUBLIC FUNCTION int SetForegroundWindow (unsignedlong & hwnd) LIBRARY "user32.dll" ALIAS FOR & SetForegroundWindowW



Then add code like the following to your application's Open event:



unsignedlong hwnd hwnd = FindWindow( 0, "Main Window") if hwnd = 0 then



// no previous instance, so open the main window open( w_main )



else // open the previous instance window and halt SetForegroundWindow( hwnd )



HALT CLOSE end if
