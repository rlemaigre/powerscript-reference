# Examples

- Example 1



This declaration of the GIVE_RAISE_PROC stored procedure is declared in the User Object painter for a transaction object (the declaration appears on one line):



FUNCTION double GIVE_RAISE(ref double SALARY) RPCFUNC ALIAS FOR "GIVE_RAISE_PROC"



This code calls the function in a script:



double val = 20000 double rv rv = SQLCA.give_raise(val)



- Example 2




This declaration for the stored procedure SPM8 does not need an ALIAS FOR phrase, because the PowerBuilder and DBMS names are the same:



FUNCTION integer SPM8(integer value) RPCFUNC



This code calls the SPM8 stored procedure:



int myresult myresult = SQLCA.spm8(myresult) IF SQLCA.sqlcode <> 0 THEN
