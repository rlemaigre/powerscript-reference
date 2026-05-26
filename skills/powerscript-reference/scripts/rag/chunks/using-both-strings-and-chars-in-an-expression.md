# Using both strings and chars in an expression

Expressions using both strings and char arrays promote the chars to strings before evaluation. For example, the following promotes the contents of c to a string before comparison with the string "x":



char c



. . . if (c = "x") then
