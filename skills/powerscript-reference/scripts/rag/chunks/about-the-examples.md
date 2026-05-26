# About the examples

The examples assume that the default transaction object (SQLCA) has been assigned valid values and that a successful CONNECT has been executed. Although the examples do not show error checking, you should check the SQLCode after each SQL statement.



Dynamic SQL statements The PowerBuilder dynamic SQL statements are:



DESCRIBE DynamicStagingArea INTO DynamicDescriptionArea ;EXECUTE {IMMEDIATE} SQLStatement {USING TransactionObject} ;EXECUTE DynamicStagingArea USING ParameterList ;EXECUTE DYNAMIC Cursor | Procedure USING ParameterList ;OPEN DYNAMIC Cursor | Procedure USING ParameterList ;EXECUTE DYNAMIC Cursor | Procedure USING DESCRIPTOR DynamicDescriptionArea ;OPEN DYNAMIC Cursor | Procedure USING DESCRIPTOR DynamicDescriptionArea ;PREPARE DynamicStagingArea FROM SQLStatement {USING TransactionObject} ;



Two datatypes DynamicStagingArea DynamicStagingArea is a PowerBuilder datatype. PowerBuilder uses a variable of this type to store information for use in subsequent statements. The DynamicStagingArea is the only connection between the execution of a statement and a transaction object and is used internally by PowerBuilder; you cannot access information in the DynamicStagingArea. PowerBuilder provides a global DynamicStagingArea variable named SQLSA that you can use when you need a DynamicStagingArea variable. If necessary, you can declare and create additional object variables of the type DynamicStagingArea. These statements declare and create the variable, which must be done before referring to it in a dynamic SQL statement:



DynamicStagingArea dsa_stage1 dsa_stage1 = CREATE DynamicStagingArea



After the EXECUTE statement is completed, SQLSA is no longer referenced.



DynamicDescriptionArea DynamicDescriptionArea is a PowerBuilder datatype. PowerBuilder uses a variable of this type to store information about the input and output parameters used in Format 4 of dynamic SQL. PowerBuilder provides a global DynamicDescriptionArea named SQLDA that you can use when you need a DynamicDescriptionArea variable. If necessary, you can declare and create additional object variables of the type DynamicDescriptionArea. These statements declare and create the variable, which must be done before referring to it in a dynamic SQL statement:



DynamicDescriptionArea dda_desc1 dda_desc1 = CREATE DynamicDescriptionArea



For more information about SQLDA, see Dynamic SQL Format 4. Preparing to use dynamic SQL When you use dynamic SQL, you must:



- • Prepare the DynamicStagingArea in all formats except Format 1
- • Describe the DynamicDescriptionArea in Format 4
- • Execute the statements in the appropriate order Preparing and describing the datatypes Since the SQLSA staging area is the only connection between the execution of a SQL statement and a transaction object, an execution error will occur if you do not prepare the SQL statement correctly. In addition to SQLSA and SQLDA, you can declare other variables of the DynamicStagingArea and DynamicDescriptionArea datatypes. However, this is required only when your script requires simultaneous access to two or more dynamically prepared statements. This is a valid dynamic cursor:




DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA ;PREPARE SQLSA FROM "SELECT emp_id FROM employee" ;OPEN DYNAMIC my_cursor ;



This is an invalid dynamic cursor. There is no PREPARE, and therefore an execution error will occur:



DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA ;OPEN DYNAMIC my_cursor ;



Statement order Where you place the dynamic SQL statements in your scripts is unimportant, but the order of execution is important in Formats 2, 3, and 4. You must execute:



- 1. The DECLARE and the PREPARE before you execute any other dynamic SQL statements
- 2. The OPEN in Formats 3 and 4 before the FETCH
- 3. The CLOSE at the end




If you have multiple PREPARE statements, the order affects the contents of SQLSA. These statements illustrate the correct ordering:



DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA string sql1, sql2 sql1 = "SELECT emp_id FROM department "& WHERE salary > 90000" sql2 = "SELECT emp_id FROM department "& WHERE salary > 20000" IF deptId = 200 then



- PREPARE SQLSA FROM :sql1 USING SQLCA ; ELSE
- PREPARE SQLSA FROM :sql2 USING SQLCA ;




END IF OPEN DYNAMIC my_cursor ; // my_cursor maps to the



// SELECT that has been // prepared.
