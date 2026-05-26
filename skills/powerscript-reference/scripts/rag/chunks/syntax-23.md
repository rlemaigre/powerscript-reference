# Syntax

DECLARE Cursor | Procedure DYNAMIC CURSOR | PROCEDURE FOR DynamicStagingArea ;



PREPARE DynamicStagingArea FROM SQLStatement



{USING TransactionObject} ; DESCRIBE DynamicStagingArea



INTO DynamicDescriptionArea ; OPEN DYNAMIC Cursor



USING DESCRIPTOR DynamicDescriptionArea ; EXECUTE DYNAMIC Procedure



USING DESCRIPTOR DynamicDescriptionArea ; FETCH Cursor | Procedure



USING DESCRIPTOR DynamicDescriptionArea ; CLOSE Cursor | Procedure ;



- Table 8.26:




|Parameter|Description|
|---|---|
|Cursor or Procedure|The name of the cursor or procedure you want to use.|
|DynamicStagin|gAreaThe name of the DynamicStagingArea (usually SQLSA). If you need a DynamicStagingArea variable other than SQLSA, you must declare it and instantiate it with the CREATE statement before using it.|
|SQLStatement|A string containing a valid SQL SELECT statement. The string can be a string constant or a PowerBuilder variable preceded by a colon (such as :mysql). The string must be contained on one line and cannot contain expressions.<br><br>Enter a question mark (?) for each parameter in the statement. Value substitution is positional; reserved word substitution is not allowed.|
|TransactionObj|ectThe(optional)name of the transaction object that identifies the database.|
|DynamicDescri|ptionAreaThe name of the DynamicDescriptionArea (usually SQLDA). If you need a DynamicDescriptionArea variable other than SQLDA, you must declare it and instantiate it with the CREATE statement before using it.|



Usage The DECLARE statement is not executable and can be defined globally. If your DBMS supports formats of FETCH other than the customary (and default) FETCH NEXT, you can specify FETCH FIRST, FETCH PRIOR, or FETCH LAST. To declare a local cursor or procedure, open the script in the Script view and select Paste SQL from the PainterBar or the Edit>Paste Special menu. To declare a global, instance, or shared cursor or procedure, select Declare from the first drop-down list in the Script view and Global Variables, Instance Variables, or Shared Variables from the second drop-down list, then select Paste SQL. For information about global, instance, shared, and local scope, see Where to declare variables. Accessing attribute information



When a statement is described into a DynamicDescriptionArea, this information is available to you in the attributes of that DynamicDescriptionArea variable:



- Table 8.27:



|Information|Attribute|
|---|---|
|Number of input parameters|NumInputs|
|Array of input parameter types|InParmType|
|Number of output parameters|NumOutputs|
|Array of output parameter types|OutParmType|



Setting and accessing parameter values The array of input parameter values and the array of output parameter values are also available. You can use the SetDynamicParm function to set the values of an input parameter and the following functions to obtain the value of an output parameter:



- Table 8.28:



|GetDynamicDate GetDynamicDateTime GetDynamicDecimal|GetDynamicNumber GetDynamicString GetDynamicTime|
|---|---|



For information about these functions, see GetDynamicDate GetDynamicDateTime GetDynamicDecimal GetDynamicNumber GetDynamicString GetDynamicTime. Parameter values The following enumerated datatypes are the valid values for the input and output parameter types:



- Table 8.29: TypeBoolean! TypeByte! TypeDate! TypeDateTime! TypeDecimal! TypeDouble! TypeInteger!




TypeLong! TypeLongLong! TypeReal! TypeString! TypeTime! TypeUInt! TypeULong!



TypeUnknown!



Input parameters You can set the type and value of each input parameter found in the PREPARE statement. PowerBuilder populates the SQLDA attribute NumInputs when the DESCRIBE is executed. You can use this value with the SetDynamicParm function to set the type and value of a specific input parameter. The input parameters are optional; but if you use them, you should fill in all the values before executing the OPEN or EXECUTE statement. Output parameters You can access the type and value of each output parameter found in the PREPARE statement. If the database supports output parameter description, PowerBuilder populates the SQLDA attribute NumOutputs when the DESCRIBE is executed. If the database does not support output parameter description, PowerBuilder populates the SQLDA attribute NumOutputs when the FETCH statement is executed. You can use the number of output parameters in the NumOutputs attribute in functions to obtain the type of a specific parameter from the output parameter type array in the OutParmType attribute. When you have the type, you can call the appropriate function after the FETCH statement to retrieve the output value. Examples



