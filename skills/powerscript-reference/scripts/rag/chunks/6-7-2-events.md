# 6.7.2 Events

Most system events return a value. The return value is a long numeric codes have specific meanings for each event. You specify the event's return code with a RETURN statement in the event script.



When the event is triggered by user actions or system messages, the value is returned to the system, not to a script you write.



When you trigger a system or user-defined event, the return value is returned to your script and you can use the value as appropriate. If you post an event, you cannot use its return value.
