# Event ID

- Table 9.43:




|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments None Return Values None Usage



When an application forms or reforms a connection with the MobiLink synchronization server, the MobiLink synchronization server temporarily allocates one connection with the database server for the duration of that synchronization.



Use the ConnectMobiLink event to add custom actions immediately before the remote database connects to the MobiLink synchronization server. At this stage, dbmlsync has generated the upload stream.



The following synchronization object events correspond to events occurring on the synchronization server (in the order displayed): BeginSync, ConnectMobiLink, BeginUpload, EndUpload, BeginDownload, EndDownload, DisconnectMobiLink, and EndSync.



See also BeginDownload BeginSync BeginUpload DisconnectMobiLink
