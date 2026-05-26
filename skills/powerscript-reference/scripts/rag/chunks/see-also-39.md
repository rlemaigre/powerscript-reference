# See also

Open Close Reset



- 10.425 Now Description Obtains the current time based on the system time of the client machine. Syntax Now ( ) Return value Time. Returns the current time based on the system time of the client machine. Usage




Use Now to compare a time to the system time or to display the system time on the screen. You can use the Timer function to trigger a Timer event which causes Now to refresh the display.



Examples This statement returns the current system time.



Now()



This example displays the current time in the StaticText st_time. It keeps the time up-to-date by setting a timer that triggers a Timer event every 60 seconds. Code in the window's Open event displays the initial time and starts the timer. Code in the Timer event displays the time again.



The following code appears in the window's Open event script:



st_time.Text = String(Now(), "hh:mm") Timer(60)



A single line in the Timer event script refreshes the time display:



st_time.Text = String(Now(), "hh:mm")



See also Today Now method for DataWindows in Section 2.4.83, “Now” in DataWindow Reference.
