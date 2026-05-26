# Examples

This example displays the header and footer editing panels, allowing the user to specify the contents of the footer:



rte_1.ShowHeadFoot(TRUE, FALSE)



The following script inserts the current page number in the footer, then returns the focus to the body of the document in the rich text control:



rte_1.ShowHeadFoot(true,false) rte_1.SetAlignment ( Center! ) rte_1.InputFieldInsert("PAGENO") rte_1.ShowHeadFoot(false,false)



See also Preview
