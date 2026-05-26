# Blob

Binary large object. Used to store an unbounded amount of data (for example, generic binary, image, or large text such as a word-processing document).



Boolean Contains true or false. Byte 8-bit unsigned integers, from 0 to +255. Using literals To assign a literal value, use any whole positive number in the range 0 to 255. The leading plus sign is not required (18 and +18 are the same). For example:



1 123 200 +55 +200



Char or character A single Unicode character. If you have character-based data that you will want to parse in an application, you might want to define it as an array of type char. Parsing a char array is easier and faster than parsing strings. If you will be passing character-based data to external functions, you might want to use char arrays instead of strings.



For more information about passing character-based data to external functions, see Section 23.1, “Using external functions” in Application Techniques. For information about datatype conversion when assigning strings to chars and vice versa, see String and char datatypes in PowerBuilder.
