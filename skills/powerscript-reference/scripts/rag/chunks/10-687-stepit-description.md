# 10.687 StepIt Description

Increments the current position in a progress bar control by the value specified in the SetStep property of the control.



Applies to Progress bar controls Syntax



control.StepIt ( )



- Table 10.855:




|Argument|Description|
|---|---|
|control|The name of the progress bar|



Return value Integer. Returns 1 if it succeeds and -1 if there is an error. Usage



StepIt causes the position in a progress bar to wrap if the value of the SetStep takes the current position out of range. For example, if the SetStep value is 40, the current position 80, and the range is set from 0 to 100, the position on the redrawn progress bar after you call StepIt is 20.



The SetStep property can have a negative value. The default value for SetStep is 10. Examples This statement adds the SetStep increment to a progress bar control:



HProgressBar.StepIt ( )



See also SetRange



- 10.688 Stop Stop has two syntaxes.


- Table 10.856:



|To|Use|
|---|---|
|Deactivate a timing object|Syntax 1|
|Stop playing an animation|Syntax 2<br><br>|



- 10.688.1 Syntax 1: For deactivating timing objects Description Deactivates a timing object. Applies to Timing objects Syntax timingobject.Stop ( )



Table 10.857:



|Argument|Description|
|---|---|
|timingobject|The name of the timing object you want to deactivate|



Return value Integer. Returns 1 if it succeeds and -1 if the timer is not running or could not be stopped. Usage



Use this function to deactivate a timing object. A stopped timer can be reactivated with the Start function.



Examples This statement stops the timing object instance MyTimer:



MyTimer.Stop()



See also Start



- 10.688.2 Syntax 2: For stopping an animation from playing Description
