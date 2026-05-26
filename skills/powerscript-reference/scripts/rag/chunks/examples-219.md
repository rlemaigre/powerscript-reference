# Examples

This statement adds the Clicked event to the event queue for CommandButton cb_OK. The event script will be executed after any other pending event scripts are run:



cb_OK.PostEvent(Clicked!)



This statement adds the user-defined event cb_exit_request to the event queue in the parent window:



Parent.PostEvent("cb_exit_request")



This example posts an event for cb_exit_request with an argument and then retrieves that value from the Message object in the event's script.



The first part of the example is code for a button in a window. It adds the user-defined event cb_exit_request to the event queue in the parent window. The value 455 is stored in the Message object for the use of the event's script:



Parent.PostEvent("cb_exit_request", 455, 0)



The second part of the example is the beginning of the cb_exit_request event script, which assigns the value passed in the Message object to a local variable. The script can use the value in whatever way is appropriate to the situation:



integer numarg numarg = Message.WordParm



See also Post Send TriggerEvent
