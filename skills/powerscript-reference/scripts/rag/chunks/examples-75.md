# Examples

This statement returns the text that is selected in the RichTextEdit rte_message and stores it in the string ls_richtext:



string ls_richtext ls_richtext = rte_message.CopyRTF()



This example copies the text in rte_1, saving it in ls_richtext, and pastes it into rte_2. The user clicks the RadioButton rb_true to copy selected text and rb_false to copy all the text. The number of characters pasted is saved in ll_numchars reported in the StaticText st_status:



string ls_richtext boolean lb_selected long ll_numchars



IF rb_true.Checked = TRUE THEN lb_selected = TRUE ELSE



lb_selected = FALSE



END IF ls_richtext = rte_1.CopyRTF(lb_selected) ll_numchars = rte_2.PasteRTF(ls_richtext) st_status.Text = String(ll_numchars)



See also PasteRTF



- 10.86 Cos Description Calculates the cosine of an angle. Syntax Cos ( n )


- Table 10.108:




|Argument|Description|
|---|---|
|n|The angle (in radians) for which you want the cosine|



Return value Double. Returns the cosine of n. If n is null, Cos returns null. Examples This statement returns 1:



Cos(0)



This statement returns .540302:



Cos(1)



This statement returns -1:



Cos(Pi(1))



See also ACos Pi



Sin Tan Cos method for DataWindows in Section 2.4.13, “Cos” in DataWindow Reference.



- 10.87 Cpu Description Reports the amount of CPU time that has elapsed since the application started. Syntax Cpu ( ) Return value Long.



Returns the number of milliseconds of CPU time elapsed since the start of your PowerBuilder application.



Examples



These statements determine the amount of CPU time that elapsed while a group of statements executed:



long ll_start, ll_used // Set the start equal to the current CPU usage. ll_start = Cpu()



... // Executable statements being timed // Set ll_used to the number of CPU seconds // that were used (current CPU time - start). ll_used = Cpu() - ll_start



- 10.88 CreateDirectory Description Creates a directory. Applies to File system Syntax CreateDirectory ( directoryname )


- Table 10.109:




|Argument|Description|
|---|---|
|directoryname|String for the name of the directory you want to create|



Return value Integer.



- Returns 1 if the function succeeds and -1 if an error occurs.
