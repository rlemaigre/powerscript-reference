# Examples

These statements insert a series before the series named Income in the graph gr_product_data:



integer SeriesNbr



// Get the number of the series. SeriesNbr = FindSeries("Income")



gr_product_data.InsertSeries("Costs", SeriesNbr)



See also AddData AddSeries FindCategory FindSeries InsertCategory InsertData



- 10.333 Int Description Determines the largest whole number less than or equal to a number. Syntax Int ( n )


- Table 10.415:




|Argument|Description|
|---|---|
|n|The number for which you want the largest whole number that is less than or equal to it|



Return value Integer. Returns the largest whole number less than or equal to n. If n is too small or too large to be represented as an integer, Int returns 0. If n is null, Int returns null. Usage



When the result for Int would be smaller than -32768 or larger than 32767, Int returns 0 because the result cannot be represented as an integer.



Examples These statements return 3.0:



Int(3.2) Int(3.8)



The following statements return -4.0:



Int(-3.2) Int(-3.8)



These statements remove the decimal portion of the variable and store the resulting integer in li_nbr:



integer li_nbr li_nbr = Int(3.2) // li_nbr = 3
