# Examples

- This example displays toolbar 1 near the upper-left corner of the frame. An arbitrary width and height lets PowerBuilder size the toolbar as needed:

- w_frame.SetToolbarPos(1, 10, 10, 400, 1)

- w_frame.SetToolbar(1, TRUE, Floating!)



This example displays toolbar 2 close to the lower-right corner of the frame. GetToolbarPos gets the current width and height of the toolbar so that the toolbar stays the same size:



integer ix, iy, iw, ih w_frame.GetToolbarPos(2, ix, iy, iw, ih) w_frame.SetToolbarPos(2, &



w_frame.WorkspaceWidth()-400, & w_frame.WorkspaceHeight()-400, & iw, ih)



- w_frame.SetToolbar(2, TRUE, Floating!)








This example positions floating toolbar 2 just inside the lower-right corner of the MDI frame. GetToolbarPos gets the current width and height of the toolbar. These values and the height of the MicroHelp are used to calculate the x and y coordinates for the floating toolbar:



integer ix, iy, iw, ih // Find out toolbar size w_frame.GetToolbarPos(2, ix, iy, iw, ih) // Set the position, taking the size into account



- w_frame.SetToolbarPos(2, & w_frame.WorkspaceWidth( ) - iw, &




w_frame.WorkspaceHeight( ) &



- ih - w_frame.MDI_1.MicroHelpHeight, & iw, ih)



// Set the alignment to floating



- w_frame.SetToolbar(2, TRUE, Floating!) See also GetToolbar




SetToolbar SetToolbarPos



- 10.654 SetTop Description Scrolls a list box control so that the specified item is the first visible item. Applies to ListBox and PictureListBox controls Syntax listboxname.SetTop ( index )

- Table 10.815:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox or PictureListBox that you want to scroll|
|index|The number of the item you want to become the first visible item|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetTop returns null. Examples



This statement scrolls item 6 in lb_Actions to the top of the ListBox so that it is the first visible item:



lb_Actions.SetTop(6)



The following statement scrolls the currently selected item in lb_Actions to the top of the list of items:



lb_Actions.SetTop(lb_Actions.SelectedIndex())



See also SetFocus SetState



- 10.655 SetTraceFileName Description




Specifies the name of the trace file PowerBuilder will analyze when the BuildModel function is called.



Applies to Profiling and TraceTree objects Syntax



instancename.SetTraceFileName ( tracefilename )



- Table 10.816:




|Argument|Description|
|---|---|
|instancename|Instance name of the Profiling or TraceTree object|
|tracefilename|A string that identifies the name of the trace file PowerBuilder will analyze|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FileOpenError! -- The file could not be opened
- • FileInvalidFormatError! -- The trace file is not in the correct format
- • ModelExistsError! -- A model has already been built If an error occurs, the name is not set. Usage




Use this function to specify the trace file PowerBuilder should analyze with the BuildModel function. You call the SetTraceFileName function before calling the BuildModel function.
