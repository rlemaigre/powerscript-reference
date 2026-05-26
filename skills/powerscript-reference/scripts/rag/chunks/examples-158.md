# Examples

This example locates the next input field after the insertion point. If found, ls_name is set to the name of the input field:



string ls_name ls_name = rte_1.InputFieldLocate(Next!)



This example locates the last input field in the document:



string ls_name ls_name = rte_1.InputFieldLocate(Last!)



This example locates the last occurrence in the document of the input field named address. If found, ls_name is set to the value "address":



string ls_name ls_name = rte_1.InputFieldLocate(Last!, "address")



See also InputFieldChangeData InputFieldCurrentName InputFieldDeleteCurrent InputFieldGetData InputFieldInsert DataSource
