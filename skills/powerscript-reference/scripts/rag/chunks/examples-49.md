# Examples

This code in a Pipeline user object's PipeMeter event report the number of rows that have been piped to the destination database:



ist_status.Text = String(This.RowsWritten) &



+ " rows written to the destination database."



See also PipeEnd PipeStart



- 9.82 PipeStart Description Occurs when pipeline processing begins. Event ID


- Table 9.187:




|Event ID|Objects|
|---|---|
|pbm_pipestart|Pipeline|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage You can use the PipeStart event to check the status of pipeline processing. The Start and Repair functions initiate pipeline processing. For a complete example of using a Pipeline object, see Section 17.2.1, “Building a Pipeline object” in Application Techniques. Examples



This code in a Pipeline user object's PipeStart event reports pipeline status in a StaticText control:



ist_status.Text = "Beginning Pipeline Execution ..."



PipeEnd PipeMeter
