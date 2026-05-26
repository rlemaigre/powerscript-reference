# 3.5 Declaring DBMS stored procedures as remote procedure calls Description

In PowerBuilder, you can use dot notation for calling non-result-set stored procedures as remote procedure calls (RPCs):



object.function



You can call database procedures in SAP, Oracle, Informix, and other ODBC databases with stored procedures.



RPCs provide support for Oracle PL/SQL tables and parameters that are defined as both input and output. You can call overloaded procedures.



Applies to Transaction object Syntax



FUNCTION rtndatatype functionname ( { { REF } datatype1 arg1,...,



{ REF } datatypen argn } ) RPCFUNC { ALIAS FOR "spname" } SUBROUTINE functionname ( { { REF } datatype1 arg1 , ...,



{ REF } datatypen argn } ) RPCFUNC { ALIAS FOR "spname" }
