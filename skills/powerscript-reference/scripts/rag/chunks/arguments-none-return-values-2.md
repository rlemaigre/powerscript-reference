# Arguments None Return Values

Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing See also Timer



- 9.112 Stroke Description Occurs when the user draws a new stroke. Event ID



Table 9.252:



|Event ID|Objects|
|---|---|
|pbm_inkestroke, pbm_inkpstroke|InkEdit, InkPicture|



Arguments None Return Values Boolean. Return true to erase the stroke and false otherwise. Usage



If the InkMode property of an InkEdit control is set to InkDisabled!, or the InkCollectionMode property of an InkPicture control is set to GestureOnly!, the Stroke event is not triggered.



See also Gesture RecognitionResult



- 9.113 SyncPreview Description




Returns generated dbmlsync command arguments immediately prior to launching the synchronization process.
