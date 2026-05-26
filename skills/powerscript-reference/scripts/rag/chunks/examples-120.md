# Examples

This example displays a message box that shows the number of months in the display range and its start and end dates. Because the third argument is set to PartlyDisplayed!, the range returned will be greater than the number of full months displayed. If only one month displays and it neither begins on the first day of the week nor ends on the last day of the week, li_return will be 3:



integer li_return Date startdate, enddate string str1, string str2



li_return = mc_1.GetDisplayRange(startdate, enddate, &



PartlyDisplayed!) str1 = "Range is " + string(li_return) + " months" str2 = "Start date is " + string(startdate) + "~r~n" str2 += "End date is " + string(enddate)



MessageBox(str1, str2)



This example finds out how many complete months are shown in the current display and sets the scroll rate to that number:



integer li_return Date startdate, enddate



li_return = mc_1.GetDisplayRange(startdate, enddate, & EntirelyDisplayed!) mc_1.ScrollRate = li_return



See also GetSelectedRange
