# When an error occurs

You can surround a dynamic function call in a try-catch block to prevent the application from terminating when an execution error occurs. Although you can also handle the error in the SystemError event, you should not allow the application to continue once the SystemError event is invoked -- the SystemError event should only clean up and halt the application.



For information on using try-catch blocks, see Section 3.9, “Exception handling in PowerBuilder” in Application Techniques.
