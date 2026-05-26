# See also

Cancel Repair



- 10.683.2 Syntax 2: For activating timing objects Description Activates a timing object causing a Timer event to occur repeatedly at the specified interval. Applies to Timing objects Syntax timingobject.Start ( interval )


- Table 10.850:




|Argument|Description|
|---|---|
|timingobject|The name of the timing object you want to activate.|



|Argument|Description|
|---|---|
|interval|An expression of type double specifying the number of seconds that you want between timer events. The interval can be a whole number or fraction greater than 0 and less than or equal to 4,294,967 seconds. An interval of 0 is invalid.|



Return value Integer. Returns 1 if it succeeds and -1 if the timer is already running, the interval specified is invalid, or there are no system timers available. Usage



This syntax of the Start function is used to activate a nonvisual timing object. Timing objects can be used to trigger a Timer event that is not associated with a PowerBuilder window, and they are therefore useful for distributed PowerBuilder servers or shared objects that do not have a window for each client connection.



A timing object is a standard class user object inherited from the Timing system object. Once you have created a timing object and coded its timer event, you can create any number of instances of the object within the constraints of your operating system. An operating system supports a fixed number of timers. Some of those timers will already be in use by PowerBuilder and other applications and by the operating system itself.



To activate an instance of the timing object, call the Start function, specifying the interval that you want between Timer events. The Timer event of that instance is triggered as soon as possible after the specified interval, and will continue to be triggered until you call the Stop function on that instance of the timing object or the object is destroyed.
