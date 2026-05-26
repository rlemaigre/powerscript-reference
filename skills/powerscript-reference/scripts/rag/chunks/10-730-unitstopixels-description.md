# 10.730 UnitsToPixels Description

Converts PowerBuilder units to pixels and reports the measurement. Because pixels are not usually square, you also specify whether to convert in the horizontal or vertical direction.



Syntax



UnitsToPixels ( units, type )



- Table 10.903:




|Argument|Description|
|---|---|
|units|An integer whose value is the number of PowerBuilder units you want to convert to pixels|
|type|A value of the ConvertType enumerated datatype indicating how to convert the value:<br><br>• XUnitsToPixels! -- Convert the units in the horizontal direction<br>• YUnitsToPixels! -- Convert the units in the vertical direction<br>|



Return value Integer. Returns the converted value if it succeeds and -1 if an error occurs. If any argument's value is null, UnitsToPixels returns null. Examples



These statements convert 350 vertical PowerBuilder units to vertical pixels and set value equal to the converted value:



integer Value Value = UnitsToPixels(350, YUnitsToPixels!)



See also PixelsToUnits
