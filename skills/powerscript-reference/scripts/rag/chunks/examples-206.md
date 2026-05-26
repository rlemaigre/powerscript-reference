# Examples

The following example opens a user object as the last tab page in the Tab control tab_1. The user object is of the type specified in the string s_u_name and stores the reference to the user object in the variable u_to_open:



UserObject u_to_open string s_u_name



s_u_name = sle_user.Text tab_1.OpenTab(u_to_open, s_u_name, 0)



See also OpenTabWithParm
