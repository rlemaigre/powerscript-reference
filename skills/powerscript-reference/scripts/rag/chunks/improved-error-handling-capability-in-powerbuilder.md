# Improved error-handling capability in PowerBuilder

The Error event is maintained for backward compatibility. If you do not script the Error event or change its action argument, information from this event is passed to RuntimeError objects, such as DWRuntimeError or OLERuntimeError. You can handle these errors in a try-catch block.
