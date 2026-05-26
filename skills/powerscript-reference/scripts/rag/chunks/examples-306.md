# Examples

The following script creates an instance of the pipeline user object, assigns a pipeline object to the pipeline user object's DataObject property, and executes the pipeline. I_src and i_dst are transaction objects that have been previously declared and created. Another script has established the database connections.



U_pipe is the user object inherited from the pipeline system object. I_upipe is an instance variable of type u_pipe. P_pipe is a pipeline object created in the Data Pipeline painter:



i_upipe = CREATE u_pipe i_upipe.DataObject = "p_pipe" i_upipe.Start(i_src, i_dst, dw_1)
