# 10.45 BuildModel Description

Builds either a performance analysis or trace tree model based on the trace file you have specified with the SetTraceFileName function. Optional arguments let you monitor the progress of the build or interrupt it.



You must specify the trace file to be modeled using the SetTraceFileName function before calling BuildModel.



Applies to Profiling and TraceTree objects Syntax



instancename.BuildModel ( { progressobject, eventname, triggerpercent } )



- Table 10.54:




|Argument|Description|
|---|---|
|instancename|Instance name of the Profiling or TraceTree object|
|progressobject (op|tional)A PowerObject that represents the number of activities that have been processed|
|eventname (option|al)A string specifying the name of an event you define|
|triggerpercent (opt|ional)A long identifying the number of activities the BuildModel function should process before triggering the eventname event|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FileNotSetError! -- TraceFileName has not been set
- • ModelExistsError! -- A model has already been built
- • EnterpriseOnlyFeature! -- (Obsolete) This function is supported only in the Enterprise edition of PowerBuilder 12.6 and earlier versions.
- • EventNotFoundError! -- The event cannot be found on the passed progressobject, so the model cannot be built
- • EventWrongPrototypeError! -- The event was found but does not have the proper prototype, so the model cannot be built
- • SourcePBLError! -- The source libraries cannot be found, so the model cannot be built
