# 7.8 EXIT Description

In a DO...LOOP or a FOR...NEXT control structure, passes control out of the current loop. EXIT takes no parameters.



Syntax



EXIT



Usage



An EXIT statement in a DO...LOOP or FOR...NEXT control structure causes control to pass to the statement following the LOOP or NEXT statement. In a nested loop, an EXIT statement passes control out of the current loop structure.



For information on how to jump to the end of the loop and continue looping, see CONTINUE.



Examples



- Example 1 This EXIT statement causes the loop to terminate if an element in the Nbr array equals 0:



int Nbr[10] int Count = 1 // Assume values get assigned to Nbr array... DO WHILE Count < 11



IF Nbr[Count] = 0 THEN EXIT Count = Count + 1



LOOP MessageBox("Hi", "Count is now " + String(Count) )



- Example 2 This EXIT statement causes the loop to terminate if an element in the Nbr array equals 0:




int Nbr[10] int Count // Assume values get assigned to Nbr array... FOR Count = 1 to 10



IF Nbr[Count] = 0 THEN EXIT



NEXT MessageBox("Hi", "Count is now " + String(Count) )
