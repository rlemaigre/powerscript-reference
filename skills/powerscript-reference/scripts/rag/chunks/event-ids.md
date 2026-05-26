# Event IDs

An event ID connects an event to a system message. Events that can be triggered by user actions or other system activity have event IDs. In PowerBuilder's objects, PowerBuilder defines events for commonly used event IDs. These events are documented in this chapter. You can define your own events for other system messages using the event IDs listed in the Event Declaration dialog box.



Events without IDs Some system events, such as the application object's Open event, do not have an event ID. They are associated with PowerBuilder activity, not system activity. PowerBuilder triggers them itself when appropriate. Arguments System-triggered events Each system event has its own list of zero or more arguments. When PowerBuilder triggers the event in response to a system message, it supplies values for the arguments, which become available in the event script. Events you trigger



If you trigger a system event in another event script, you specify the expected arguments. For example, in the Clicked event for a window, you can trigger the DoubleClicked event with this statement, passing its flags, xpos, and ypos arguments on to the DoubleClicked event.



w_main.EVENT DoubleClicked(flags, xpos, ypos)



Because DoubleClicked is a system event, the argument list is fixed -- you cannot supply additional arguments of your own.
