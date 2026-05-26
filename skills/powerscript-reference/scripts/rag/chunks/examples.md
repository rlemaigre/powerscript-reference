# Examples

- Example 1



None of the following statements make the computer beep (the variable nbr is set to null, so each statement evaluates to false):



int Nbr // Set Nbr to NULL. SetNull(Nbr) IF Nbr = 1 THEN Beep(1) IF Nbr <> 1 THEN Beep(1) IF NOT (Nbr = 1) THEN Beep(1)



- Example 2



In this IF...THEN statement, the boolean expression evaluates to false, so the ELSE is executed:



int a SetNull(a) IF a = 1 THEN



MessageBox("Value", "a = 1") ELSE



MessageBox("Value", "a = NULL") END IF



- Example 3




This example is a more useful application of a null boolean expression than Example 2. It displays a message if no control has focus. When no control has focus, GetFocus returns a null object reference, the boolean expression evaluates to false, and the ELSE is executed:



IF GetFocus( ) THEN



. . . // Some processing ELSE



MessageBox("Important", "Specify an option!") END IF
