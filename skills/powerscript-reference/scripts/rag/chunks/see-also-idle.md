# See also Idle

- 10.706 ToAnsi Description Converts a character string to an ANSI blob. Syntax




ToAnsi ( string )



- Table 10.883:




|Argument|Description|
|---|---|
|string|A character string you want to convert to an ANSI blob|



Return value Blob. Returns an ANSI blob if it succeeds and an empty blob if it fails. Usage



The ToAnsi function converts a Unicode character string to an ANSI blob. ToAnsi has the same result as Blob(string, EncodingANSI!) and will be obsolete in a future version of PowerBuilder.
