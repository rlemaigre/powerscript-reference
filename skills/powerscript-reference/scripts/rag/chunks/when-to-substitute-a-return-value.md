# When to substitute a return value

The ExceptionSubstituteReturnValue! action allows you to substitute a return value when the last element of an expression causes an error. Do not use it to substitute a return value when an element in the middle of an expression causes an error. The substituted return value does not match the datatype of the unresolved object reference and causes a system error.



The ExceptionSubstituteReturnValue! action can be useful for handling errors in data expressions.



For DataWindows, when an error occurs while evaluating a data or property expression, error processing occurs like this:



- 1. The Error event occurs.
- 2. If the Error event has no script or its action argument is set to ExceptionFail!, any active exception handler for a DWRuntimeError or its RuntimeError ancestor is invoked.
- 3. If no exception handler exists, or if the existing exception handlers do not handle the exception, the SystemError event is triggered.
- 4. If the SystemError event has no script, an application error occurs and the application is terminated.




The error processing in the client component of a distributed application is the same as for DataWindows.



For information about error processing in OLE controls, see the ExternalException event. For information about data and property expressions for DataWindow objects, see Section 5.3, “PowerBuilder: DataWindow property expressions” in DataWindow Reference.



For information about handling communications errors in a multitier application, see Part VI, “Developing Distributed Applications” in Application Techniques.
