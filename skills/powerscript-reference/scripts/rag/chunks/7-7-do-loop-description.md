# 7.7 DO...LOOP Description

A control structure that is a general-purpose iteration statement used to execute a block of statements while or until a condition is true.



DO... LOOP has four formats:



- • DO WHILE



Executes a block of statements while the specified condition is true. The loop ends when the condition becomes false. If the condition is false on the first evaluation, the statement block does not execute.



- • LOOP UNTIL



Executes a block of statements at least once and continues until the specified condition is true.



- • LOOP WHILE




Executes a block of statements at least once and continues while the specified condition is true. The loop ends when the condition becomes false.



In all four formats of the DO...LOOP control structure, DO marks the beginning of the statement block that you want to repeat. The LOOP statement marks the end.



You can nest DO...LOOP control structures. Syntax



DO UNTIL condition



statementblock LOOP DO WHILE condition



statementblock LOOP DO



statementblock



LOOP UNTIL condition DO



statementblock LOOP WHILE condition



- Table 7.8:




|Parameter|Description|
|---|---|
|condition|The condition you are testing|
|statementblock|The block of statements you want to repeat|
