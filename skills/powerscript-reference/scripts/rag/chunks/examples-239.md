# Examples

This example returns execution to the start of the open trace file ltf_file so that the file's contents can be reread:



TraceFile ltf_file string ls_filename



ltf_file = CREATE TraceFile ltf_file.Open(ls_filename)



... ltf_file.Reset(ls_filename)



...



See also Open NextActivity Close



- 10.526 ResetArgElements Description Clears the argument list. Applies to Window ActiveX controls Syntax activexcontrol.ResetArgElements ( )


- Table 10.652:




|Argument|Description|
|---|---|
|activexcontrol|Identifier for the instance of the PowerBuilder window ActiveX control. When used in HTML, this is the NAME attribute of the object element. When used in other environments, this references the control that contains the PowerBuilder window ActiveX.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage



Call this function after calling InvokePBFunction or TriggerPBEvent to clear the argument list.



If you populate the argument list with SetArgElement, you should call this function to clear the argument list after using InvokePBFunction or TriggerPBEvent to call an event or function with arguments.



This JavaScript example calls the ResetArgElements function:



...



retcd = PBRX1.TriggerPBEvent(theEvent, numargs); rc = parseInt(PBRX1.GetLastReturn()); IF (rc != 1) { alert("Error. Empty string."); } PBRX1.ResetArgElements();



...



This VBScript example calls the ResetArgElements function:



...



retcd = PBRX1.TriggerPBEvent(theEvent, numargs) rc = PBRX1.GetLastReturn() IF rc <> 1 THEN msgbox "Error. Empty string." END IF



PBRX1.ResetArgElements()



...



See also GetLastReturn InvokePBFunction SetArgElement TriggerPBEvent



- 10.527 ResetDataColors Description Restores the color of a data point to the default color for its series. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.ResetDataColors ( { graphcontrol, } seriesnumber, datapointnumber )


- Table 10.653:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to reset the color of a data point, or the name of the DataWindow containing the graph|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control in which you want to reset the color|
|seriesnumber|The number of the series in which you want to reset the color of a data point|
|datapointnumber|The number of the data point for which you want to reset the color|
