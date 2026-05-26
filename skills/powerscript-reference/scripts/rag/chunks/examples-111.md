# Examples

This example checks whether the server requires the location of an INI file or an Entrust user profile and displays an appropriate message. If the attrvalues array provides a list of choices, it displays the choices in a message box and prompts the user to enter a selection in a text box:



int idx, numAttrs String sText, sLocation numAttrs = upperbound(attrValues) w_response w_ssl_response



IF attr = 1 THEN MessageBox("Entrust INI file required", &



"Please specify the location of the INI file") ELSEIF attr = 2 THEN



MessageBox("Entrust profile required", & "Please specify the location of the profile")



END IF IF numAttrs <> 0 THEN



sText = "Locations available: " FOR idx = 1 to numAttrs



sText += "~nattrValues[" + string(idx) + "]: " &



+ attrvalues[idx] NEXT



OpenWithParm( w_ssl_response, SText ) ls_rc = Message.StringParm IF ls_rc = "cancel" then



userabortedexception uae uae = create userabortedexception uae.setmessage("User cancelled connection") throw uae



END IF END IF RETURN ls_rc



See also ConnectToServer (obsolete) GetCertificateLabel (obsolete) GetPin (obsolete) TrustVerify (obsolete)



- 10.197 GetCurrentDirectory Description Gets the current directory for your target application. Syntax GetCurrentDirectory ( ) Return value String. Returns the full path name for the current directory. Examples This example puts the current directory name in a SingleLineEdit control: sle_1.text = GetCurrentDirectory( ) See also ChangeDirectory CreateDirectory DirectoryExists RemoveDirectory

- 10.198 GetData Obtains data from a control.


- Table 10.234:




|To obtain|Use|
|---|---|
|The value of a data point in a series in a graph|Syntax 1|
|The unformatted data from an EditMask control|Syntax 2|
|Data from an OLE server|Syntax 3<br><br>|



- 10.198.1 Syntax 1: For data points in graphs Description Gets the value of a data point in a series in a graph. Applies to Graph controls in windows and user objects, and in DataWindow controls Syntax controlname.GetData ( { graphcontrol, } seriesnumber, datapoint {, datatype } )


- Table 10.235:




|Argument|Description|
|---|---|
|controlname|The name of the graph from which you want data, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph from which you want the data when controlname is a DataWindow.|
|seriesnumber|The number identifying the series from which you want data.|
|datapoint|The number of the data point for which you want the value.|
|datatype (scatter graph only)|(Optional) A value of the grDataType enumerated datatype specifying whether you want the x or y value of the data point in a scatter graph. Values are:<br><br>• xValue! -- The x value of the data point<br>• yValue! -- (Default) The y value of the data point<br>|



Return value Double. Returns the value of the data in datapoint if it succeeds and 0 if an error occurs. If any argument's value is null, GetData returns null. Usage



You can use GetData only for graphs whose values axis is numeric. For graphs with other types of values axes, use the GetDataValue function instead.
