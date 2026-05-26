# Examples

These statements parse an XML document. If a DTD is included or referenced, the document is validated. Otherwise the parser checks for well-formedness. If the document passes validation, it is imported into a DataWindow control:



long ll_ret ll_ret = XMLParseFile("c:\temp\mydoc.xml") if ll_ret = 0 then dw_1.ImportFile("c:\temp\mydoc.xml")



These statements parse an XML document and save any errors in the string variable ls_err. If errors occur, no message boxes display. If a DTD is included or referenced, the document is validated. Otherwise the parser checks for well-formedness:



long ll_ret string ls_err ll_ret = XMLParseFile("c:\temp\mydoc.xml", ls_err)



These statements parse an XML document. If an XMLSchema is included or referenced, the document is validated, otherwise the parser checks for well-formedness:



long ll_ret ll_ret = XMLParseFile("c:\temp\mydoc.xml", TRUE, TRUE)



These statements parse an XML document, validate against a given XML schema, and save any errors that occur in a string variable. If errors occur, no message boxes display. If no schema is included or referenced in the file, XMLParseFile returns -1:



long ll_ret string ls_err ll_ret = XMLParseFile("c:\temp\mydoc.xml", ValAlways!, ls_err, TRUE, TRUE)



These statements parse an XML document, validate against a given XML schema, and parse the schema itself for additional errors. If no schema is included or referenced in the file, XMLParseFile returns -1:



long ll_ret string ls_err ll_ret = XMLParseFile("c:\temp\mydoc.xml", ValAlways!, ls_err, TRUE, TRUE, TRUE)



These statements parse an XML document, validate against a given DTD, and save any errors that occur in a string variable. If errors occur, no message boxes display. If no DTD is included or referenced in the file, XMLParseFile returns -1:



long ll_ret string ls_err ll_ret = XMLParseFile("c:\temp\mydoc.xml", ValAlways!, ls_err)



These statements parse an XSD file and test it for well-formedness. You must use ValAuto! when you parse an XSD file because there is no external schema associated with it. However, you do not need to specify the option when you call the function because it is the default validation method:



long ll_ret ll_ret = XMLParseFile ("c:\mydoc.xsd")



See also ImportFile XMLParseString ImportFile method for DataWindows in Section 9.96, “ImportFile” in DataWindow Reference.
