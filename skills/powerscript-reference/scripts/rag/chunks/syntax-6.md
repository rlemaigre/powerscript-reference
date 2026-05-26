# Syntax

{ objectname. } ancestorclass ::{ type } { when } name ( { argumentlist } )



The following table describes the arguments used to call functions and events in an object's ancestor.



- Table 6.9: Arguments for calling ancestor functions and events




|Argument|Description|
|---|---|
|objectname (o|Theptional)name of the object whose ancestor contains the function you want to execute.|
|ancestorclass|The name of the ancestor class whose function or event you want to execute. The pronoun Super provides the appropriate reference when ancestorobject is the immediate ancestor of the current object.|
|type (optiona|l)A keyword specifying whether you are calling a function or event. Values are:<br><br>• (Default) FUNCTION<br>• EVENT<br>|
|when (option|al)A keyword specifying whether the function or event should execute immediately or after the current script is finished. Values are:<br><br>• TRIGGER -- (Default) Execute it immediately<br>• POST -- Put it in the object's queue and execute it in its turn, after other pending messages have been handled<br>|
|name|The name of the object function or event you want to call.|
|argumentlist|(optional)The values you want to pass to name. Each value in the list must have a datatype that corresponds to the declared datatype in the function definition.|



Usage The AncestorReturnValue variable When you extend an event script in a descendant object, the compiler automatically generates a local variable called AncestorReturnValue that you can use if you need to know the return value of the ancestor event script. The variable is also generated if you override the ancestor script and use the CALL syntax to call the ancestor event script. The datatype of the AncestorReturnValue variable is always the same as the datatype defined for the return value of the event. The arguments passed to the call come from the arguments that are passed to the event in the descendant object. Extending event scripts



The AncestorReturnValue variable is always available in extended event scripts. When you extend an event script, PowerBuilder generates the following syntax and inserts it at the beginning of the event script:



CALL SUPER::event_name



You only see the statement if you export the syntax of the object or look at it in the Source editor.



The following example illustrates the code you can put in an extended event script:



If AncestorReturnValue = 1 THEN // execute some code ELSE // execute some other code END IF



Overriding event scripts The AncestorReturnValue variable is only available when you override an event script after you call the ancestor event using either of these versions of the CALL syntax:



CALL SUPER::event_name CALL ancestor_name::event_name



The compiler cannot differentiate between the keyword SUPER and the name of the ancestor. The keyword is replaced with the name of the ancestor before the script is compiled.



The AncestorReturnValue variable is only declared and a value assigned when you use the CALL event syntax. It is not declared if you use the new event syntax:



ancestor_name::EVENT event_name( )



You can use the same code in a script that overrides its ancestor event script, but you must insert a CALL statement before you use the AncestorReturnValue variable.



// execute code that does some preliminary processing CALL SUPER::uo_myevent IF AncestorReturnValue = 1 THEN



...



For information about CALL, see CALL. Examples



- Example 1




Suppose a window w_ancestor has an event ue_process. A descendant window has a script for the same event.



This statement in a script in the descendant searches the event chain and calls all appropriate events. If the descendant extends the ancestor script, it calls a script for each ancestor in turn followed by the descendant script. If the descendant overrides the ancestor, it calls the descendant script only:



EVENT ue_process( )



This statement calls the ancestor event only (this script works if the calling script belongs to another object or the descendant window):



w_ancestor::EVENT ue_process( )



- Example 2



You can use the pronoun Super to refer to the ancestor. This statement in a descendant window script or in a script for a control on that window calls the Clicked script in the immediate ancestor of that window.



Super::EVENT Clicked(0, x, y)



- Example 3




These statements call a function wf_myfunc in the ancestor window (presumably, the descendant also has a function called wf_myfunc):



Super::wf_myfunc( ) Super::POST wf_myfunc( )
