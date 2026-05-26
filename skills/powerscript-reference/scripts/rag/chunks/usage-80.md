# Usage

You cannot post events to the event queue for an application object. Use TriggerEvent instead.



You cannot post or trigger events for objects that do not have events, such as drawing objects. You cannot post or trigger events in a batch application that has no user interface because the application has no event queue.



After you call PostEvent, check the return code to determine whether PostEvent succeeded. You can pass information to the event script with the word and long arguments. The information is stored in the Message object. In your script, you can reference the WordParm and LongParm fields of the Message object to access the information. Note that the Message object is saved and restored just before the posted event script runs so that the information you passed is available even if other code has used the Message object too. If you have specified a string for long, you can access it in the triggered event by using the String function with the keyword "address" as the format parameter. (Note that PowerBuilder has stored the string at an arbitrary memory location and you are relying on nothing else having altered the pointer or the stored string.) Your event script might begin as follows:



string PassedString PassedString = String(Message.LongParm, "address")



TriggerEvent and PostEvent are useful for preventing duplication of code. If two controls perform the same task, you can use PostEvent in one control's event script to execute the other's script, instead of repeating the code in two places. For example, if both a button and a menu delete data, the button's Clicked script can perform the deletion and the menu's Clicked event script can post an event that runs the button's Clicked event script.



Choosing PostEvent or TriggerEvent Both PostEvent and TriggerEvent cause event scripts to be executed. PostEvent is asynchronous; it adds the event to the end of an object's event queue. TriggerEvent is synchronous; the event is triggered immediately. Use PostEvent when you want the current event script to complete before the posted event script runs. TriggerEvent interrupts the current script to run the triggered event's script. Use it when you need to interrupt a process, such as canceling printing. If the function is the last line in an event script and there are no other events pending, PostEvent and TriggerEvent have the same effect. Events and messages in Windows Both PostEvent and TriggerEvent cause a script associated with an event to be executed. However, these functions do not send the actual event message. This is important when you are choosing the target object and event. The following background information explains this concept. Many PowerBuilder functions send Windows messages, which in turn trigger events and run scripts. For example, the Close function sends a Windows close message (WM_CLOSE). PowerBuilder maps the message to its internal close message (PBM_CLOSE), then runs the Close event's script and closes the window. If you use TriggerEvent or PostEvent with Close! as the argument, PowerBuilder runs the Close event's script but it does not close the window because it did not receive the close message. Therefore, the choice of which event to trigger is important. If you trigger the Clicked! event for a button whose script calls the Close function, PowerBuilder runs the Close event's script and closes the window.



Use Post or Send when you want to trigger system events that are not PowerBuilder-defined events.