- Example 1




These statements assume you know that there will be only one output descriptor and that it will be an integer. You can expand this example to support any number of output descriptors and any datatype by wrapping the CHOOSE CASE statement in a loop and expanding the CASE statements:



string Stringvar, Sqlstatement integer Intvar Long LongVar Sqlstatement = "SELECT emp_id FROM employee" PREPARE SQLSA FROM :Sqlstatement ; DESCRIBE SQLSA INTO SQLDA ; DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA ; OPEN DYNAMIC my_cursor USING DESCRIPTOR SQLDA ; FETCH my_cursor USING DESCRIPTOR SQLDA ; // If the FETCH is successful, the output // descriptor array will contain returned // values from the first row of the result set. // SQLDA.NumOutputs contains the number of // output descriptors. // The SQLDA.OutParmType array will contain // NumOutput entries and each entry will contain // a value of the enumerated datatype ParmType // (such as TypeInteger!, TypeLongLong!, or // TypeString!). CHOOSE CASE SQLDA.OutParmType[1]



CASE TypeString!



Stringvar = GetDynamicString(SQLDA, 1) CASE TypeInteger!



Intvar = GetDynamicNumber(SQLDA, 1) CASE TypeLongLong!



Longvar = GetDynamicDecimal(SQLDA, 1)



END CHOOSE CLOSE my_cursor ;



- Example 2



These statements assume you know there is one string input descriptor and sets the parameter to MA:



string Sqlstatement, sValue



Sqlstatement = "SELECT emp_fname, emp_lname " & + "FROM employee WHERE state = ?" PREPARE SQLSA FROM :Sqlstatement ; DESCRIBE SQLSA INTO SQLDA ; // If the DESCRIBE is successful, the input // descriptor array will contain one input // descriptor that you must fill prior to the OPEN DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA ; SetDynamicParm(SQLDA, 1, "MA") OPEN DYNAMIC my_cursor USING DESCRIPTOR SQLDA ; FETCH my_cursor USING DESCRIPTOR SQLDA ;



// If the FETCH is successful, the output // descriptor array will contain returned // values from the first row of the result set // as in the first example.



// To test and see the values:



- sValue = SQLDA.GetDynamicString(1) //messagebox("",sValue)
- sValue = SQLDA.GetDynamicString(2) //messagebox("",sValue) Do While sqlca.sqlcode <> 100




FETCH my_cursor USING DESCRIPTOR SQLDA ;



- sValue = SQLDA.GetDynamicString(1) //messagebox("",sValue)
- sValue = SQLDA.GetDynamicString(2)




//messagebox("",sValue)



Loop CLOSE my_cursor ;



- Example 3




This example is for a stored procedure with a return value for a SQL Native Client (SNC) connection:



integer var1, ReturnVal string var2



PREPARE SQLSA FROM "execute @rc = myproc @parm1=?, @parm2=? OUTPUT "; DESCRIBE SQLSA INTO SQLDA ; DECLARE my_proc DYNAMIC PROCEDURE FOR SQLSA ;



- SetDynamicParm(SQLDA, 1, var1)
- SetDynamicParm(SQLDA, 2, var2) EXECUTE DYNAMIC my_proc USING DESCRIPTOR SQLDA ;




//fetch result set



. . .



//fetch return value and output parameter FETCH my_proc USING DESCRIPTOR SQLDA ;



//get return value



- CHOOSE CASE SQLDA.OutParmType[1] CASE TypeInteger!



rc = GetDynamicNumber(SQLDA, 1) CASE TypeLong!



rc = GetDynamicNumber(SQLDA, 1) CASE TypeString!



Var2 = GetDynamicString(SQLDA, 1) END CHOOSE //get output value



- CHOOSE CASE SQLDA.OutParmType[2] CASE TypeString!




Var2 = GetDynamicString(SQLDA, 2) CASE TypeInteger!



rc = GetDynamicNumber(SQLDA, 2) CASE TypeLong!



rc = GetDynamicNumber(SQLDA, 2) END CHOOSE CLOSE my_proc ;
