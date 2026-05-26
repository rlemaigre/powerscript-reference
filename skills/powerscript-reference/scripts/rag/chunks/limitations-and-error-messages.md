# Limitations and error messages

Conditional compilation is not supported in DataWindow syntax, or in structure or menu objects. You cannot edit the source code for an object to include conditional compilation blocks that span function, event, or variable definition boundaries.



You must rebuild your application after you add a DEBUG conditional block. The following table shows the types of error messages displayed for incorrect conditional compilation code.



- Table 1.9: Types of error messages returned by the preprocessor




|Error message|Description|
|---|---|
|Invalid if statement|#if statement without a defined symbol, with an incorrectly defined symbol, or without a then clause|
|#end if directive expected|#if statement without an #end if statement|
|Unexpected preprocessor directive|Caused by an #else, #elseif, or #end if statement when not preceded by an #if statement|
|Preprocessor syntax error|Caused by including text after an #else or #end if statement when the text is not preceded by comment characters (//)|
