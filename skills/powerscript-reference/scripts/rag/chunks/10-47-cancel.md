# 10.47 Cancel

- 10.47.1 Syntax 1: for Pipeline objects Description Stops the execution of a pipeline object. Applies to Pipeline objects Syntax




pipelineobject.Cancel ( )



- Table 10.57:



|Argument|Description|
|---|---|
|pipelineobject|The name of a pipeline user object that contains the pipeline object to be executed|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage Call this function only when Start or Repair is executing. When you stop a pipeline with Cancel, data is committed as if the pipeline had reached the maximum errors limit. You control how the pipeline behaves when it reaches the limit in the Data Pipeline painter (see the Chapter 16, Working with Data Pipelines in Users Guide). Examples



This statement for a CommandButton's Clicked script allows the user to stop the execution of the pipeline i_pipe:



i_pipe.Cancel()



See also Repair Start



- 10.47.2 Syntax 2: for CompressorObject and ExtractorObject objects Description




Cancels the current compression or extraction operation. Only used for the asynchronous interface.



Applies to CompressorObject and ExtractorObject objects Syntax



objectname.Cancel ( )



- Table 10.58:




|Argument|Description|
|---|---|
|objectname|The name of the CompressorObject or ExtractorObject object.|
