# Usage

Use assignment statements to assign values to variables. To assign a value to a variable anywhere in a script, use the equal sign (=). For example:



String1 = "Part is out of stock" TaxRate = .05



No multiple assignments Since the equal sign is also a logical operator, you cannot assign more than one variable in a single statement. For example, the following statement does not assign the value 0 to A and B:



A=B=0 // This will not assign 0 to A and B.



This statement first evaluates B=0 to true or FALSE and then tries to assign this boolean value to A. When A is not a boolean variable, this line produces an error when compiled.



Assigning array values You can assign multiple array values with one statement, such as:



int Arr[] Arr = {1, 2, 3, 4}



You can also copy array contents. For example, this statement copies the contents of Arr2 into array Arr1:



Arr1 = Arr2



Operator shortcuts



The PowerScript shortcuts for assigning values to variables in the following table ave slight performance advantages over their equivalents.



- Table 7.2: Shortcuts for assigning values




|Assignment|Example|Equivalent to|
|---|---|---|
|++|i ++|i = i + 1|
|--|i --|i = i - 1|
|+=|i += 3|i = i + 3|
|-=|i -= 3|i = i -3|
|*=|i *= 3|i = i * 3|
|/=|i /= 3|i = i / 3|
|^=|i ^=3|i = i ^ 3|



Unless you have prohibited the use of dashes in variable names, you must leave a space before -- and -=. If you do not, PowerScript reads the minus sign as part of a variable name. For more information, see Identifier names.
