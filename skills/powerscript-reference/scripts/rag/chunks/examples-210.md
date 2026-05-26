# Examples

The following statement displays an instance of a user object u_data of type u_benefit_plan at location 20,100 in the container object w_hresource. The parameter "Benefits" is stored in message.StringParm:



DragObject u_data w_hresource.OpenUserObjectWithParm(u_data, &



"Benefits", "u_benefit_plan", 20, 100)



These statements open a user object of the type specified in the string s_u_name and store the reference to the object in the variable u_to_open. The script gets the value of s_u_name, the type of user object to open, from the database. The parameter is the text of the SingleLineEdit sle_loc, so it is stored in Message.StringParm. The target object is at the default coordinates 0,0 in the objectname object w_info:



DragObject u_to_open string s_u_name, e_location



e_location = sle_location.Text SELECT next_userobj INTO : s_u_name FROM routing_table WHERE ... ; w_info.OpenUserObjectWithParm(u_to_open, &



e_location, s_u_name)



The following statements display a user object of the type specified in the string s_u_name and store the reference to the object in the variable u_to_open. The parameter is numeric, so it is stored in message.DoubleParm. The target object is at the coordinates 100,200 in the objectname object w_emp:



userobject u_to_open integer age = 60 string s_u_name



s_u_name = sle_user.Text w_emp.OpenUserObjectWithParm(u_to_open, age, &



s_u_name, 100, 200)



See also CloseWithReturn OpenUserObject OpenWithParm
