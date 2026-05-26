# Examples

The following example displays a user object of the type specified in the string s_u_name and stores the reference to the user object in the variable u_to_open. The user object is located at 100,200 in the window w_info:



DragObject u_to_open string s_u_name



s_u_name = sle_user.Text w_info.OpenUserObject(u_to_open, s_u_name, 100, 200)



See also OpenUserObjectWithParm
