# Return value Integer.

Returns 1 if it succeeds and a negative number if an error occurs. Error values are:



- -1 -- Pipe open failed
- -2 -- Too many columns
- -3 -- Table already exists
- -4 -- Table does not exist
- -5 -- Missing connection
- -6 -- Wrong arguments
- -7 -- Column mismatch
- -8 -- Fatal SQL error in source
- -9 -- Fatal SQL error in destination
- -10 -- Maximum number of errors exceeded
- -12 -- Bad table syntax
- -13 -- Key required but not supplied
- -15 -- Pipe already in progress
- -16 -- Error in source database
- -17 -- Error in destination database
- -18 -- Destination database is read-only If any argument's value is null, Start returns null. Usage A pipeline transfer involves several PowerBuilder objects. You need:


- • A pipeline object, which you define in the Data Pipeline painter. It contains the SQL statements that specify what data is transferred and how that data is mapped from the tables in the source database to those in the target database.
- • A user object inherited from the pipeline system object. It inherits properties that let you check the progress of the pipeline transfer. In the painter, you define instance variables and write scripts for pipeline events.
- • A window that contains a DataWindow control or a Data Store for the pipeline-error DataWindow. Do not put a DataWindow object in the DataWindow control. The control displays PowerBuilder's pipeline-error DataWindow object if errors occur when the pipeline executes.




The window can also include buttons, menus, or some other means to execute the pipeline, repair errors, and cancel the execution. The scripts for these actions use the functions Start, Repair, and Cancel.



Before the application executes the pipeline, it needs to connect to the source and destination databases, create an instance of the user object, and assign the pipeline object to the user object's DataObject property. Then it can call Start to execute the pipeline. This code may be in one or several scripts.



When you execute the pipeline, the piped data is committed according to the settings you make in the Data Pipeline painter. You can specify that:



- • The data is committed when the pipeline finishes. If the maximum error limit is exceeded, all data is rolled back.
- • Data is committed at regular intervals, after a specified number of rows have been transferred. When the maximum error limit is exceeded, all rows already transferred are committed.




For information about specifying the pipeline object in the Data Pipeline painter and how the settings affect committing, see Chapter 16, Working with Data Pipelines in Users Guide. For more information on using a pipeline in an application, see Chapter 17, Piping Data Between Data Sources in Application Techniques.



When you dynamically assign the pipeline object to the user object's DataObject property, you must remember to include the pipeline object in a dynamic library when you build your application's executable.
