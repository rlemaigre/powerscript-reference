# Usage

Oracle Real Application Clusters (RAC) is a cluster database that uses a shared cache architecture. In Oracle 10g Release 2, a High Availability (HA) client connected to an RAC database can register a callback to indicate that it wants the server to notify it in case of a database failure event that affects a connection made by the client. The DBNotification event is triggered when the client is notified that such an event has occurred.



The default transaction object, SQLCA, does not support this event. To use the event, create a new standard class user object that inherits from the Transaction object and add code to the DBNotification event script. You can then use this Transaction object in your application, or substitute it for SQLCA on the Variable Types tab page in the Application Properties dialog box.



To be notified when the server shuts down, your application must be connected to an Oracle 10g RAC database using the O10 database interface and the HANotification database parameter must be set to 1. When the server shuts down, the O10 driver is notified. The DBNotification event is triggered if the application continues to attempt to access the server. The value of the notification argument is set to DBServerDown!, the command string is set to the syntax of the current command, and the dbmessage string is populated with information about the shutdown.



If your application does not execute any SQL statements on the current connection after the server shuts down, the DBNotification event is not triggered until Disconnect is called.



You can code the return value of the DBNotification event to specify whether the application should continue to execute the current command:



- • If the event returns 0, the current command continues executing until failover occurs and completes successfully (if failover is supported), then the application continues. If failover is not supported, the application will receive an error for the current command.
- • If the event returns any other value, the current command execution is stopped immediately and the Transaction object property SQLCode is set to -1, SQLDBCode is set to the return value, SQLErrText is set to the value of the dbmessage string, and failover does not happen. After the event, only Disconnect can be called on the current transaction.




Inside the DBNotification event script, the current connection of the Transaction object is protected and database operations with the connection are not allowed. All database commands will return as failed. However, the application can still access the database with another Transaction object.



If the SvrFailover database parameter is set to Yes, the DBNotification event is triggered with the notification argument set to DBFailover!



The event can be triggered several times during the failover, as when the failover begins and ends. You do not need to be connected to an Oracle RAC database or to set the HANotification database parameter to be notified when a failover occurs.



- 9.22 Deactivate Description Occurs when the window becomes inactive. Event ID



Table 9.54:



|Event ID|Objects|
|---|---|
|pbm_deactivate|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage When a window is closed, a Deactivate event occurs.



See also Activate Show



- 9.23 DeleteAllItems Description Occurs when all the items in the ListView are deleted. Event ID


- Table 9.55:




|Event ID|Objects|
|---|---|
|pbm_lvndeleteallitems|ListView|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



This example uses the DeleteAllItems event to ensure that there is a default item in the ListView control:



This.AddItem("Default item", 1)



See also DeleteItem InsertItem



- 9.24 DeleteItem The DeleteItem event has different arguments for different objects:


- Table 9.56:



|Object|See|
|---|---|
|ListView control|Syntax 1|
|TreeView control|Syntax 2<br><br>|



- 9.24.1 Syntax 1: For ListView controls Description Occurs when an item is deleted. Event ID


- Table 9.57:



|Event ID|Objects|
|---|---|
|pbm_lvndeleteitem|ListView|



Arguments



- Table 9.58:




|Argument|Description|
|---|---|
|index|Integer by value (the index of the deleted item)|
