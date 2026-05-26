# Posting a message

Messages sent with Send are executed immediately. To post a message to the end of an object's message queue, use the Post function.



Examples This statement scrolls the window w_emp up one page:



Send(Handle(w_emp), 277, 2, 0)



Both of the following statements click the CommandButton cb_OK:



Send(Handle(Parent), 273, 0, Handle(cb_OK)) cb_OK.TriggerEvent(Clicked!)



You can send messages to maximize or minimize a DataWindow, and return it to normal. To use these messages, enable the TitleBar, Minimize, and Maximize properties of your DataWindow control. Also, you should give your DataWindow control an icon for its minimized state.



This statement minimizes the DataWindow:



Send(Handle(dw_whatever), 274, 61472, 0)



This statement maximizes the DataWindow:



Send(Handle(dw_whatever), 274, 61488, 0)



This statement returns the DataWindow to its normal, defined size:



Send(Handle(dw_whatever), 274, 61728, 0)



You can send a Windows message to determine the last item clicked in a multiselect ListBox. The following script for the SelectionChanged event of a ListBox control gets the return value of the LB_GETCURSEL message which is the item number in the list (where the first item is 0, not 1).



To get PowerBuilder's index for the list item, the example adds 1 to the return value from Send. In this example, idx is an integer instance variable for the window:



// Send the Windows message for LB_GETCURSEL // to the list box idx = Send(Handle(This), 1033, 0, 0) idx = idx + 1



See also Handle Post
