# Usage

This statement must be preceded by an EXECUTE statement for the same procedure. The USING TransactionObject clause is not allowed with CLOSE; the transaction object was specified in the statement that declared the procedure.



Use CLOSE only to close procedures that return result sets. PowerBuilder automatically closes procedures that do not return result sets (and sets the return code to 100).



CLOSE often appears in the script that is executed when the SQL code after a fetch equals 100 (not found).
