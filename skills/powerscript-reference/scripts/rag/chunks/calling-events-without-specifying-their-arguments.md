# Calling events without specifying their arguments

If you use the CALL statement, you can trigger a system event without specifying its arguments. However, CALL is obsolete and you should not use it in new applications except as described in CALL.



Return values Where does the return value go? Most events have a return value. When the event is triggered by the system, the return value is returned to the system. When your script triggers a user-defined or system event, you can capture the return value in an assignment statement:



li_rtn = w_main.EVENT process_info(mydata)



When you post an event, the return value is lost because the calling script is no longer running when the posted script is actually run. The compiler does not allow a posted event in an assignment statement.



Return codes



System events with return values have a default return code of 0, which means, "take no special action and continue processing". Some events have additional codes that you can return to change the processing that happens after the event. For example, a return code might allow you to suppress an error message or prevent a change from taking place.



A RETURN statement is not required in an event script, but for most events it is good practice to include one. For events with return values, if you do not have a RETURN statement, the event returns 0.



Some system events have no return value. For these events, the compiler does not allow a RETURN statement.
