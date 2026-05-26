# Examples

This example gets a date from an EditMask control and sets it as the Today date in a MonthCalendar control:



Date currentdate integer li_return



currentdate = Date(em_1.Text) li_return = mc_1.SetToday(currentdate)



See also GetToday



- 10.652 SetToolbar Description Specifies the alignment, visibility, and title for the specified toolbar. Applies to MDI frame and sheet windows Syntax window.SetToolbar ( toolbarindex, visible {, alignment {, floatingtitle } } )


- Table 10.811:




|Argument|Description|
|---|---|
|window|The MDI frame or sheet to which the toolbar belongs.|
|toolbarindex|An integer whose value is the index of the toolbar whose settings you want to change.|
|visible|A boolean value specifying whether to make the toolbar visible. Values are:<br><br>• TRUE -- Make the toolbar visible<br>• FALSE -- Hide the toolbar<br>|
|alignment (optional)|A value of the ToolbarAlignment enumerated datatype specifying the alignment for the toolbar. Values are:<br><br>• AlignAtTop! -- Dock the toolbar at the top of the frame.<br>• AlignAtLeft! -- Dock the toolbar on the left side of the frame.<br>• AlignAtRight! -- Dock the toolbar on the right side of the frame.<br>• AlignAtBottom! -- Dock the toolbar at the bottom of the frame.<br>• Floating! -- Float the toolbar. The floating toolbar has its own frame and miniature title bar<br>|
|floatingtitle (optional)|A string whose value is the title for the toolbar when its alignment is Floating!.|



Return value Integer.



- Returns 1 if it succeeds. SetToolbar returns -1 if there is no toolbar for the index you specify or if an error occurs. If any argument's value is null, returns null. Usage




When you use SetToolbar to change the toolbar alignment from a docked position to Floating!, PowerBuilder uses the last known position information unless you also call SetToolbarPos to adjust the position.



The toolbars are not redrawn until the script ends, so setting the alignment with SetToolbar and the position with SetToolbarPos looks like a single change to the user.
