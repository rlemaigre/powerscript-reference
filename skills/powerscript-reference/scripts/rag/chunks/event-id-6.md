# Event ID

- Table 9.52:



|Event ID|Objects|
|---|---|
|pbm_dbnotification|Transaction|



Arguments



- Table 9.53:




|Argument|Description|
|---|---|
|notification|A value of the DBNotification enumerated datatype. The database interface determines the type of the notification received from the server, triggers the DBNotification event, and passes the notification type in this argument. Values are:<br><br>• DBServerDown! = 1. The server has been shut down. This notification type is used only by the O10 (Oracle 10g) database interface.<br>• DBFailover! = 2. The database client is failing over.<br>• DBDataTruncate! = 3. Data has been truncated.<br><br><br>DBServerDown! is used for Oracle RAC database HA events. DBFailover! and DBDataTruncate! can be used with other databases for failover and data truncation warnings.|
|command|A string that informs users which command was being executed when the notification occurred.|



|Argument|Description|
|---|---|
|dbmessage|A string that describes the reason why the event occurred.|



Return Values Long. Return code choices (specify in a RETURN statement):



- • 0 -- Continue to process the database command. If the event does not exist or does not have a script, the return value is 0 by default.
- • Any other value -- Ignored if the notification argument is DBFailover!. If the value of the notification argument is DBServerDown! or DBDataTruncate!, the current command returns with an error. SQLCA.SQLCode is set to -1 and SQLCA.SQLDBCode is set to the return value.
