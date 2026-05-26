# Assigning strings to char arrays

As with other datatypes, you can use arrays of chars. Assigning strings to char arrays follows these rules:



- • If the char array is unbounded (defined as a variable-size array), the contents of the string are copied directly into the char array.
- • If the char array is bounded and its length is less than or equal to the length of the string, the string is truncated in the array.
- • If the char array is bounded and its length is greater than the length of the string, the entire string is copied into the array along with its zero terminator. Remaining characters in the array are undetermined.
