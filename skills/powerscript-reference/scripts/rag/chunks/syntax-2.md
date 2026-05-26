# Syntax

access-right: { readaccess } { writeaccess } datatype variablename { access-right } { readaccess } { writeaccess } datatype variablename { readaccess } { writeaccess } datatype variablename



Within a labeled group of declarations, you can override the access on a single line by specifying another access-right keyword with the declaration. The labeled access takes effect again on the following lines.
