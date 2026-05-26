# Avoiding null object references

When you pass a PowerObject as a parameter, you are passing a reference to the object. The object must exist when you refer to it later or you will get a null object reference, which causes an error. For example, if you pass the name of a control on a window that is being closed, that control will not exist when a script accesses the parameter.



See also the usage notes for OpenTab, all of which apply to OpenTabWithParm. Examples



The following statement opens an instance of a user object u_data of type u_benefit_plan as the last tab page in the Tab control tab_1. The parameter "Benefits" is stored in message.StringParm:



UserObject u_data tab_1.OpenTabWithParm(u_data, &



"Benefits", "u_benefit_plan", 0)



These statements open a user object of the type specified in the string s_u_name and store the reference to the user object in the variable u_to_open. The script gets the value of s_u_name, the type of user object to open, from the database. The parameter is the text of the SingleLineEdit sle_loc, so it is stored in Message.StringParm. The user object becomes the third tab page in the Tab control tab_1:



UserObject u_to_open string s_u_name, e_location



e_location = sle_location.Text SELECT next_userobj INTO : s_u_name FROM routing_table WHERE ... ; tab_1.OpenTabWithParm(u_to_open, &



e_location, s_u_name, 3)



The following statements open a user object of the type specified in the string s_u_name and store the reference to the user object in the variable u_to_open. The parameter is numeric so it is stored in message.DoubleParm. The user object becomes the first tab page in the Tab control tab_1:



UserObject u_to_open integer age = 60 string s_u_name



s_u_name = sle_user.Text tab_1.OpenTabWithParm(u_to_open, age, &



s_u_name, 1)



See also OpenTab
