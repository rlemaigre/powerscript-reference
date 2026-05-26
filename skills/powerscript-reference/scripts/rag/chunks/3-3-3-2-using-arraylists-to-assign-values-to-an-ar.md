# 3.3.3.2 Using arraylists to assign values to an array General information

In PowerBuilder, an arraylist is a list of values enclosed in braces used to initialize arrays. An arraylist represents a one-dimensional array, and its values are assigned to the target array using the rules for assigning arrays described in Assigning one array to another.



Examples In this declaration, a variable-size array is initialized with four values:



integer a[ ] = {1,2,3,4}



In this declaration, a fixed-size array is initialized with four values (the rest of its values are zeros):



integer a[10] = {1,2,3,4}



In this declaration, a fixed-size array is initialized with four values. Because the array's size is set at 4, the rest of the values in the arraylist are ignored:



integer a[4] = {1,2,3,4,5,6,7,8}



In this declaration, values 1, 2, and 3 are assigned to the first column and the rest to the second column:



- integer a[3,2] = {1,2,3,4,5,6}



Table 3.9:



|1|4|
|---|---|
|2|5|
|3|6|



If you think of a three-dimensional array as having pages of rows and columns, then the first column of the first page has the values 1 and 2, the second column on the first page has 3 and



- 4, and the first column on the second page has 5 and 6. The second column on the second page has zeros: integer a[2,2,2] = {1,2,3,4,5,6}




Table 3.10:



|1|3| |5|0|
|---|---|---|---|---|
|2|4| |6|0|
