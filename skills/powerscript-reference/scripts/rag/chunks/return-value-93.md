# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, PrintScreen returns null.



Examples This statement prints the current screen image in its original size at location 500, 1000:



long Job Job = PrintOpen() PrintScreen(Job, 500,1000) PrintClose(Job)



See also Print PrintClose PrintOpen
