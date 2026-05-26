# 10.298 GetValueToDataWindow Description

Gets the value of the key and inserts it into a DataWindow control, DataStore object, or DataWindowChild object.



If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



This function will fail to import data properly, if the DataWindow is in query mode. Applies to JSONPackage object Syntax



objectname.GetValueToDataWindow (string key, dwcontrol DWControl {, boolean resetflag} {, string error} {, DWBuffer dwbuffer {, long startrow {, long endrow } } } )
