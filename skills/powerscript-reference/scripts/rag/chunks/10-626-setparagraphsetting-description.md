# 10.626 SetParagraphSetting Description

Sets the size of the indentation, left margin, or right margin of the paragraph containing the insertion point in a RichTextEdit control.



Applies to RichTextEdit controls Syntax



rtecontrol.SetParagraphSetting ( whichsetting, value )



- Table 10.776:




|Argument|Description|
|---|---|
|rtecontrol|The name of the control for which you want paragraph information.|
|whichsetting|A value of the ParagraphSetting enumerated datatype specifying the setting you want to change. Values are:<br><br>• Indent! -- Returns the indentation of the paragraph<br>• LeftMargin! -- Returns the left margin of the paragraph<br>• RightMargin! -- Returns the right margin of the paragraph<br>|
|value|A long whose value is the width of the margin or indent in units of 1000ths of an inch. For example, a value of 500 specifies a width of half an inch.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument is null, it returns null. Usage



Each paragraph has indentation, left margin, and right margin settings. To set all three for the current paragraph, call SetParagraphSetting three times.



Examples This example sets the indentation setting for the current paragraph to a quarter inch:



ll_indent = rte_1.SetParagraphSetting(Indent!, 250)



This example sets the left margin for the current paragraph to an inch:



rte_1.SetParagraphSetting(LeftMargin!, 1000)



See also GetParagraphSetting



SetAlignment SetSpacing SetTextColor SetTextStyle



- 10.627 SetParm Description Sets the parameters to send to the MobiLink synchronization server. Applies to MLSynchronization, MLSync controls Syntax SyncObject.SetParm (syncparm )


- Table 10.777:




|Argument|Description|
|---|---|
|syncObject|The name of the synchronization object.|
|syncparm|A structure of type SyncParm containing property values that can be set as synchronization parameters.|



Return value Integer. Returns 1 for success and -1 for failure. Examples



The code fragment below creates an instance of an MLSync object and programmatically populates all of the necessary properties -- as well as some optional properties -- using an instance of the system SyncParm structure. Then it calls the Synchronize function to start the database synchronization.



SyncParm Parms MLSync mySync Long rc



mySync = CREATE MLSync mySync.MLServerVersion = 9 // required property mySync.Publication = 'salesapi '// required property mySync.UseLogFile = TRUE // optional mySync.LogFileName = "C:\temp\sync.log "// optional mySync.Datasource = 'salesdb_remote '// required Parms.MLUser = '50 '// required Parms.MLPass = 'xyz123 '// required //The following values are required if they are not //set by the DSN Parms.DBUser = 'dba ' Parms.DBPass = 'sql '



// Apply the property values to the sync object mySync.SetParm(Parms)



// Launch the synchronization process rc = mySync.Synchronize() destroy mySync
