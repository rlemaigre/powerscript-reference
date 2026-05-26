# 10.696 Synchronize

Starts synchronization between a remote and consolidated database. The syntax you use depends on whether you include command line parameters with the dbmlsync synchronization call.



- Table 10.868:



|To start synchronization|Use|
|---|---|
|Without including command line parameters|Syntax 1|
|With command line parameters that you include in the synchronization call|Syntax 2<br><br>|



- 10.696.1 Syntax 1: For synchronization without parameters Description Starts synchronization between a remote and consolidated database. Applies to MLSynchronization, MLSync controls Syntax SyncObject.Synchronize ( )


- Table 10.869:




|Argument|Description|
|---|---|
|syncObject|The name of the synchronization object.|



Return value Integer. Returns 1 for success and -1 for failure. Any other return value is an error code from dbmlsync. Examples If all the properties of a synchronization object are initialized, including userids and passwords, it is ready for immediate use. To launch a synchronization requires very little coding, as in the following example for an MLsync object named "nvo_my_mlsync":



nvu_my_mlsync mySync Long rc mySync = CREATE nvo_my_mlsync mySync.Synchronize() destroy mySync



You would typically add the above code to the Clicked event for a menu item or a command button on an application window.



- 10.696.2 Syntax 2: For synchronization with parameters Description




Starts dbmlsync synchronization with command line parameters that are passed from the values of a syncparm structure.



Applies to MLSync controls Syntax



SyncObject.Synchronize (cmdstring )



- Table 10.870:




|Argument|Description|
|---|---|
|syncObject|The name of the synchronization object.|
|cmdstring|A read-only string containing command line arguments for a synchronization call.|



Return value Integer. Returns 1 for success and any other value for failure. Usage The following is an example of a command string for a Synchronize call:



C:\Program Files\SAP\SQL Anywhere 11\Bin32\ dbmlsync.exe



- -c "DSN=salesdb_remote;UID=dba;PWD=sql" -n salesapi
- -u 50 -mp "pw10" -wc salesapi_50_sync
- -o "C:\temp\dbmlsync.log" -v+ -q -k




If the path to the dbmlsync executable (C:\Program Files\SAP\SQL Anywhere 11\Bin32\dbmlsync.exe in the above example) is not part of the command string, the application searches the Windows registry to find it.
