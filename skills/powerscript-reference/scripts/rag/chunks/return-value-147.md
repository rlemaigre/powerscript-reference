# Return value

Object enumerated datatype. Returns the type of objectname. If objectname is null, TypeOf returns null.



Usage Use TypeOf to determine the type of a selected or dragged control. Examples If dw_Customer is a DataWindow control, this statement returns DataWindow!:



dw_Customer.Typeof()



This example looks at the first five controls in the w_dept window's Control array property. The loop executes some statements for each control that is a CheckBox:



integer n FOR n = 1 to 5



IF w_dept.Control[n].TypeOf() = CheckBox! THEN



... // Some processing END IF



NEXT



This loop stores in the winobject array the type of each object in the window's Control array property:



object winobjecttype[] long ll_count FOR ll_count = 1 to UpperBound(Control[])



winobjecttype[ll_count] = &



TypeOf(Control[ll_count]) NEXT



If you do not know the type of a control passed via PowerObjectParm in the Message object, the following example assigns the passed object to a graphic object variable, the ancestor of all the control types, and assigns the type to a variable of type object, which is the enumerated datatype that TypeOf returns. The CHOOSE CASE statement can include processing for each control type that you want to handle. This code would be in the Open event for a window that was opened with OpenWithParm:



graphicobject stp_obj object type_obj



stp_obj = Message.PowerObjectParm type_obj = stp_obj.TypeOf()



CHOOSE CASE type_obj CASE DataWindow!



MessageBox("The object"," Is a datawindow") CASE SingleLineEdit!



MessageBox("The object"," Is a sle")



... // Cases for additional object types CASE ELSE



MessageBox("The object"," Is irrelevant!") END CHOOSE



See also ClassName
