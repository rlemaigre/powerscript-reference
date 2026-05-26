# Default timeout period

For most situations, you do not need to call SetAutomationTimeout. The default timeout period of five minutes is usually appropriate. Use SetAutomationTimeout to change the default timeout period if you expect a specific OLE request to take longer than five minutes.



If the timeout period is too short, you may get a PowerBuilder application execution error, R0035. In this case, use SetAutomationTimeout to lengthen the timeout period.



If the timeout period expires, runtime error 1037 occurs. You may want to add code to handle this error, which is often the only indication of a hung server. Note that canceling a transaction often causes memory leaks on both the server and the operating system.



The value that you specify with SetAutomationTimeout applies to all OLE transactions in the current session, including calls that relate to other objects.
