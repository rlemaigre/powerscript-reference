# Examples

- Example 1 This statement in a script for a menu places a check mark next to the menu selection: This.Check( )

- Example 2 In this function call, This passes a reference to the object containing the script: ReCalc(This)

- Example 3



If you omit This, "x" in the following statement refers to a local variable x if there is one defined (the script adds 50 to the variable x, not to the X property of the control). It refers to the object's X property if there is no local variable:



x = x + 50



- Example 4




Use This to ensure that you refer to the property. For example, in the following statement in the script for the Clicked event for a CommandButton, clicking the button changes the horizontal position of the button (changes the button's X property):



This.x = This.x + 50



- 1.7.3 Super pronoun Description




When you write a PowerBuilder script for a descendant object or control, you can call scripts written for any ancestor. You can directly name the ancestor in the call, or you can use the reserved word Super to refer to the immediate ancestor.
