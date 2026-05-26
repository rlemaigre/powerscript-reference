# Examples

These statements parse an XML string. If a DTD is included or referenced, the string is validated. Otherwise the parser checks for well-formedness:



// string argument as_xmlstring passed in long ll_ret



ll_ret = XMLParseString(as_xmlstring)



These statements parse an XML string, validate against a given XML schema, and save any errors that occur in a string variable. If errors occur, no message boxes display. If no schema is included or referenced in the string, XMLParseString returns -1:



long ll_ret string ls_xmlstr, ls_err



ll_ret = XMLParseString(ls_xmlstr, ValAlways!, ls_err, TRUE, TRUE)



These statements parse an XML string, validate against a given DTD, and save any errors that occur in a string variable. If errors occur, no message boxes display. If no DTD is included or referenced in the string, XMLParseString returns -1. If the string passes validation, it is imported into a DataWindow control:



long ll_ret string ls_xmlstr, ls_err



ll_ret = XMLParseString(ls_xmlstr, ValAlways!, ls_err) if ll_ret = 1 then dw_1.ImportString(ls_xmlstr)



See also ImportString XMLParseFile ImportString method for DataWindows in Section 9.100, “ImportString” in DataWindow Reference.



- 10.745 Year Description Determines the year of a date value. Syntax Year ( date )


- Table 10.918:




|Argument|Description|
|---|---|
|date|The date from which you want the year|



Return value Integer. Returns an integer whose value is a 4-digit year adapted from the year portion of date if it succeeds and 1900 if an error occurs. If date is null, Year returns null.



When you convert a string that has a two-digit year to a date, then PowerBuilder chooses the century, as follows. If the year is between 00 to 49, PowerBuilder assumes 20 as the first two digits; if it is between 50 and 99, PowerBuilder assumes 19.



Usage PowerBuilder handles years from 1000 to 3000 inclusive. If your data includes date before 1950, such as birth dates, always specify a 4-digit year so that Year and other PowerBuilder functions, such as Sort, interpret the date as intended.
