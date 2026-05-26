# Tip

To capture movement, write script in the MouseMove or Key events of the window or sheet. (Keyboard activity does not trigger MouseMove events.) Disable the DataWindow control and tab ordering during iterative retrieves so the Idle timer is not reset.



Examples This statement sends an Idle event after five minutes of inactivity:



Idle(300)



This statement turns off idle detection:



Idle(0)



This example shows how to use the Idle event to stop the application and restart it after two minutes of inactivity. This is often used for computers that provide information in a public place.



Include this statement in the script for the application's Open event:



Idle(120) // Sends an Idle event after 2 minutes.



Include these statements in the script for the application's Idle event to terminate the application and then restart it:



// Statements to set the database to the desired // state



... Restart() // Restarts the application



See also Restart Timer
