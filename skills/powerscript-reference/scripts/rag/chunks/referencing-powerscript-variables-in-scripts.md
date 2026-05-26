# Referencing PowerScript variables in scripts

Wherever constants can be referenced in SQL statements, PowerScript variables preceded by a colon (:) can be substituted. Any valid PowerScript variable can be used. This INSERT statement uses a constant value:



INSERT INTO EMPLOYEE ( SALARY ) VALUES ( 18900 ) ;



The same statement using a PowerScript variable to reference the constant might look like this:



int Sal_var Sal_var = 18900 INSERT INTO EMPLOYEE ( SALARY ) VALUES ( :Sal_var ) ;
