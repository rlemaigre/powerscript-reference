# Passing several values as a structure

To pass several values, create a user-defined structure to hold the values and access the PowerObjectParm property of the Message object in the opened window. The structure is passed by value, not by reference, so you can access the information even if the original structure has been destroyed.



See also the usage notes for Open, all of which apply to OpenWithParm. Examples



These statements open a window of the type specified in the string s_w_name and store the reference to the window in the variable w_to_open. The script gets the value of s_w_name, the type of window to open, from the database. The parameter in e_location is text, so it is stored in Message.StringParm:



window w_to_open string s_w_name, e_location



e_location = sle_location.Text SELECT next_window INTO :s_w_name FROM routing_table WHERE ... ; OpenWithParm(w_to_open, e_location, s_w_name)



The following statements open a window of the type specified in the string c_w_name, store the reference to the window in the variable wc_to_open, and make w_emp the parent window of wc_to_open. The parameter is numeric, so it is stored in Message.DoubleParm:



window wc_to_open string c_w_name integer age = 60



c_w_name = "w_c_emp1" OpenWithParm(wc_to_open, age, c_w_name, w_emp)



See also CloseWithReturn Open



- 10.445 OutgoingCallList Description Provides a list of the calls to other routines included in a performance analysis model. Applies to ProfileLine and ProfileRoutine objects
