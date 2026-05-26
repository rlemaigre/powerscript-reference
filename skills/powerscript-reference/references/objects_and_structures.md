# PowerScript Objects and Structures

This document details the definition, allocation, inheritance, and assignment mechanics for structures and objects in PowerScript.

## Structures

A structure is a collection of one or more related variables (members) grouped under a single name. Members can be of standard datatypes, object types, or other structures.

### Declaration and Access
* **Declaration:** Once a structure type is defined (using the Structure painter), variables of that structure type can be declared locally, as instance variables, or globally:
```powerscript
str_emp_data lstr_emp
```
* **Member Access:** Structure members are accessed using dot notation:
```powerscript
lstr_emp.emp_id = 100
lstr_emp.emp_name = "Smith"
```

### Assignment Behavior
* **Pass-by-Value (Copy):** Structures behave like primitive variables. Assigning one structure variable to another copies all values from the source structure to the target structure. Subsequent changes to one do not affect the other:
```powerscript
str_emp_data lstr_emp1, lstr_emp2
lstr_emp1.emp_id = 100
lstr_emp2 = lstr_emp1     // lstr_emp2 gets a full copy of the data
lstr_emp2.emp_id = 200     // lstr_emp1.emp_id remains 100
```

---

## Objects

Objects are instances of classes (e.g., Windows, Menus, Application objects, and User Objects). In PowerScript, class references are pointers (object references) rather than containing the object's memory directly (except for autoinstantiated objects).

### Non-Autoinstantiated Objects (Standard)
Most complex objects (like Windows and custom visual or non-visual user objects) are non-autoinstantiated.
* **Allocation (`CREATE`):** You must explicitly instantiate the object using the `CREATE` statement. Declaring the object variable only creates an empty reference (pointer).
```powerscript
uo_calculator luo_calc
luo_calc = CREATE uo_calculator  // Instantiates the object in memory
```
* **Destruction (`DESTROY`):** When you are finished with the object, you should explicitly release its memory using `DESTROY` to avoid memory leaks:
```powerscript
DESTROY luo_calc
```
* **Reference Semantics:** Assigning a non-autoinstantiated object to another variable copies the *reference* (pointer), not the object's contents. Both variables then point to the same object instance:
```powerscript
uo_calculator luo_calc1, luo_calc2
luo_calc1 = CREATE uo_calculator
luo_calc2 = luo_calc1             // Both point to the same calculator instance
luo_calc2.ii_value = 50
// luo_calc1.ii_value is now 50
```

### Autoinstantiated User Objects
Autoinstantiated user objects are custom non-visual user objects that have the "Autoinstantiate" property enabled.
* **Automatic Lifecycle:** They do not require explicit `CREATE` or `DESTROY` statements. Memory is allocated automatically when the variable goes into scope, and freed when it goes out of scope.
* **Value Semantics:** Autoinstantiated objects behave like structures. Assigning one autoinstantiated object to another copies all internal variables (data members) to the target object.
```powerscript
// uo_auto_data is defined as autoinstantiated
uo_auto_data luo_data1, luo_data2
luo_data1.is_name = "Alice"
luo_data2 = luo_data1             // Copies all fields from luo_data1 to luo_data2
luo_data2.is_name = "Bob"         // luo_data1.is_name remains "Alice"
```

---

## Inheritance: Ancestors and Descendants

PowerBuilder supports object-oriented inheritance for windows, menus, and user objects.
* **Ancestor:** The base class definition containing common properties, controls, variables, functions, and events.
* **Descendant:** The inherited class that inherits all members of the ancestor. A descendant can:
  * Reference ancestor properties and variables.
  * Overload or override ancestor functions.
  * Extend or override ancestor events.
  * Override ancestor controls (visual layouts).
* **Reference Casting:** A variable declared as an ancestor class can hold a reference to any of its descendant classes:
```powerscript
w_ancestor lw_win
lw_win = CREATE w_descendant  // Valid assignment
```

---

## Garbage Collection

PowerBuilder features an automatic garbage collector that manages object memory recovery.
* **Scope:** The garbage collector identifies and destroys objects that are no longer referenced by any active variables or other objects.
* **Best Practice:** While the garbage collector automatically reclaims unreferenced objects, explicitly using `DESTROY` for dynamically created visual objects and non-autoinstantiated objects is recommended to ensure prompt resource release and avoid connection leaks.
