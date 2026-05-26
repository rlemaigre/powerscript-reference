# Event ID

- Table 9.258:




|Event ID|Objects|
|---|---|
|pbm_timer|Timing or Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples These examples show how to use a timing object's Timer event and a window's Timer event. Using a timing object



This example uses a timing object to refresh a list of customers retrieved from a database at specified intervals. The main window of the application, w_main, contains a DataWindow control displaying a list of customers and two buttons, Start Timer and Retrieve. The window's Open event connects to the database:



CONNECT using SQLCA; IF sqlca.sqlcode <> 0 THEN



MessageBox("Database Connection", &



sqlca.sqlerrtext) END IF



The following code in the clicked event of the Start Timer button creates an instance of a timing object, nvo_timer, and opens a response window to obtain a timing interval. Then, it starts the timer with the specified interval:



MyTimer = CREATE nvo_timer open(w_interval) MyTimer.Start(d_interval)



MessageBox("Timer", "Timer Started. Interval is " &



+ string(MyTimer.interval) + " seconds")



In the timing object's Constructor event, the following code creates an instance of a datastore:



ds_datastore = CREATE datastore



The timing object's Timer event calls an object-level function called refresh_custlist that refreshes the datastore. This is the code for refresh_custlist:



long ll_rowcount ds_datastore.dataobject = "d_customers" ds_datastore.SetTransObject (SQLCA) ll_rowcount = ds_datastore.Retrieve() RETURN ll_rowcount



The Retrieve button on w_main simply shares the data from the DataStore with the DataWindow control:



ds_datastore.ShareData(dw_1)



Using a window object



This example causes the current time to be displayed in a StaticText control in a window. Calling Timer in the window's Open event script starts the timer. The script for the Timer event refreshes the displayed time.



In the window's Open event script, this code displays the time initially and starts the timer:



st_time.Text = String(Now(), "hh:mm") Timer(60)



In the window's Timer event, which is triggered every minute, this code displays the current time in the StaticText st_time:



st_time.Text = String(Now(), "hh:mm")
