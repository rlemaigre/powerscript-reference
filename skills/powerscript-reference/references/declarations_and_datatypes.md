# PowerScript Declarations and Datatypes

This document details the PowerScript type system, scopes, array structures, and declaration syntax based on the PowerBuilder reference guidelines.

## Datatypes

PowerScript supports standard, system object, and enumerated datatypes, as well as the special `Any` type.

### Standard Datatypes

| Datatype | Description | Range / Specification |
| :--- | :--- | :--- |
| `boolean` | Logical values | `true` or `false` |
| `blob` | Binary Large Object | Variable-length binary data |
| `char` / `character` | Single character | 16-bit Unicode character (in modern PB versions) |
| `date` | Date values | Year, month, and day |
| `time` | Time values | Hour, minute, second, and fraction of a second (24-hour format) |
| `datetime` | Combined date and time | Combination of date and time structures |
| `decimal` or `dec` | Signed decimal numbers | Up to 28 digits of precision. Precision can be specified in brackets, e.g., `dec{4} ld_val` |
| `double` | Signed floating-point | 15 digits of precision |
| `real` | Signed floating-point | 6 digits of precision |
| `integer` or `int` | 16-bit signed integer | -32,768 to 32,767 |
| `long` | 32-bit signed integer | -2,147,483,648 to 2,147,483,647 |
| `longlong` | 64-bit signed integer | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| `string` | Variable-length text | Unicode or ANSI character strings |
| `unsignedinteger` / `uint` | 16-bit unsigned integer | 0 to 65,535 |
| `unsignedlong` / `ulong` | 32-bit unsigned integer | 0 to 4,294,967,295 |

### The Any Datatype
The `Any` datatype is a generic datatype that can hold any type of value, including standard types, structures, arrays, and objects.
* **Type Resolution:** It is resolved at runtime.
* **Conversion:** Assigning a value from an `Any` variable to a specific datatype variable requires that the runtime value be compatible with the target type; otherwise, a runtime error occurs.

### System Object Datatypes
Represent PowerBuilder built-in classes and objects (e.g., `Window`, `CommandButton`, `Transaction`, `DataWindowChild`).

### Enumerated Datatypes
Enumerated values represent predefined sets of constant values. In PowerScript, enumerated values always end with an exclamation mark (`!`), for example:
* `TypeInteger!`
* `TypeString!`
* `Left!`
* `Center!`

---

## Declarations

### Variable Declaration Syntax
The general syntax for declaring a variable is:
```powerscript
{ access-right } { readaccess } { writeaccess } datatype variablename { = initial-value }
```

### Scopes
PowerScript variables can be declared with different scopes depending on where they are declared:
1. **Local:** Declared within a function or event script. Available only within that script.
2. **Instance:** Associated with a specific object instance (e.g., a window or user object). Declared in the instance variables editor.
3. **Shared:** Shared by all instances of a class. The variable persists after the object instance is closed.
4. **Global:** Declared globally. Accessible anywhere in the application.

### Instance Access Scopes and Modifiers
For instance variables, access controls determine visibility (who can see the variable name) and operational permissions (who can read/write).

#### Access Rights (Visibility Scopes)
* `PUBLIC` (Default): Any script in the application can refer to the variable. Outside the object, it is accessed using dot notation: `object.variable`.
* `PROTECTED`: Only scripts for the declaring object and its descendants can refer to the variable.
* `PRIVATE`: Only scripts for the declaring object itself can refer to the variable. Descendants cannot access it.

#### Operational Modifiers
These keywords restrict read or write access relative to the visibility scope. They are placed after the access right.

* **Read Access Modifiers:**
  * `PROTECTEDREAD`: Only scripts for the object and its descendants can read the variable.
  * `PRIVATEREAD`: Only scripts for the object itself can read the variable.
* **Write Access Modifiers:**
  * `PROTECTEDWRITE`: Only scripts for the object and its descendants can write to the variable.
  * `PRIVATEWRITE`: Only scripts for the object itself can write to the variable.

*Note: You cannot add modifiers to `PRIVATE` visibility, as it is already fully restricted.*

#### Examples:
```powerscript
public protectedwrite integer ii_count          // Accessible globally, but only writeable by ancestor/descendants
protected privatewrite string is_label          // Read/write by descendants; only writeable by declaring class
public privateread privatewrite integer ii_res  // Declared at public level, but read/write restricted to declaring class
```

#### Grouped Access Declarations
Declarations can be grouped using access-right labels:
```powerscript
Private:
   integer ii_a = 10
   string is_name
Protected:
   integer ii_units
   privatewrite double idb_results
Public:
   integer ii_weight
   private integer ii_override_test   // Overrides the Public label for this line only
```

---

## Constants

Constants are variables of standard datatypes that are assigned a fixed value at compile time.
* **Syntax:** `CONSTANT { access } datatype constname = value`
* **Requirements:** An initial value is mandatory.
* **Restrictions:** A constant cannot be reassigned or overridden in descendant classes.
* **Example:**
```powerscript
constant string LS_HOMECITY = "Boston"
constant real LR_PI = 3.14159265
```

---

## Arrays

An array is an indexed collection of elements of a single datatype.

### Variable-Size (Unbounded) Arrays
* **Syntax:** `datatype variablename[ ]`
* **Properties:** One-dimensional only. Subscript bounds are dynamic and allocate memory as values are assigned.
* **Lower Bound:** Always `1`. Subscript ranges with `TO` are not supported.
* **Memory Allocation Behavior:** Assigning to an index beyond the current size automatically expands the array, filling intermediate elements with default values for the datatype.
* **Example:**
```powerscript
integer li_stats[ ]
li_stats[100] = 5  // Allocates elements 1 to 100, sets 1-99 to 0, 100 to 5
```

### Fixed-Size (Bounded) Arrays
* **Syntax:** `datatype variablename[ size ]` or `datatype variablename[ lowbound TO upperbound ]`
* **Properties:** Can be one-dimensional or multidimensional.
* **Subscript Bounds:** You can define arbitrary lower bounds using `TO`. The upper bound must be greater than the lower bound.
* **Example:**
```powerscript
real lr_rate[2 to 5]     // Elements: lr_rate[2], lr_rate[3], lr_rate[4], lr_rate[5]
string ls_test[-2 to 2]  // Index bounds from -2 to 2 (5 elements total)
```

### Multidimensional Arrays
* Multidimensional arrays must be fixed-size.
* **Syntax:** `datatype variablename[ d1, d2, ..., dn ]`
* **Storage Layout:** Laid out in **column-major order** (the first subscript varies fastest).
* **Linearization:** During assignment to a one-dimensional array, the multidimensional array is linearized in column-major order.
* **Example:**
```powerscript
integer li_score[2, 3]  // Elements are ordered: [1,1], [2,1], [1,2], [2,2], [1,3], [2,3]
```

### Array Assignments
* **To an Unbounded Array:** The target array is resized to match the source array.
* **To a Bounded Array (Smaller Source):** Source values are copied; remaining elements in the target are padded with default values.
* **To a Bounded Array (Larger Source):** Source values are copied until the target array is full; extra source elements are ignored.
* **Multidimensional Assignment:** Direct assignment between multidimensional arrays is allowed only if their dimensions match exactly. Otherwise, it must be linearized through a one-dimensional intermediate array.
* **Addressing Errors:** Accessing indices outside declared bounds (for fixed arrays) or below the lower bound or above the maximum assigned index (for variable-size arrays) causes a runtime execution error.
```powerscript
integer a[2, 10], b[4, 10]
a = b  // Compiler error (mismatched dimensions)
```
