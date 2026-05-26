# Referring to instance variables

You can refer to an instance variable in a script if there is an instance of the object open in the application. Depending on the situation, you might need to qualify the name of the instance variable with the name of the object defining it.



Using unqualified names



You can refer to instance variables without qualifying them with the object name in the following cases:



- • For application-level variables, in scripts for the application object
- • For window-level variables, in scripts for the window itself and in scripts for controls in that window
- • For user-object-level variables, in scripts for the user object itself and in scripts for controls in that user object
- • For menu-level variables, in scripts for a menu object, either the highest-level menu or scripts for the menu objects included as items on the menu




For example, if w_emp has an instance variable EmpID, then you can reference EmpID without qualification in any script for w_emp or its controls as follows:



sle_id.Text = EmpID



Using qualified names



In all other cases, you need to qualify the name of the instance variable with the name of the object using dot notation:



object.instancevariable



This requirement applies only to Public instance variables. You cannot reference Private instance variables outside the object at all, qualified or not.



For example, to refer to the w_emp instance variable EmpID from a script outside the window, you need to qualify the variable with the window name:



sle_ID.Text = w_emp.EmpID



There is another situation in which references must be qualified. Suppose that w_emp has an instance variable EmpID and that in w_emp there is a CommandButton that declares a local variable EmpID in its Clicked script. In that script, you must qualify all references to the instance variable:



Parent.EmpID



Using pronouns as name qualifiers



To avoid ambiguity when referring to variables, you might decide to always use qualified names for object variables. Qualified names leave no doubt about whether a variable is local, instance, or shared.



To write generic code but still use qualified names, you can use the pronouns This and Parent to refer to objects. Pronouns keep a script general by allowing you to refer to the object without naming it specifically.



Window variables in window scripts



In a window script, use the pronoun This to qualify the name of a window instance variable. For example, if a window has an instance variable called index, then the following statements are equivalent in a script for that window, as long as there is no local or global variable named index:



index = 5 This.index = 5



Window variables in control scripts



In a script for a control in a window, use the pronoun Parent to qualify the name of a window instance variable -- the window is the parent of the control. In this example, the two statements are equivalent in a script for a control in that window, as long as there is no local or global variable named "index":



index = 5 Parent.index = 5



Naming errors



If a local or global variable exists with the name "index", then the unqualified name refers to the local or global variable. It is a programming error if you meant to refer to the object variable. You get an informational message from the compiler if you use the same name for instance and global variables.



- 3.1.3 Syntax of a variable declaration Simple syntax




In its simplest form, a PowerScript variable declaration requires only two parts: the datatype and the variable name. For example:



datatype variablename
