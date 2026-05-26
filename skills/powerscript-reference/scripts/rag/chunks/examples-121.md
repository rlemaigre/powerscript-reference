# Examples

These statements set SystemDateTime to the DateTime data in the second output parameter descriptor:



DateTime SystemDateTime SystemDateTime = SQLDA.GetDynamicDateTime(2) IF SystemDateTime = &



DateTime(1900-01-01, 00:00:00) THEN



... // Error handling END IF



For an example of retrieving data from the DynamicDescriptionArea, see GetDynamicDate. See also GetDynamicDate GetDynamicNumber GetDynamicString GetDynamicTime SetDynamicParm Using dynamic SQL
