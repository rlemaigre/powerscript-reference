# Error handling in scripts

The scripts shown in the SQL examples above do not include error handling, but it is good practice to test the success and failure codes (the SQLCode attribute) in the transaction object after every statement. The codes are:



- Table 8.2:




|Value|Meaning|
|---|---|
|0|Success.|
|100|Fetched row not found.|
|-1|Error; the statement failed. Use SQLErrText or SQLDBCode to obtain the detail.|



After certain statements, such as DELETE, FETCH, and UPDATE, you should also check the SQLNRows property of the transaction object to make sure the action affected at least one row.



About SQLErrText and SQLDBCode The string SQLErrText in the transaction object contains the database vendor-supplied error message. The long named SQLDBCode in the transaction object contains the database vendor-supplied status code:



IF SQLCA.SQLCode = -1 THEN



MessageBox("SQL error", SQLCA.SQLErrText) END IF



Painting standard SQL You can paint the following SQL statements in scripts and functions:



- • Declarations of SQL cursors and stored procedures
- • Cursor FETCH, UPDATE, and DELETE statements
- • Noncursor SELECT, INSERT, UPDATE, and DELETE statements




For more information about scope, see Where to declare variables. You can declare cursors and stored procedures at the scope of global, instance, shared, or local variables. A cursor or procedure can be declared in the Script view using the Paste SQL button in the PainterBar. You can paint standard embedded SQL statements in the Script view, the Function painter, and the Interactive SQL view in the Database painter using the Paste SQL button in the PainterBar or the Paste Special>SQL item from the pop-up menu. Supported SQL statements



In general, all DBMS-specific features are supported in PowerScript if they occur within a PowerScript-supported SQL statement. For example, PowerScript supports DBMS-specific built-in functions within a SELECT command.



However, any SQL statement that contains a SELECT clause must also contain a FROM clause in order for the script to compile successfully. To solve this problem, add a FROM clause that uses a "dummy" table to SELECT statements without FROM clauses. For example:



string resselect user_name() into:res from dummy; select db_name() into:res from dummy; select date('2001-01-02:21:20:53') into:res from dummy;
