# Examples

This statement draws the bitmap p_Train at the location specified by the X and Y coordinates 100 and 200:



p_Train.Draw(100, 200)



These statements draw the bitmap p_Train in many different locations so it appears to move from left to right across the window:



integer horizontal FOR horizontal = 1 TO 2000 STEP 8



p_Train.Draw(horizontal, 100) NEXT
