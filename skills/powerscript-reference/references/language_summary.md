# PowerScript Language Reference

PowerScript is the programming language utilized by Sybase / Appeon PowerBuilder applications. This document outlines key aspects of the language syntax, structure, and grammar, and serves as an entry point to detailed topic references.

## Detailed References

For in-depth explanations and syntax details of specific language concepts, refer to the following guides:

* [Declarations and Datatypes](references/declarations_and_datatypes.md): Standard types, dynamic `Any` variable, array configurations, variable scopes, and instance access modifiers (e.g., `privatewrite`).
* [Operators and Expressions](references/operators_and_expressions.md): Arithmetic, relational, logical operators, operator precedence, and implicit type promotion.
* [Objects and Structures](references/objects_and_structures.md): Struct declaration, object instantiation (`CREATE`/`DESTROY`), inheritance casting, and autoinstantiated user objects.
* [Functions and Events](references/functions_and_events.md): Calling conventions (posting vs. triggering), lookup scopes (static vs. dynamic), argument passing, overloading, and overriding.
* [Embedded and Dynamic SQL](references/embedded_and_dynamic_sql.md): Database interaction, default transaction object `SQLCA`, and the four formats of Dynamic SQL (`SQLSA` and `SQLDA`).

---

## File Extensions

PowerBuilder export files typically use the following extensions to represent specific objects:
* `.sra`: Application Object
* `.srw`: Window Object
* `.sru`: User Object
* `.srm`: Menu Object
* `.srf`: Function Object
* `.srs`: Structure Object
* `.srd`: DataWindow Object

---

## Syntax Basics

### Comments
* Single-line comments start with `//`
* Multi-line comments are enclosed in `/*` and `*/`

### Case Sensitivity
PowerScript is case-insensitive. Keywords, variables, and function names are resolved regardless of casing (e.g., `SQLCA`, `sqlca`, and `Sqlca` refer to the same object).

### Continuation and Separation
* **Statement Continuation:** Use an ampersand (`&`) as the last non-white character on a line to continue a statement onto the next line.
* **Statement Separation:** Use a semicolon (`;`) to combine multiple statements on a single line.

---

## Control Flow Statements

### Conditionals
```powerscript
if condition then
   // statements
elseif condition then
   // statements
else
   // statements
end if
```

### Choose Case
```powerscript
choose case expression
   case value
      // statements
   case value1 to value2
      // statements
   case is > value3
      // statements
   case else
      // statements
end choose
```

### Loops

#### For Loop
```powerscript
for variable = start to end [step increment]
   // statements
next
```

#### Do Loop (Pre-test)
```powerscript
do while condition
   // statements
loop
```

#### Do Loop (Post-test)
```powerscript
do
   // statements
loop until condition
```
