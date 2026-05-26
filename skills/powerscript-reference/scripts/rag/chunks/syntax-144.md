# Syntax

Yield ( )



Return value Boolean. Returns true if it pulls messages from the message queue and false if there are no messages. Usage



Include Yield within a loop so that other processes can happen. For example, use Yield to allow end users to interrupt a loop. By yielding control, you allow the user time to click on a cancel button in another window. Then code in the loop can check whether a global variable's status has changed. You can also use Yield in a loop in which you are waiting for something to finish so that other processing can take place, in either your or some other application.
