# 10.252 GetObjectRevisionFromRegistry Description

Assigns synchronization property values saved in the Windows registry to a synchronization object.



Applies to MLSynchronization, MLSync controls Syntax



SyncObject.GetObjectRevisionFromRegistry ( )



- Table 10.309:




|Argument|Description|
|---|---|
|syncObject|The name of the synchronization object|



Return value Integer. Returns the value of ObjectRevision. Returns -1 if the registry key is not found or if the SyncRegistryKey property of the synchronization object is not set. Usage



The registry key is located under the HKEY_CURRENT_USER\SyncRegistryKey \DBSyncType where SyncRegistryKey is the value of the synchronization object's SyncRegistryKey property and DBSyncType is MobiLink.
