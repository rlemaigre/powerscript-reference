# Caution

Do not use this syntax unless you are certain the long argument contains a valid string value.



For more information about events and when to use PostEvent and TriggerEvent, see PostEvent.



To trigger system events that are not PowerBuilder-defined events, use Post or Send, instead of PostEvent and TriggerEvent. Although Send can send messages that trigger PowerBuilder events, as shown below, you have to know the codes for a particular message. It is easier to use the PowerBuilder functions that trigger the desired events.



Equivalent syntax Both of the following statements click the CheckBox cb_OK. The following call to the Send function:



Send(Handle(Parent), 273, 0, Long(Handle(cb_OK), 0))



is equivalent to:



cb_OK.TriggerEvent(Clicked!)
