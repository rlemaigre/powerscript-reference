# Usage

When PowerBuilder encounters a CONTINUE statement in a DO...LOOP or FOR...NEXT block, control passes to the next LOOP or NEXT statement. The statements between the CONTINUE statement and the loop's end statement are skipped in the current iteration of the loop. In a nested loop, a CONTINUE statement bypasses statements in the current loop structure.



For information on how to break out of the loop, see EXIT. Examples



- Example 1



These statements display a message box twice: when B equals 2 and when B equals 3. As soon as B is greater than 3, the statement following CONTINUE is skipped during each iteration of the loop:



integer A=1, B=1 DO WHILE A < 100



- A = A+1
- B = B+1 IF B > 3




THEN CONTINUE



MessageBox("Hi", "B is " + String(B) ) LOOP



- Example 2 These statements stop incrementing B as soon as Count is greater than 15:




integer A=0, B=0, Count FOR Count = 1 to 100



A = A + 1 IF Count > 15



THEN CONTINUE B = B + 1 NEXT // Upon completion, a=100 and b=15.
