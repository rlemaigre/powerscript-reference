# Examples

- Example 1




Suppose you have a distributed application in which the local client performs some processing, such as calculating the value of a stock portfolio, based on values in a database. The client requests a user object on a remote server to retrieve the data values from the database.



Create a standard class user object on the server called uo_timer, inherited from the Timing system object, and code its Timer event to refresh the data. Then the following code creates an instance, MyTimer, of the timing object uo_timer. The Start function activates the timer with an interval of 60 seconds so that the request to the server is issued at 60-second intervals:



uo_timer MyTimer MyTimer = CREATE uo_timer MyTimer.Start(60)



- Example 2




The following example uses a timing object as a shared object in a window that has buttons for starting a timer, getting a hit count, stopping the timer, and closing the window. Status is shown in a single line edit called sle_state. The timing object, uo_timing, is a standard class user object inherited from the Timing system object. It has one instance variable that holds the number of times a connection is made:



long il_hits



The timing object uo_timing has three functions:



- • of_connect increments il_hits and returns an integer (this example omits the connection code for simplicity):



il_hits++ // connection code omitted RETURN 1



- • of_hitcount returns the value of il_hits: RETURN il_hits

- • of_resetcounter resets the value of the counter to 0: il_hits = 0




The timer event in uo_timing calls the of_connect function:



integer li_err li_err = This.of_connect() IF li_err <> 1 THEN



MessageBox("Timer Error", "Connection failed ") END IF



When the main window (w_timer) opens, its Open event script registers the uo_timing user object as a shared object:



ErrorReturn result string ls_result



SharedObjectRegister("uo_timing","Timing") result = SharedObjectGet("Timing", iuo_timing) // convert enumerated type to string ls_result = of_converterror(result)



IF result = Success! THEN sle_stat.text = "Object Registered"



ELSE MessageBox("Failed", "SharedObjectGet failed, " &



+ "Status code: "+ls_result) END IF



The Start Timer button starts the timer with an interval of five seconds:



double ld_interval integer li_err



IF (isvalid(iuo_timing)) THEN li_err = iuo_timing.Start(5) ld_interval = iuo_timing.interval sle_2.text = "Timer started. Interval is " &



+ string(ld_interval) + " seconds" // disable Start Timer button THIS.enabled = FALSE



ELSE



sle_2.text = "No timing object" END IF



The Get Hits button calls the of_hitcount function and writes the result in a single line edit:



long ll_hits IF (isvalid(iuo_timing)) THEN



ll_hits = iuo_timing.of_hitcount() sle_hits.text = string(ll_hits)



ELSE sle_hits.text = "" sle_stat.text = "Invalid timing object..."



END IF



The Stop Timer button stops the timer, re-enables the Start Timer button, and resets the hit counter:



integer li_err IF (isvalid(iuo_timing)) THEN



li_err = iuo_timing.Stop() IF li_err = 1 THEN sle_stat.text = "Timer stopped" cb_start.enabled = TRUE iuo_timing.of_resetcounter()



ELSE sle_stat.text = "Error - timer could " &



not be stopped" END IF



ELSE



sle_stat.text = "Error - no timing object" END IF



The Close button checks that the timer has been stopped and closes the window if it has:



IF iuo_timing.running = TRUE THEN MessageBox("Error","Click the Stop Timer " &



+ "button to clean up before closing") ELSE



close(parent) END IF



The Close event for the window unregisters the shared timing object:



SharedObjectUnregister("Timing")



The of_converterror window function converts the ErrorReturn enumerated type to a string. It takes an argument of type ErrorReturn:



string ls_result CHOOSE CASE a_error CASE Success!



ls_result = "The function succeeded" CASE FeatureNotSupportedError!



ls_result = "Not supported on this platform" CASE SharedObjectExistsError!



ls_result = "Instance name already used" CASE MutexCreateError!



ls_result = "Locking mechanism unobtainable" CASE SharedObjectCreateInstanceError!



ls_result = "Object could not be created" CASE SharedObjectCreatePBSessionError!



ls_result = "Could not create context session" CASE SharedObjectNotExistsError!



ls_result = "Instance name not registered" CASE ELSE



ls_result = "Unknown Error Code" END CHOOSE RETURN ls_result



See also Stop
