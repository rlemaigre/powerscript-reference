# System events

System events can only be last in a cascaded list of calls, because their return value is a long (or they have no return value). They do not return an object that can be used by the next call.



An event you have defined can have a return value whose datatype is an object. You can include such events in a cascaded call.
