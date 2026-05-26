# Examples

A previously defined structure is an instance variable istr_text for the current window. The structure contains the boolean fields: b_isBold, b_isItalic, and b_isUnderlined. This example checks whether the selected text has these styles and stores true or false values in the structure for each style:



istr_text.b_isBold = rte_fancy.GetTextStyle(Bold!) istr_text.b_isItalic = rte_fancy.GetTextStyle(Italic!) istr_text.b_isUnderlined = &



rte_fancy.GetTextStyle(Underlined!)
