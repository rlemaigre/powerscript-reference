# PowerScript Operators and Expressions

This document details the operators available in PowerScript, their precedence, and rules governing datatype promotion during expression evaluation.

## Operators

PowerScript provides arithmetic, relational, concatenation, and logical operators.

### Arithmetic Operators
Used to perform mathematical calculations.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `+` | Addition | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication | `a * b` |
| `/` | Division | `a / b` |
| `^` | Exponentiation | `a ^ b` (e.g., `2 ^ 3` is `8`) |

*Note: You must surround the `-` operator with spaces if dashes are allowed in identifiers (the default setting in PowerBuilder). Otherwise, `a-b` is treated as a single variable name instead of subtraction.*

### Relational Operators
Used to compare values. Relational comparisons return a boolean value (`true`, `false`, or `NULL`).

| Operator | Description | Example |
| :--- | :--- | :--- |
| `=` | Equal to | `a = b` |
| `>` | Greater than | `a > b` |
| `<` | Less than | `a < b` |
| `>=` | Greater than or equal to | `a >= b` |
| `<=` | Less than or equal to | `a <= b` |
| `<>` | Not equal to | `a <> b` |

### Concatenation Operator
* **Operator:** `+`
* **Description:** Joins two string or character values together.
* **Example:** `ls_fullname = ls_firstname + " " + ls_lastname`

### Logical Operators
Used to combine boolean expressions.

| Operator | Description |
| :--- | :--- |
| `NOT` | Logical negation |
| `AND` | Logical conjunction |
| `OR` | Logical disjunction |
| `XOR` | Logical exclusive disjunction |

---

## Operator Precedence

PowerScript evaluates expressions using the following precedence hierarchy (from highest to lowest). Operators on the same level are evaluated from left to right:

1. Parentheses: `()`
2. Unary operators: `+` (positive), `-` (negative)
3. Exponentiation: `^`
4. Multiplication and Division: `*`, `/`
5. Addition, Subtraction, and Concatenation: `+`, `-`
6. Relational operators: `=`, `>`, `<`, `>=`, `<=`, `<>`
7. Logical negation: `NOT`
8. Logical conjunction: `AND`
9. Logical disjunction/exclusive disjunction: `OR`, `XOR`

---

## Datatype Promotion Rules

When evaluating expressions, PowerScript automatically promotes datatypes of constants and variables so they can be processed or combined.

### Numeric Promotion
Numeric expression evaluation rules:
* **Division (`/`):** The result of any division operation is always promoted to the `double` datatype, regardless of the operand types (e.g., `5 / 2` yields `2.5` as a `double`).
* **Operator Promotion:** When operands have different numeric datatypes, PowerBuilder promotes the operand with the lower-precision type to match the higher-precision operand before performing the operation.
* **Assignment Conversion:** When assigning the result of a high-precision expression to a lower-precision variable, values are converted. Precision loss or overflow may occur if the value exceeds the target type's range.

### String and Char Promotion
* **Char to String:** When a character value is combined with a string value (e.g., via the `+` operator), the character is promoted to a string.
* **String Functions:** String expressions can be forced into specific types using explicit conversion functions like `String()`, `Char()`, etc.

### Controlling Promotion with Conversion Functions
You can use explicit conversion functions to bypass default type promotions and ensure the correct overload of a function or operator is matched. Common conversion functions include:
* `Integer( expression )`
* `Long( expression )`
* `Dec( expression )`
* `Double( expression )`
* `Real( expression )`
* `String( expression )`
* `Char( expression )`
