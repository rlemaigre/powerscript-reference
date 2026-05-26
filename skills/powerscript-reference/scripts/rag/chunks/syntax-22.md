# Syntax

DECLARE Cursor | Procedure DYNAMIC CURSOR | PROCEDURE FOR DynamicStagingArea ;



PREPARE DynamicStagingArea FROM SQLStatement



{USING TransactionObject} ; OPEN DYNAMIC Cursor



{USING ParameterList} ; EXECUTE DYNAMIC Procedure



{USING ParameterList} ; FETCH Cursor | Procedure



INTO HostVariableList ; CLOSE Cursor | Procedure ;
