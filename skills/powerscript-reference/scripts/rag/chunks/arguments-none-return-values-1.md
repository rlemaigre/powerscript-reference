# Arguments None Return Values

Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage These functions trigger the Open event: Open OpenWithParm OpenSheet OpenSheetWithParm When the Open event occurs, the controls on the window already exist (their Constructor events have occurred). In the Open event script, you can refer to objects in the window and affect their appearance or content. For example, you can disable a button or retrieve data for a DataWindow. Some actions are not appropriate in the Open event, even though all the controls exist. For example, calling the SetRedraw function for a control fails because the window is not yet visible. Closing a window by calling the Close function in any of the window's events or in an event of any control on the window can cause PowerBuilder to crash if the Close function is not the last statement in the event script. You can avoid this issue by calling the Close function in the last statement of the event script, or in a user-defined event that is posted from the event script. For example, the following code in the Open event script for a window called w_1 can cause a crash:



// w_1 Open event script close(this) open(w_2) // causes crash



This code does not cause a crash:



// w_1 ue_postopen event script close(this)



// w_1 Open event script open(w_2) this.Post Event ue_postopen()
