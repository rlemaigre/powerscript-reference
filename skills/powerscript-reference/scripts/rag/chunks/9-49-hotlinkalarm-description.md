# 9.49 HotLinkAlarm Description

Occurs after a Dynamic Data Exchange (DDE) server application has sent new (changed) data and the client DDE application has received it.



Event ID



Table 9.127:



|Event ID|Objects|
|---|---|
|pbm_ddedata|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



After establishing a hot link with a DDE server application with the StartHotLink function, actions on the server can trigger the HotLinkAlarm event.



Examples



This script in the HotLinkAlarm event gets information about the DDE server application and the new data:



string ls_data, ls_appl, ls_topic, ls_item GetDataDDEOrigin(ls_appl, ls_topic, ls_item) GetDataDDE(ls_data)
