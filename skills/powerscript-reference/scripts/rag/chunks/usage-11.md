# Usage

Use DO WHILE or DO UNTIL when you want to execute a block of statements only if a condition is true (for WHILE) or false (for UNTIL). DO WHILE and DO UNTIL test the condition before executing the block of statements.



Use LOOP WHILE or LOOP UNTIL when you want to execute a block of statements at least once. LOOP WHILE and LOOP UNTIL test the condition after the block of statements has been executed.



Examples DO UNTIL The following DO UNTIL repeatedly executes the Beep function until A is greater than 15:



integer A = 1, B = 1 DO UNTIL A > 15



Beep(A) A = (A + 1) * B



LOOP



DO WHILE The following DO WHILE repeatedly executes the Beep function only while A is less than or equal to 15:



integer A = 1, B = 1 DO WHILE A <= 15



Beep(A) A = (A + 1) * B



LOOP



LOOP UNTIL The following LOOP UNTIL executes the Beep function and then continues to execute the function until A is greater than 1:



integer A = 1, B = 1 DO



Beep(A) A = (A + 1) * B



LOOP UNTIL A > 15



LOOP WHILE The following LOOP WHILE repeatedly executes the Beep function while A is less than or equal to 15:



integer A = 1, B = 1



DO



Beep(A) A = (A + 1) * B



LOOP WHILE A <= 15
