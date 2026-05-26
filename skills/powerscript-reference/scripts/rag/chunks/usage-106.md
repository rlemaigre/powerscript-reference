# Usage

If you do not include the optional removeallspaces argument or its value is false, only the space character (U+0020) is removed from the string.



If the removeallspaces argument is set to true, all types of space characters are removed. See LeftTrim for a list of space characters.



Examples This statement returns RUTH if all the trailing blanks are space characters:



RightTrim("RUTH ")



This statement returns RUTH if the trailing blanks include other types of white space characters:



RightTrim("RUTH ", true)



See also LeftTrim Trim RightTrim method for DataWindows in Section 2.4.108, “RightTrim” in DataWindow Reference.



- 10.543 RightTrimW (obsolete) Description Removes spaces from the end of a string. This function is obsolete. It has the same behavior as RightTrim in all environments. Syntax RightTrimW ( string )

- 10.544 RollbackOnly (obsolete) Description




Modifies an EAServer transaction associated with a calling thread so that the only possible outcome is to roll back the transaction.
