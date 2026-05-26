# Examples

- Example 1



This single-line IF...THEN statement opens window w_first if Num is equal to 1; otherwise, w_rest is opened:



IF Num = 1 THEN Open(w_first) ELSE Open(w_rest)



- Example 2



This single-line IF...THEN statement displays a message if the value in the SingleLineEdit sle_State is "TX". It uses the continuation character to continue the single-line statement across two physical lines in the script:



IF sle_State.text="TX" THEN & MessageBox("Hello","Tex")



- Example 3



This multiline IF...THEN compares the horizontal positions of windows w_first and w_second. If w_first is to the right of w_second, w_first is moved to the left side of the screen:



IF w_first.X > w_second.X THEN



w_first.X = 0 END IF



- Example 4 This multiline IF...THEN causes the application to:


- • Beep twice if X equals Y
- • Display the Parts list box and highlight item 5 if X equals Z
- • Display the Choose list box if X is blank
- • Hide the Empty button and display the Full button if none of the above conditions is true




IF X=Y THEN Beep(2) ELSEIF X=Z THEN



Show (lb_parts); lb_parts.SetState(5,TRUE) ELSEIF X=" " THEN



Show (lb_choose)



ELSE Hide(cb_empty) Show(cb_full)



END IF



- 7.13 RETURN Description Stops the execution of a script or function immediately. Syntax RETURN { expression }


- Table 7.13:



|Parameter|Description|
|---|---|
|expression|In a function, any value (or expression) you want the function to return. The return value must be the datatype specified as the return type in the function.|



Usage



When a user's action triggers an event and PowerBuilder encounters RETURN in the event script, it terminates execution of that script immediately and waits for the next user action.



When a script calls a function or event and PowerBuilder encounters RETURN in the code, RETURN transfers (returns) control to the point at which the function or event was called.



Examples



- Example 1 This script causes the system to beep once; the second beep statement will not execute:



Beep(1) RETURN Beep(1) // This statement will not execute.



- Example 2




These statements in a user-defined function return the result of dividing Arg1 by Arg2 if Arg2 is not equal to zero; they return -1 if Arg2 is equal to zero:



IF Arg2 <> 0 THEN



RETURN Arg1/Arg2 ELSE



RETURN -1 END IF



- 7.14 THROW Description Used to manually trigger exception handling for user-defined exceptions. Syntax THROW exlvalue


- Table 7.14:




|Parameter|Description|
|---|---|
|exlvalue|Variable (or expression that evaluates to a valid instance of an object) of type Throwable. Usually the object type thrown is a user-defined exception class derived from the system Exception class that inherits from Throwable.|
