# Syntax

#IF { NOT } DEFINED predefined_symbols THEN



- action1



{ #ELSEIF DEFINED predefined_symbols THEN



- action2 }



{ #ELSE



- action3 }




#END IF



- Table 1.7:



|Parameter|Description|
|---|---|
|predefined_sym|Abolspredefined identifier or a combination of predefined identifiers separated by AND or OR operators. In the current release, you cannot use a userdefined identifier.|
|action1,<br>action2,<br>action3<br>|The action you want performed if the condition in the previous statement was met.|



Usage



Conditional compilation enables you to include PowerScript code for a specific target type or set of target types in an application. You can also include debug code in your application and specify in the Project painter whether it will be included in your application's executable file.



The preprocessor substitutes blank lines for statements with a leading number (#) sign character. It passes the code in the action statements to the compiler or converts it to blank lines depending on whether the condition in the previous preprocessor directive was met.



The following table displays the predefined symbols, the project types to which they correspond, and their effects on the code passed to the compiler.



- Table 1.8: Predefined symbols for conditional compilation




|Predefined symbols|Target type|Code in this processing block|
|---|---|---|
|PBNATIVE|Standard PowerBuilder client-server or distributed applications|Fully parsed for the standard application and converted to blank lines for .NET targets.|
|PBWEBSERV|.NETICE Web Service component targets|Fully parsed for .NET Web Service targets and converted to blank lines for all other targets.|
|DEBUG|All PowerBuilder standard and .NET targets|When a project's Enable DEBUG Symbol check box is selected, code is fully parsed by the compiler and included in the deployed application. The code is converted to blank lines when the check box is cleared. The DEBUG symbol is always defined in the development environment.|



You can use the NOT operator to include code for all target types that are not of the type that you specify, and you can use AND and OR operators to combine symbols. For example,



code that follows this statement will be parsed for all targets except standard PowerBuilder applications:



#if NOT defined PBNATIVE then



Comments can be added to conditional code blocks if they are preceded by double slash marks ( // ) in the same line of code. You cannot use the PowerScript line continuation character ( & ) in a conditional code statement. You must use it in code that you embed in the conditional block when you use more than one line for a single line of code.
