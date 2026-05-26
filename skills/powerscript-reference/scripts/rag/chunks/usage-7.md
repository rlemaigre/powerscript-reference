# Usage

At least one CASE clause is required. You must end a CHOOSE CASE control structure with END CHOOSE.



If testexpression at the beginning of the CHOOSE CASE statement matches a value in expressionlist for a CASE clause, the statements immediately following the CASE clause are executed. Control then passes to the first statement after the END CHOOSE clause.



If multiple CASE expressions exist, then testexpression is compared to each expressionlist until a match is found or the CASE ELSE or END CHOOSE is encountered.



If there is a CASE ELSE clause and the test value does not match any of the expressions, statementblock in the CASE ELSE clause is executed. If no CASE ELSE clause exists and a match is not found, the first statement after the END CHOOSE clause is executed.
