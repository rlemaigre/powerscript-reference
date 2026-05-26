# Syntax

TRY trystatements



- CATCH ( ThrowableType1 exIdentifier1 )

- catchstatements1



CATCH ( ThrowableType2 exIdentifier2 )



- catchstatements2






... CATCH ( ThrowableTypeN exIdentifierN )



catchstatementsN FINALLY



cleanupstatements END TRY



- Table 7.16:




|Parameter|Description|
|---|---|
|trystatements|Block of code that might potentially throw an exception.|
|ThrowableType|ObjectN type of exception to be caught. A CATCH block is optional if you include a FINALLY block. You can include multiple CATCH blocks. Every CATCH block in a try-catch block must include a corresponding exception object type and a local variable of that type.|
|exIdentifierN|Local variable of type ThrowableTypeN.|
|catchstatements|CodeN to handle the exception being caught.|
|cleanupstateme|ntsCleanup code. The FINALLY block is optional if you include one or more CATCH block.|
