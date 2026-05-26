# About color values

The value of a component of a color is an integer between 0 and 255 that represents the amount of the color that is required to create the color you want. The lower the value, the darker the color; the higher the value, the lighter the color.



To determine the values for the components of a color (known as the RGB values), use the Edit Color Entry window. To access the Edit Color Entry window, select



a color in the color bar at the bottom of the workspace and then double-click the selected color when it displays in the first box of the color bar.



The following table lists red, green, and blue values for the 16 standard colors.



- Table 10.664: Red, green, and blue color values for use with RGB




|Color|Red value|Green value|Blue value|
|---|---|---|---|
|Black|0|0|0|
|White|255|255|255|
|Light Gray|192|192|192|
|Dark Gray|128|128|128|
|Red|255|0|0|
|Dark Red|128|0|0|
|Green|0|255|0|
|Dark Green|0|128|0|
|Blue|0|0|255|
|Dark Blue|0|0|128|
|Magenta|255|0|255|
|Dark Magenta|128|0|128|
|Cyan|0|255|255|
|Dark Cyan|0|128|128|
|Yellow|255|255|0|
|Brown|128|128|0|



Examples This statement returns a long that represents black:



RGB(0, 0, 0)



This statement returns a long that represents white:



RGB(255, 255, 255)



These statements set the color properties of the StaticText st_title to be green letters on a dark magenta background:



st_title.TextColor = RGB(0, 255, 0) st_title.BackColor = RGB(128, 0, 128)



See also RGB method for DataWindows in Section 2.4.103, “RGB” in DataWindow Reference.



- 10.539 Right Description Obtains a specified number of characters from the end of a string.
