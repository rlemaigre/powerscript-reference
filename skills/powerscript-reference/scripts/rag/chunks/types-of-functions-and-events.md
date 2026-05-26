# Types of functions and events

PowerBuilder objects have built-in events and functions. You can enhance objects with your own user-defined functions and events, and you can declare local external functions for an object. The PowerScript language also has system functions that are not associated with any object. You can define your own global functions and declare external functions and remote procedure calls.



The following table shows the different types of functions and events.



- Table 6.1: Types of functions and events




|Catego|ryItem|Definition|
|---|---|---|
|Events|Event|An action in an object or control that can start the execution of a script. A user can initiate an event by an action such as clicking an object or entering data, or a statement in another script can initiate the event.|
| |User event|An event you define to add functionality to an object. You specify the arguments, return value, and whether the event is mapped to a system message. For information about defining user events, see Section 8.2, “Defining user events” in Users Guide.|
| |System or built-in event|An event that is part of an object's PowerBuilder definition. System events are usually triggered by user actions or system messages. PowerBuilder passes a predefined set of arguments for use in the event's script. System events either return a long or do not have a return value.|
|Functio|nsFunction|A program or routine that performs specific processing.|
| |System function|A built-in PowerScript function that is not associated with an object.|
| |Object function|A function that is part of an object's definition. PowerBuilder has many predefined object functions and you can define your own.|
| |User-defined function|A function you define. You define global functions in the Function painter and object functions in other painters with Script views.|



|Catego|ryItem|Definition|
|---|---|---|
| |Global function|A function you define that can be called from any script. PowerScript's system functions are globally accessible, but they have a different place in the search order.|
| |Local external function|An external function that belongs to an object. You declare it in the Window or User Object painter. Its definition is in another library.|
| |Global external function|An external function that you declare in any painter, making it globally accessible. Its definition is in another library.|
| |Remote procedure call (RPC)|A stored procedure in a database that you can call from a script. The declaration for an RPC can be global or local (belonging to an object). The definition for the procedure is in the database.|



Comparing functions and events Functions and events have the following similarities:



- • Both functions and events have arguments and return values.
- • You can call object functions and events dynamically or statically. Global or system functions cannot be called dynamically.
- • You can post or trigger a function or event call. Functions and events have the following differences:
- • Functions can be global or part of an object's definition. Events are associated only with objects.
- • PowerBuilder uses different search orders when looking for events and functions.
- • A call to an undefined function triggers an error. A call to an undefined event does not trigger an error.
- • Object-level functions can be overloaded. Events (and global functions) cannot be overloaded.
- • When you define a function, you can restrict access to it. You cannot add scope restrictions when you define events.
- • When functions are inherited, you can extend the ancestor function by calling it in the descendant's script. You can also override the function definition. When events are inherited, the scripts for those events are extended by default. You can choose to extend or override the script.
