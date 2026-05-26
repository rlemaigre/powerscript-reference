# Examples

This statement illustrates how SetDataDDE is used in a script for a RemoteRequest event when another DDE application requests data. The data sent is the text of the SingleLineEdit sle_Address:



SetDataDDE(sle_Address.Text)



This statement illustrates how the optional arguments are specified:



SetDataDDE(sle_Address.Text, "MYDB", & "Employee", "Address")



See also GetDataDDE StartServerDDE



- 10.603 SetDataLabelling Description Set the data label for a DirectX 3D graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.SetDataLabelling ({graphcontrol}, series, datapoint, value)


- Table 10.745:




|Argument|Description|
|---|---|
|controlname|The name of the graph from which you want data, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control.|
|seriesnumber|The number that identifies the series in which you want to label a data point.|
|datapoint|The data point that you want to label.|
|value|Indicates whether to label the data with its value.|
