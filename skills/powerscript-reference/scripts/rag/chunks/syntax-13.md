# Syntax

methodname ( {arguments} ) THROWS ExceptionType { , ExceptionType, ... }



- Table 7.15:




|Parameter|Description|
|---|---|
|methodname|Name of the method that throws an exception.|
|arguments|Arguments of the method that throws an exception. Depending on the method, the method arguments can be optional.|
|ExceptionTyp|Objecte of type Throwable. Usually the object type thrown is a user-defined exception class derived from the system Exception class. If you define multiple potential exceptions for a method, you can throw each type of exception in the same clause by separating the exception types with commas.|



Usage Internal use only. You do not type or otherwise add the THROWS clause to function calls in a PowerBuilder script. However, you can add a THROWS clause to any PowerBuilder function or to any user event that is not defined by a pbm event ID.



For more information about adding a THROWS clause to a function or event prototype, see Section 7.2.6, “Defining a THROWS clause” in Users Guide. For more information about exception handling, see Section 3.9, “Exception handling in PowerBuilder” in Application Techniques.
