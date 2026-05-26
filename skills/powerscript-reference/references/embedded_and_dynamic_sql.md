# PowerScript Embedded and Dynamic SQL

This document details database interaction in PowerScript, including standard Embedded SQL, transaction management, and the four formats of Dynamic SQL.

## Embedded SQL (Static)

PowerScript allows SQL statements to be embedded directly into scripts. 

### Syntax Rules
* **Termination:** All embedded SQL statements must end with a semicolon (`;`).
* **Host Variables:** PowerScript variables used inside SQL statements (as parameters or select targets) must be prefixed with a colon (`:`).
* **Example:**
```powerscript
string ls_emp_name
integer li_emp_id = 100

SELECT emp_name
INTO :ls_emp_name
FROM employee
WHERE emp_id = :li_emp_id;
```

### Transaction Management
PowerBuilder uses transaction objects to manage database connections.
* **SQLCA:** The default global transaction object (`SQLCA` of type `Transaction`).
* **Connection Commands:**
  * `CONNECT;` (or `CONNECT USING transaction_object;`)
  * `DISCONNECT;`
  * `COMMIT;`
  * `ROLLBACK;`
* **Error Checking:** After every SQL statement, check the transaction object status attributes:
  * `SQLCA.SQLCode`: `0` (Success), `-1` (Error), `100` (No rows found / End of result set).
  * `SQLCA.SQLDBCode`: Database-specific error code.
  * `SQLCA.SQLErrText`: Database-specific error message text.

---

## Dynamic SQL

Dynamic SQL is used when the structure of a SQL statement or its parameters are unknown at compile time, or when executing Data Definition Language (DDL) statements (which PowerScript does not support statically).

### Dynamic SQL Datatypes

#### DynamicStagingArea (SQLSA)
Stores internal compilation information for a dynamically prepared SQL statement.
* PowerBuilder provides a default global variable named **`SQLSA`**.
* Serves as the link between a prepared statement and execution.

#### DynamicDescriptionArea (SQLDA)
Stores metadata and parameter values for input and output parameters when they are unknown at compile time (used in Format 4).
* PowerBuilder provides a default global variable named **`SQLDA`**.
* Attributes include:
  * `NumInputs`: Number of input parameters.
  * `InParmType[]`: Array of input parameter types (enumerated values like `TypeInteger!`, `TypeString!`).
  * `NumOutputs`: Number of output columns.
  * `OutParmType[]`: Array of output column types.

---

## The Four Dynamic SQL Formats

### Format 1: Non-result-set statements with no input parameters
Used for executing static DDL statements or simple command statements without parameters.
* **Syntax:** `EXECUTE IMMEDIATE SQLStatement { USING TransactionObject } ;`
* **Example:**
```powerscript
string ls_sql
ls_sql = "CREATE TABLE temp_emp (emp_id integer, emp_name char(50))"
EXECUTE IMMEDIATE :ls_sql;
```

### Format 2: Non-result-set statements with input parameters
Used for executing commands (like `INSERT`, `UPDATE`, `DELETE`) with parameters whose count and types are known at compile time.
* **Syntax:**
```powerscript
PREPARE SQLSA FROM SQLStatement { USING TransactionObject } ;
EXECUTE SQLSA USING ParameterList ;
```
* **Example:**
```powerscript
integer li_id = 56
PREPARE SQLSA FROM "DELETE FROM employee WHERE emp_id = ?" ;
EXECUTE SQLSA USING :li_id ;
```

### Format 3: Result-set statements with known parameters and columns
Used for executing queries (`SELECT` or stored procedures) returning rows where the inputs and outputs are known at compile time.
* **Syntax:**
```powerscript
DECLARE Cursor | Procedure DYNAMIC CURSOR | PROCEDURE FOR DynamicStagingArea ;
PREPARE DynamicStagingArea FROM SQLStatement { USING TransactionObject } ;
OPEN DYNAMIC Cursor { USING ParameterList } ;      // Or EXECUTE DYNAMIC for procedures
FETCH Cursor INTO HostVariableList ;
CLOSE Cursor ;
```
* **Example:**
```powerscript
integer li_id
string ls_state = "MA"
DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA ;
PREPARE SQLSA FROM "SELECT emp_id FROM employee WHERE state = ?" ;
OPEN DYNAMIC my_cursor USING :ls_state ;
FETCH my_cursor INTO :li_id ;
CLOSE my_cursor ;
```

### Format 4: Result-set statements with unknown parameters or columns
Used when the number of input parameters or columns returned by a query is unknown until runtime.
* **Syntax:**
```powerscript
DECLARE Cursor | Procedure DYNAMIC CURSOR | PROCEDURE FOR DynamicStagingArea ;
PREPARE DynamicStagingArea FROM SQLStatement { USING TransactionObject } ;
DESCRIBE DynamicStagingArea INTO DynamicDescriptionArea ;
// Set input parameters
SetDynamicParm(DynamicDescriptionArea, index, value)
OPEN DYNAMIC Cursor USING DESCRIPTOR DynamicDescriptionArea ;
FETCH Cursor USING DESCRIPTOR DynamicDescriptionArea ;
// Read output values using GetDynamicString(), GetDynamicNumber(), etc.
CLOSE Cursor ;
```
* **Example:**
```powerscript
string ls_sql, ls_val
DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA ;
ls_sql = "SELECT emp_fname, emp_lname FROM employee WHERE state = ?"
PREPARE SQLSA FROM :ls_sql ;
DESCRIBE SQLSA INTO SQLDA ;

SetDynamicParm(SQLDA, 1, "MA") // Set first input parameter

OPEN DYNAMIC my_cursor USING DESCRIPTOR SQLDA ;
FETCH my_cursor USING DESCRIPTOR SQLDA ;

IF SQLCA.SQLCode = 0 THEN
   // Read columns dynamically based on type
   CHOOSE CASE SQLDA.OutParmType[1]
      CASE TypeString!
         ls_val = GetDynamicString(SQLDA, 1)
   END CHOOSE
END IF

CLOSE my_cursor ;
```
