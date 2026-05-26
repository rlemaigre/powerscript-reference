# When the Timer event occurs

The interval specified for the Start function is the minimum interval between Timer events. All other posted events occur before the Timer event.



The resolution of the interval depends on your operating system. You can determine what the timing interval is and whether a timer is running by accessing the timing object's Interval and Running properties. These properties are read-only. You must stop and restart a timer in order to change the value of the timing interval.
