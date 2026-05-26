# Event ID

- Table 9.186:




|Event ID|Objects|
|---|---|
|pbm_pipemeter|Pipeline|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage The Start and Repair functions initiate pipeline processing.



In the Pipeline painter, you can specify a Commit factor specifying the number of rows that will be transferred before they are committed to the database. The PipeMeter event occurs for each block of rows as specified by the Commit factor.



For a complete example of using a Pipeline object, see Section 17.2.1, “Building a Pipeline object” in Application Techniques.
