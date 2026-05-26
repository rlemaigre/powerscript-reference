# Return value

String. Returns the characters for the leftmost n bytes in the source string if it succeeds and the empty string ("") if an error occurs. If any argument's value is null, LeftA returns null. If n is greater than or equal to the length of the string, LeftA returns the entire string. It does not add spaces to make the return value's length equal to n. Usage LeftA replaces the functionality that Left had in DBCS environments in PowerBuilder 9. In SBCS environments, Left, LeftW, and LeftA return the same results.



- 10.365 LeftW (obsolete) Description Obtains a specified number of characters from the beginning of a string. This function is obsolete. It has the same behavior as Left in all environments. Syntax LeftW ( string, n )

- 10.366 LeftTrim Description Removes spaces from the beginning of a string. Syntax LeftTrim ( string {, removeallspaces } )


- Table 10.448:




|Argument|Description|
|---|---|
|string|The string you want returned with leading spaces deleted|
|removeallspaces|A boolean indicating that all types of spaces should be deleted|



Return value String. Returns a copy of string with leading spaces deleted if it succeeds and the empty string ("") if an error occurs. If string is null, LeftTrim returns null. Usage



If you do not include the optional removeallspaces argument or its value is false, only the space character (U+0020) is removed from the string.



If the removeallspaces argument is set to true, all types of space characters are removed. This is a list of white spaces: CHARACTER TABULATION (U+0009) LINE FEED (U+000A) LINE TABULATION (U+000B)



FORM FEED (U+000C) CARRIAGE RETURN (U+000D) SPACE (U+0020) NO-BREAK SPACE (U+00A0) EN QUAD (U+2000) EM QUAD (U+2001) EN SPACE (U+2002) EM SPACE (U+2003) THREE-PER-EM SPACE (U+2004) FOUR-PER-EM SPACE (U+2005) SIX-PER-EM SPACE (U+2006) FIGURE SPACE (U+2007) PUNCTUATION SPACE (U+2008) THIN SPACE (U+2009) HAIR SPACE (U+200A) ZERO WIDTH SPACE (U+200B) IDEOGRAPHIC SPACE (U+3000) ZERO WIDTH NO-BREAK SPACE (U+FEFF) Examples This statement returns RUTH when the leading spaces are all space characters:



LeftTrim(" RUTH")



This statement returns RUTH when the leading spaces include other types of space characters such as tab characters:



LeftTrim(" RUTH", true)



These statements delete leading spaces from the text in the MultiLineEdit mle_name and store the result in emp_name:



string emp_name emp_name = LeftTrim(mle_name.Text)



See also RightTrim Trim LeftTrim method for DataWindows in Section 2.4.65, “LeftTrim” in DataWindow Reference.
