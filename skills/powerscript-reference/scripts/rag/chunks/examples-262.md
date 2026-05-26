# Examples

This statement selects text from the first character in the RichTextEdit control to the fourth character on the third line:



- rte_1.SelectText(1,1, 3,4) This statement sets the insertion point at the beginning of line 2:

- rte_1.SelectText(2,1, 0,0)




This example sets the insertion point at the end of line 2 by specifying a large number of characters. The selection highlight extends past the end of the line:



rte_1.SelectText(2,999, 0,0)



This example sets the insertion point at the end of line 2 by finding out how long the line really is. The code moves the insertion point to the beginning of the line, gets the length, and then sets the insertion point at the end:



long ll_length //Make line 2 the current line rte_1.SelectText(2,1, 0,0) // Specify a position after the last character ll_length = rte_1.LineLength() + 1 // Set the insertion point at the end rte_1.SelectText(2,ll_length, 0,0) rte_1.SetFocus()



This example selects the text from the insertion point to the end of the current line. If the current line is the last line, the reported line length is 1 greater than the number of character you can select, so the code adjusts for it:



long ll_insertline, ll_insertchar long ll_line, ll_count // Get the insertion point rte_1.Position(ll_insertline, ll_insertchar) // Get the line number and line length ll_line = rte_1.SelectedLine() ll_count = rte_1.LineLength() // Line length includes the eof file character, // which can't be selected IF ll_line = rte_1.LineCount() THEN ll_count -= 1 // Select from the insertion point to the end of // line rte_1.SelectText(ll_insertline, ll_insertchar, & ll_line, ll_count)



See also SelectedText SelectTextAll SelectTextLine SelectTextWord
