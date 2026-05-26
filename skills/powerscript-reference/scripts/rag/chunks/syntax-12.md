# Syntax

- Syntax 1 (the single-line format): IF condition THEN action1 {ELSE action2}



Table 7.11:



|Parameter|Description|
|---|---|
|condition|The condition you want to test.|
|action1|The action you want performed if the condition is true. The action must be a single statement on the same line as the rest of the IF statement.|
|action2 (op|tional)The action you want performed if the condition is false. The action must be a single statement on the same line as the rest of the IF statement.|



- Syntax 2 (the multiline format): IF condition1 THEN


- action1



{ ELSEIF condition2 THEN



- action2



. . . } { ELSE



- action3 }




END IF



- Table 7.12:




|Parameter|Description|
|---|---|
|condition1|The first condition you want to test.|
|action1|The action you want performed if condition1 is true. The action can be a statement or multiple statements that are separated by semicolons or placed on separate lines. At least one action is required.|
|condition2|(optional)The condition you want to test if condition1 is false. You can have multiple ELSEIF...THEN statements in an IF...THEN control structure.|
|action2|The action you want performed if condition2 is true. The action can be a statement or multiple statements that are separated by semicolons or placed on separate lines.|
|action3 (op|tional)The action you want performed if none of the preceding conditions is true. The action can be a statement or multiple statements that are separated by semicolons or placed on separate lines.|
