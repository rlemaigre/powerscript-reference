# Usage

RightA replaces Right in DBCS environments in PowerBuilder 9. In SBCS environments, Right, RightW, and RightA return the same results.



- 10.541 RightW (obsolete) Description Obtains a specified number of characters from the end of a string. This function is obsolete. It has the same behavior as Right in all environments. Syntax RightW ( string, n )

- 10.542 RightTrim Description Removes spaces from the end of a string. Syntax RightTrim ( string {, removeallspaces } )


- Table 10.667:




|Argument|Description|
|---|---|
|string|The string you want returned with trailing blanks deleted|
|removeallspaces|A boolean indicating that all types of spaces should be deleted|
