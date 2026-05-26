# Examples

This example logs user messages to the trace file identifying when a database retrieval is started and when it is completed:



dw_1.SetTransObject(SQLCA)



TraceUser(100, "Starting database retrieval") IF dw_1.Retrieve() = -1 THEN



TraceError(999, "Retrieve for dw_1 failed") ELSE



TraceUser(200, "Database retrieval complete") END IF



See also TraceEnableActivity TraceError
