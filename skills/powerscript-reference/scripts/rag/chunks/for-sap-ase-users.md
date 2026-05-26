# For SAP ASE users

If you are connected to an ASE database, set AUTOCOMMIT to true before executing the CREATE.



string MyASE MyASE = "CREATE TABLE Trainees "&



+"(emp_id integer not null,"&



+"emp_fname char(10) not null, "&



+"emp_lname char(20) not null)" EXECUTE IMMEDIATE :MyASE ;



These statements assume a transaction object named My_trans exists and is connected:



string MyASE MyASE="INSERT INTO department Values (1234,"&



+"'Purchasing',1234)" EXECUTE IMMEDIATE :MyASE USING My_trans ;



- 8.2.2 Dynamic SQL Format 2 Description




Use this format to execute a SQL statement that does not produce a result set but does require input parameters. You can use this format to execute all forms of Data Definition Language (DDL). Syntax



PREPARE DynamicStagingArea FROM SQLStatement {USING TransactionObject} ; EXECUTE DynamicStagingArea USING {ParameterList} ;
