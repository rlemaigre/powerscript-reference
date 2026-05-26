# Example 3

This example applies the "Flat Design Blue" theme and both the theme path and the theme name selected in the painter will be ignored.



When the app is run from the IDE, the script reads the theme files from the path relative to the PBT file; when the pap's executable file is run, the script reads the theme files from the path relative to the root of the application installation directory.



ApplyTheme(".\themes\Flat Design Blue") ApplyTheme(".\..\themes\Flat Design Blue") ApplyTheme("themes\Flat Design Blue")



See also GetTheme Specifying the UI theme for the application in Users Guide



- 10.27 Arrange Description Arranges the icons in rows. Applies to ListView controls Syntax listviewname.Arrange ( )

- Table 10.34:



|Argument|Description|
|---|---|
|listviewname|The name of the ListView control in which you want to arrange icons|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage Can only be used with large icon and small icon views. Examples This example arranges the icons in a ListView control:



lv_list.Arrange()



10.28 ArrangeSheets



Description



Arranges the windows contained in an MDI frame. (Windows that are contained in an MDI frame are called sheets.) You can arrange the open sheets and the icons of minimized sheets or just the icons.



Applies to MDI frame windows Syntax



mdiframe.ArrangeSheets ( arrangetype )



- Table 10.35:






|Argument|Description|
|---|---|
|mdiframe|The name of an MDI frame window.|
|arrangetype|A value of the ArrangeTypes enumerated datatype specifying how you want the open sheets arranged in the MDI frame window. Values are:<br><br>• Cascade! -- Cascade the sheets that are not minimized so that each sheet's title bar is visible and arrange icons of minimized sheets in a row at the bottom of the frame.|



|Argument|Description|
|---|---|
| |• Layer! -- Layer the sheets that are not minimized so that each sheet completely covers the one below it and arrange icons of minimized sheets in a row at the bottom of the frame.<br>• Tile! -- Tile the sheets that are not minimized so that they do not overlap and arrange icons of minimized sheets in a row at the bottom of the frame.<br>• TileHorizontal! -- Tile the sheets that are not minimized so that each is beside the other without overlapping and arrange icons of minimized sheets in a row at the bottom of the frame.<br>• Icons! -- Arrange the minimized sheets in a row at the bottom of the frame.<br>|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, ArrangeSheets returns null. Examples



This statement in the script for the Clicked event for an item on a menu tiles the open sheets that are not minimized in the MDI frame window called MDI_User:



MDI_User.ArrangeSheets(Tile!)



This statement in the script for the Clicked event for an item on a menu arranges the icons of the minimized sheets at the bottom of the MDI frame window called MDI_User:



MDI_User.ArrangeSheets(Icons!)



See also GetActiveSheet OpenSheet
