# Improved error-handling capability in PowerBuilder

The ExternalException event is maintained for backward compatibility. If you do not script this event or change its action argument, information from this event is passed to RuntimeError objects, such as OLERuntimeError. You can handle these errors in a try-catch block.
