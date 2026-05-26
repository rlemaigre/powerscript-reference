# Event ID

- Table 9.224:




|Event ID|Objects|
|---|---|
|None|Menu|



Arguments None Return Values None. (Do not use a RETURN statement.) Usage



You can use the Selected event to display MicroHelp for the menu item. One way to store the Help text is in the menu item's Tag property.



Examples This example uses the tag value of the current menu item to display Help text. The function wf_SetMenuHelp takes the text passed (the tag) and assigns it to a MultiLineEdit control. A Timer function and the Timer event are used to clear the Help text. This code in the Selected event calls the function that sets the text:



w_test.wf_SetMenuHelp(This.Tag)



This code for the wf_SetMenuHelp function sets the text in the MultiLineEdit mle_menuhelp; its argument is called menuhelpstring:



mle_menuhelp.Text = menuhelpstring Timer(4)



This code in the Timer event clears the Help text and stops the timer:



w_test.wf_SetMenuHelp("") Timer(0)
