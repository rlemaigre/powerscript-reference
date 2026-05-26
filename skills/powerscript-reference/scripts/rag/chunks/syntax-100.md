# Syntax

PrintDefineFont ( printjobnumber, fontnumber, facename, height, weight, fontpitch, fontfamily, italic, underline )



- Table 10.604:




|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job.|
|fontnumber|The number (1 to 8) you want to assign to the font.|
|facename|A string whose value is the name of a typeface supported by your printer (for example, Courier 10Cpi).|
|height|An integer whose value is the height of the type in thousandths of an inch (for example, 250 for 18-point 10Cpi) or a negative number representing the point size (for example, -18 for 18-point). Specifying the point size is more exact; the height in thousandths of an inch only approximates the point size.|
|weight|The stroke weight of the type. Normal weight is 400 and bold is 700.|
|fontpitch|A value of the FontPitch enumerated datatype indicating the pitch of the font:<br><br>Default! Fixed! Variable!|
|fontfamily|A value of the FontFamily enumerated datatype indicating the family of the font:<br><br>AnyFont! Decorative! Modern! Roman! Script! Swiss!|
|italic|A boolean value indicating whether the font is italic. The default is false (not italic).|
|underline|A boolean value indicating whether the font is underlined. The default is false (not underlined).|
