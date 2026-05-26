# Syntax

Post ( handle, message#, word, long )



- Table 10.589:




|Argument|Description|
|---|---|
|handle|A long whose value is the system handle of a window (that you have created in PowerBuilder or another application) to which you want to post a message.|
|message#|An UnsignedInteger whose value is the system message number of the message you want to post.|
|word|A long whose value is the integer value of the message. If this argument is not used by the message, enter 0.|
|long|The long value of the message or a string.|



Return value Boolean. If any argument's value is null, Post returns null. Usage



Use Post or Send when you want to trigger system events that are not PowerBuilder-defined events. Post is asynchronous; it adds a message to the end of the window's message queue. Send is synchronous; its message triggers an event immediately.



To obtain the handle of a PowerBuilder window, use the Handle function. To trigger PowerBuilder events, use TriggerEvent or PostEvent. These functions run the script associated with the event. They are easier to code and bypass the messaging queue. When you specify a string for long, Post stores a copy of the string and passes a pointer to it. Examples



This statement scrolls the window w_date down one page after all the previous messages in the message queue for the window have been processed:



Post(Handle(w_date), 277, 3, 0)



See also Handle PostEvent Send TriggerEvent



- 10.468 PostData Description Sends the string or blob data with POST method. Applies to HTTPClient object
