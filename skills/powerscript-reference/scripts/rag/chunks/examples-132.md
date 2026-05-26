# Examples

This example catches a system error message and displays that error in a message box. Catching the system error prevents the application from terminating when the arccosine argument, entered by the application user, is not in the required range:



Double ld_num ld_num = Double (sle_1.text) TRY



- sle_2.text = string (acos (ld_num)) CATCH (runtimeerror er)




MessageBox("Runtime Error", er.GetMessage())



END TRY



This example catches and displays a user error message from the Clicked event of a button that calls the user-defined function, wf_acos. The user-defined function catches a runtime error -- preventing the application from terminating -- and then sets the message for a user object, uo_exception, that inherits from the Exception object type:



TRY



wf_acos() CATCH (uo_exception u_ex)



messageBox("Out of Range", u_ex.GetMessage()) END TRY



Code for the wf_acos function is shown in the SetMessage function. See also SetMessage
