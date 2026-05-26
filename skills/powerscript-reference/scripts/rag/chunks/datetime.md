# DateTime

The date and time in a single datatype, used only for reading and writing DateTime values from and to a database. To convert DateTime values to datatypes that you can use in PowerBuilder, use:



- • The Date(datetime) function to convert a DateTime value to a PowerBuilder date value after reading from a database
- • The Time(datetime) function to convert a DateTime value to a PowerBuilder time value after reading from a database
- • The DateTime (date, time) function to convert a date and (optional) time to a DateTime before writing to a DateTime column in a database.




PowerBuilder supports microseconds in the database interface for any DBMS that supports microseconds.
