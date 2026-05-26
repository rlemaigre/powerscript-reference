# PowerScript Functions and Events

This document details the calling mechanisms, argument passing conventions, lookup types, and inheritance behaviors of functions and events in PowerScript.

## Calling Mechanics: Triggering vs. Posting

When calling functions and events, you can specify whether they execute immediately (Trigger) or asynchronously (Post).

### Triggering (Immediate Execution)
* **Keyword:** `TRIGGER` (Default)
* **Behavior:** The function or event executes immediately. The calling script halts, waits for the called script to complete, and then resumes.
* **Return Value:** The return value is available for immediate use in the calling script.
* **Example:**
```powerscript
integer li_result
li_result = w_main.uf_calculate(10, 20)
```

### Posting (Deferred Execution)
* **Keyword:** `POST`
* **Behavior:** The function or event call is appended to the message queue and executed in its turn (typically after the current script finishes executing).
* **Return Value:** No return value is available to the caller. Posting effectively turns the function or event call into a statement.
* **Restrictions:**
  * Cannot be used as an operand in an expression.
  * Cannot be passed as an argument to another function.
  * Can only be used on the final call of a cascaded dot-notation sequence.
* **Example:**
```powerscript
w_main.POST uf_refresh_ui()  // Safe deferred refresh
```

---

## Lookup Types: Static vs. Dynamic Calls

You can control when PowerBuilder resolves function and event names by specifying static or dynamic lookup.

### Static Call (Default)
* **Keyword:** `STATIC` (Default)
* **Behavior:** Strongly typed. The function or event must exist in the object (or its ancestor) at compile time; otherwise, a compilation error occurs.
* **Polymorphism:** Although matched at compile time, if a descendant overrides the function, the descendant's version is executed at runtime.

### Dynamic Call
* **Keyword:** `DYNAMIC`
* **Behavior:** Weakly typed. The function or event does not need to exist at compile time. Resolving and binding are deferred to runtime.
* **Disadvantages:**
  * **Performance:** Slower because lookup is performed dynamically at runtime.
  * **Safety:** Bypasses compiler type checking, which can lead to runtime execution errors.
* **Error Handling:**
  * Calling a non-existent dynamic function causes runtime **Error 65: Dynamic function not found**.
  * Calling a non-existent dynamic event without looking for a return value fails **silently** without generating an error.
  * Looking for a return value on a dynamic event that does not exist returns `NULL` (assigned to an `Any` variable). If assigned to a specific datatype (e.g. `integer`), it will throw **Error 19: Cannot convert Any in Any variable to datatype**.
* **Example:**
```powerscript
// Safe dynamic execution wrapped in a try-catch block
TRY
   any la_result
   la_result = guo_data.DYNAMIC uf_custom_logic()
CATCH (RuntimeError er)
   // Handle Error 65 or other lookup issues
END TRY
```

---

## Argument Passing Conventions

Arguments can be passed to functions and events in three ways:

| Passing Method | Description | Affected Variables |
| :--- | :--- | :--- |
| `By Value` | Passes a copy of the variable. | Changes affect the local copy only. |
| `By Reference` | Passes a pointer to the original variable. | Changes affect the original variable in the calling script. |
| `Read-only` | Passes the variable as a constant. | Modifications are prohibited and cause compile-time errors. |

### Performance Optimization with Read-only
Passing large datatypes (`string`, `blob`, `date`, `time`, and `datetime`) as `read-only` provides a performance advantage because it avoids creating a copy of the data (which would occur if passed by value).

### Object Arguments
* **Reference Semantics:** Whether passed by value, reference, or read-only, PowerBuilder passes a reference pointing to the original object.
  * **By Value:** Passes a copy of the object reference pointer. You can reassign the local reference to another object without affecting the caller's variable, but modifications to the object's properties affect the original object.
  * **By Reference:** Passes a pointer to the caller's reference variable. Reassigning the reference to another object updates the caller's variable to point to the new object.
  * **Read-only:** Passes the reference as a constant. You cannot reassign the reference variable to point to another object, but you can still modify the object's properties.

### Structure Arguments
Structures behave like primitive variables. Passing by value copies the entire structure; passing by reference passes a pointer to the structure.

### Array Arguments
* In the function signature, you must include brackets (e.g., `intarray[]` or `intarray[10]`).
* In the function call, you omit the brackets to pass the entire array:
```powerscript
integer li_arr[5]
uf_process_array(li_arr)  // Call without brackets
```

---

## Inheritance: Overloading, Overriding, and Extending

Inherited functions and events behave differently when refined in descendant objects.

### Overloading Functions
* **Definition:** Defining multiple functions with the same name but different argument lists.
* **Scope:** Supported for object instance functions only. Global functions cannot be overloaded.
* **Caution:** Avoid overloading functions with related numeric datatypes (e.g. `double` vs `real`) due to implicit datatype promotion rules, which can make it ambiguous which function is selected at runtime.

### Overriding Functions
* **Definition:** Defining a function in a descendant class with the exact same name and argument list as an ancestor function.
* **Execution:** The descendant's version replaces the ancestor's version.
* **Calling Ancestor:** You can invoke the overridden ancestor version using the scope resolution operator (`::`) or `Super`:
```powerscript
Super::uf_calculate(x, y)
```

### Extending vs. Overriding Events
* **Extending (Default):** The ancestor event script is executed first, followed by the descendant event script.
* **Overriding:** The descendant event script replaces the ancestor event script entirely.
* **Super Pronoun:** You can use `Super::EVENT EventName()` to explicitly invoke the ancestor event script within an overridden or extended event.
