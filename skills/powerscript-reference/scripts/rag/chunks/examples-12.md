# Examples

- Example 1 These statements each assign a value to the variable ld_date:



date ld_date ld_date = Today( ) ld_date = 2006-01-01 ld_date = Date("January 1, 2006")



- Example 2 These statements assign the parent of the current control to a window variable:



window lw_current_window lw_current_window = Parent



- Example 3 This statement makes a CheckBox invisible: cbk_on.Visible = FALSE

- Example 4



This statement is not an assignment -- it tests the value of the string in the SingleLineEdit sle_emp:



IF sle_emp.Text = "N" THEN Open(win_1)



- Example 5 These statements concatenate two strings and assign the value to the string Text1:



string Text1 Text1 = sle_emp.Text+".DAT"



- Example 6




These assignments use operator shortcuts:



int i = 4i ++ // i is now 5. i -- // i is 4 again. i += 10 // i is now 14. i /= 2 // i is now 7.



These shortcuts can be used only in pure assignment statements. They cannot be used with other operators in a statement. For example, the following is invalid:



int i, j i = 12 j = i ++ // INVALID



The following is valid, because ++ is used by itself in the assignment:



int i, j i = 12



- i ++
- j = i


- 7.2 CALL Description




Calls an ancestor script from a script for a descendant object. You can call scripts for events in an ancestor of the user object, menu, or window. You can also call scripts for events for controls in an ancestor of the user object or window.



When you use the CALL statement to call an ancestor event script, the AncestorReturnValue variable is generated. For more information on the AncestorReturnValue variable, see About



events. Syntax



CALL ancestorobject {`controlname}::event



- Table 7.3:




|Parameter|Description|
|---|---|
|ancestorobject|An ancestor of the descendant object|
|controlname (optional)|The name of a control in an ancestor window or custom user object|
|event|An event in the ancestor object|



Usage



Using the standard syntax



For most purposes, you should use the standard syntax for calling functions and events. For more information about the standard syntax, see Syntax for calling PowerBuilder functions and events.



The standard syntax allows you to trigger or post an event or function in an ancestor and then pass arguments, but it does not allow you to call a script for a control in the ancestor.



In some circumstances, you can use the pronoun Super when ancestorobject is the descendant object's immediate ancestor. See the discussion of Super pronoun.



If the call is being made to an ancestor event, the arguments passed to the current event are automatically propagated to the ancestor event. If you call a non-ancestor event and pass arguments, you need to use the new syntax, otherwise null will be passed for each argument.
