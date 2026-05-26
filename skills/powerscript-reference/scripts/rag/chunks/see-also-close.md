# See also Close

- 10.428.8 Syntax 8: For opening trace files Description Opens the specified trace file for reading. Applies to TraceFile object Syntax instancename.Open ( filename )


- Table 10.528:




|Argument|Description|
|---|---|
|instancename|Instancename of the TraceFile object|
|filename|A string identifying the name of the trace file you want to read|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded


- • FileAlreadyOpenError! -- The specified trace file has already been opened
- • FileOpenError! -- The trace file can not be opened for reading
- • FileInvalidFormatError! -- The file does not have the correct format
- • EnterpriseOnlyFeature! -- (Obsolete) This function is supported only in the Enterprise edition of PowerBuilder 12.6 and earlier versions.
- • SourcePBLError! -- The source libraries cannot be found
