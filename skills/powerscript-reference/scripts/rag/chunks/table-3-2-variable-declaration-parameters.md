# Table 3.2: Variable declaration parameters

|Parameter|Description|
|---|---|
|access (option|al)(For instance variables only) Keywords specifying the access for the variable. For information, see Access for instance variables.<br><br>|
|datatype|The datatype of the variable. You can specify a standard datatype, a system object, or a previously defined structure.<br><br>For blobs and decimals, you can specify the size or precision of the data by including an optional value in brackets.|
|{ size } (optio|nal)(For blobs only) A number, enclosed in braces, specifying the size in bytes of the blob. If { size } is omitted, the blob has an initial size of zero and PowerBuilder adjusts its size each time it is used at runtime.|



|Parameter|Description|
|---|---|
| |If you enter a size that exceeds the declared length in a script, PowerBuilder truncates the blob data.|
|{ precision } (|optional)(For decimals only) A number, enclosed in braces, specifying the number of digits after the decimal point. If you do not specify a precision, the variable takes the precision assigned to it in the script.|
|variablename|The name of the variable (must be a valid PowerScript identifier, as described in Identifier names).<br><br>You can define additional variables with the same datatype by naming additional variable names, separated by commas; each variable can have a value.|
|value (optiona|l)A literal or expression of the appropriate datatype that will be the initial value of the variable.<br><br>Blobs cannot be initialized with a value. For information, see Initial values for variables.<br><br>|



Examples Declaring instance variables



integer ii_total = 100 // Total shares



- date id_date // Date shares were bought Declaring a global variable string gs_name Declaring shared variables




time st_process_start string ss_process_name



Declaring local variables



string ls_city = "Boston" integer li_count



Declaring blobs This statement declares ib_Emp_Picture a blob with an initial length of zero. The length is adjusted when data is assigned to it:



blob ib_Emp_Picture



This statement declares ib_Emp_Picture a blob with a fixed length of 100 bytes:



blob{100} ib_Emp_Picture



Declaring decimals These statements declare shared variables sc_Amount and sc_dollars_accumulated as decimal numbers with two digits after the decimal point:



decimal{2} sc_Amount



- decimal{2} sc_dollars_accumulated




This statement declares lc_Rate1 and lc_Rate2 as decimal numbers with four digits after the decimal point:



dec{4} lc_Rate1, lc_Rate2



This statement declares lc_Balance as a decimal with zero digits after the decimal point:



decimal{0} lc_Balance



This statement does not specify the number of decimal places for lc_Result. After the product of lc_Op1 and lc_Op2 is assigned to it, lc_Result has four decimal places:



dec lc_Result dec{2} lc_Op1, lc_Op2 lc_Result = lc_Op1 * lc_Op2



- 3.1.3.1 Datatype of a variable A PowerScript variable can be declared as one of the following datatypes:

- • A standard datatype (such as an integer or string).
- • An object or control (such as a window or CommandButton).
- • An object or structure that you have defined (such as a window called mywindow). An object you have defined must be in a library on the application's library search path when the script is compiled.


- 3.1.3.2 Variable names



In a well-planned application, standards determine how you name your PowerScript variables. Naming conventions make scripts easy to understand and help you avoid name conflicts. A typical approach is to include a prefix that identifies the scope and the datatype of the variable. For example, a prefix for an instance variable's name typically begins with i (such as ii_count or is_empname), a local integer variable's name would be li_total and a global integer variable's name would be gi_total. For information about naming conventions, see the Section 4.8.3, “Naming conventions” in Users Guide.



X and Y as variable names



Although you might think of x and y as typical variable names, in PowerBuilder they are also properties that specify an object's onscreen coordinates. If you use them as variables and forget to declare them, you do not get a compiler error. Instead, PowerBuilder assumes you want to move the object, which might lead to unexpected results in your application.



- 3.1.3.3 Initial values for variables




When you declare a PowerScript variable, you can accept the default initial value or specify an initial value in the declaration.
