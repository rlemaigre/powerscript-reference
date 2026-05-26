# The metacharacters asterisk (*), plus (+), and question mark (?) are unary operators that are used to specify repetitions in a regular expression:

- Table 10.495: Unary operators used as metacharacters by Match function



|Metacharact|erMeaning|Example|
|---|---|---|
|* (asterisk)|Indicates zero or more occurrences|A* matches zero or more As (no As, A, AA, AAA, and so on)|
|+ (plus)|Indicates one or more occurrences|A+ matches one A or more than one A (A, AAA, and so on)|
|? (question mark)|Indicates zero or one occurrence|A? matches an empty string ("") or A|



Sample patterns The following table shows various text patterns and sample text that matches each pattern:



- Table 10.496: Text pattern examples for Match function




|This pattern|Matches|
|---|---|
|AB|Any string that contains AB; for example, ABA, DEABC, graphAB_one|



|This pattern|Matches|
|---|---|
|B*|Any string that contains 0 or more Bs; for example, AC, B, BB, BBB, ABBBC, and so on|
|AB*C|Any string containing the pattern AC or ABC or ABBC, and so on (0 or more Bs)|
|AB+C|Any string containing the pattern ABC or ABBC or ABBBC, and so on (1 or more Bs)|
|ABB*C|Any string containing the pattern ABC or ABBC or ABBBC, and so on (1 B plus 0 or more Bs)|
|^AB|Any string starting with AB|
|AB?C|Any string containing the pattern AC or ABC (0 or 1 B)|
|^[ABC]|Any string starting with A, B, or C|
|[^ABC]|A string containing any characters other than A, B, or C|
|^[^abc]|A string that begins with any character except a, b, or c|
|^[^a-z]$|Any single-character string that is not a lowercase letter (^ and $ indicate the beginning and end of the string)|
|[A-Z]+|Any string with one or more uppercase letters|
|^[0-9]+$|Any string consisting only of digits|
|^[0-9][0-9][0-9]$|Any string consisting of exactly three digits|
|^([0-9][0-9] [0-9])$|Any consisting of exactly three digits enclosed in parentheses|
