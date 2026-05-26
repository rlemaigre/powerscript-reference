# Return value

String. Returns the name of the input field. If the insertion point is not in an input field or if an error occurs, it returns the empty string ("").



Examples This example gets the name of the input field containing the insertion point:



string ls_inputname ls_inputname = rte_1.InputFieldCurrentName()



See also InputFieldChangeData InputFieldDeleteCurrent InputFieldGetData InputFieldInsert InputFieldLocate DataSource



- 10.316 InputFieldDeleteCurrent Description Deletes the input field that is selected in a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.InputFieldDeleteCurrent ( )


- Table 10.386:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to delete the input field that is selected|



Return value Integer. Returns 1 if it succeeds and -1 if there is no input field at the insertion point, the input field is activated for editing, or an error occurs. Usage



All the input fields that have the same name contain the same data but they can be deleted independently. If one of a group of input fields with the same name is deleted, the others are not affected. If all the input fields of the same name are deleted, the RichTextEdit control remembers the data from those input fields. It will use that data to initialize a new input field that has the same name as the deleted fields.



The input field must be the only selection. If other text is selected too, InputFieldDeleteCurrent fails. When an input field is the current and only selection, the highlight flashes.



InputFieldDeleteCurrent deletes only the current field. Other fields with the same name within the document are not affected. If the RichTextEdit control uses the DataSource function to share data with a DataWindow, the current field is deleted from all instances of the document.



Examples This example deletes the input field containing the insertion point:



integer li_rtn li_rtn = rte_1.InputFieldDeleteCurrent()



See also InputFieldChangeData InputFieldGetData InputFieldCurrentName InputFieldInsert InputFieldLocate DataSource



- 10.317 InputFieldGetData Description Get the data in the specified input field in a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.InputFieldGetData ( inputfieldname )


- Table 10.387:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to get data from the selected input field|
|inputfieldname|A string whose value is the name of input field from which you want to get the data|



Return value String. The data in the input field. InputFieldGetData returns the empty string ("") if the field does not exist or an error occurs. Examples This example gets the data in the input field empname:



string ls_name ls_name = rte_1.InputFieldGetData(empname)



See also InputFieldChangeData InputFieldCurrentName InputFieldDeleteCurrent InputFieldInsert InputFieldLocate DataSource



- 10.318 InputFieldInsert Description Inserts a named input field at the insertion point in a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.InputFieldInsert ( inputfieldname )


- Table 10.388:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to insert an input field|
|inputfieldname|A string whose value is the name of input field to be inserted. The name does not have to be unique|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If inputfieldname is null, InputFieldInsert returns null. Usage



There can be several input fields with the same name. Fields of a given name all have the same data value. When you call InputFieldChangeData for a named input field, all fields with that name are changed.



Examples If there is a selection, InputFieldInsert replaces the selection with the field.



rte_1.selecttext(1,2,1,5) rte_1.inputfieldinsert("lastname")



See also InputFieldChangeData



InputFieldCurrentName InputFieldDeleteCurrent InputFieldGetData InputFieldLocate DataSource



- 10.319 InputFieldLocate Description Locates an input field in a RichTextEdit control and moves the insertion point there. Applies to RichTextEdit controls Syntax rtename.InputFieldLocate ( location {, inputfieldname } )


- Table 10.389:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to locate an input field.|
|location|A value of the Location enumerated datatype that specifies the occurrence of the input field you want to locate. Values are:<br><br>• First! -- The first occurrence in the document of inputfieldname, or if no name is specified, the first input field in the document<br>• Last! -- The last occurrence in the document of inputfieldname, or if no name is specified, the last input field in the document<br>• Next! -- The occurrence of inputfieldname that is after the insertion point, or if no name is specified, the next input field of any name after the insertion point<br>• Prior! -- The occurrence of inputfieldname before the insertion point, or if no name is specified, the next input field of any name before the insertion point<br>|
|inputfieldname|A string whose value is the name of the input field you want to locate. If there are multiple occurrences of inputfieldname in the control, location specifies the one to be located.|



Return value String. Returns the name of the input field it located if it succeeds. InputFieldLocate returns an empty string if no matching input field is found or if an error occurs. If any argument is null, InputFieldLocate returns null.
