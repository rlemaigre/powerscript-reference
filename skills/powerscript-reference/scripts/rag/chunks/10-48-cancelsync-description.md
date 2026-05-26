# 10.48 CancelSync Description

Cancels the synchronization process and rolls back any changes accumulated during the processing.



Applies to MLSynchronization, MLSync controls Syntax



SyncObject.CancelSync ( )



- Table 10.59:




|Argument|Description|
|---|---|
|syncObject|The name of the synchronization object that started a synchronization process that you want to stop.|



Return value Integer. Returns 1 for success and -1 for failure. Examples



The following code in the Clicked event of the Cancel button on a wizard-generated synchronization progress window cancels the synchronization:



long rc rc = i_uosync.cancelsync() IF rc = 1 THEN



mle_status.text += 'Synchronization Cancelled~r~n' ELSE



mle_status.text += 'Cancel request failed.~r~n' END IF



See also Synchronize
