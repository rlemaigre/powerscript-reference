# 2.4 Enumerated datatypes About enumerated datatypes

Like the system object datatypes, enumerated datatypes are specific to PowerScript. Enumerated datatypes are used in two ways:



- • As arguments in functions
- • To specify the properties of an object or control You can list all the enumerated datatypes and their values by selecting the Enumerated tab in the Browser. You cannot create your own enumerated datatypes. As an alternative, you can declare a set of constant variables and assign them initial values. See Declaring constants.




A variable of one of the enumerated datatypes can be assigned a fixed set of values. Values of enumerated datatypes always end with an exclamation point (!). For example, the enumerated datatype Alignment, which specifies the alignment of text, can be assigned one of the following three values: Center!, Left!, and Right!:



mle_edit.Alignment=Right!
