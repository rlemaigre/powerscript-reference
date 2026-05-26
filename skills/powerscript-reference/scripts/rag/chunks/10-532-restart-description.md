# 10.532 Restart Description

Stops the execution of all scripts, closes all windows (without executing the scripts for the Close events), commits and disconnects from the database, restarts the application, and executes the application-level script for the Open event.



Syntax



Restart ( )



Return value Integer. Returns 1 if it succeeds and -1 if it fails. The return value is usually not used. Usage



You can use Restart in the application-level script for the Idle event to restart the application after a period of user inactivity, a typical behavior of kiosk applications.



Examples In the application-level script for the Idle event, this statement restarts the application:



Restart()



See also HALT
