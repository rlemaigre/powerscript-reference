# Syntax

SetDataDDE ( string {, applname, topic, item } )



- Table 10.744:




|Argument|Description|
|---|---|
|string|The data you want to send to a DDE client application|
|applname (optiona|l)The DDE name for the client application|
|topic (optional)|A string whose value is the basic data grouping the DDE client application referenced|
|item (optional)|A string (data within topic)|



Return value Integer.



- Returns 1 if it succeeds. If an error occurs, SetDataDDE returns a negative integer. Values are:


- -1 -- Function called in the wrong context
- -2 -- Data not accepted If any argument's value is null, SetDataDDE returns null. Usage




To enable DDE server mode in your PowerBuilder application, call the StartServerDDE function. Then DDE messages from a DDE client trigger events in the PowerBuilder window. It is up to you to decide how your application responds by writing code for those events. When an application requests data of the DDE server, it triggers a RemoteRequest event. You typically call SetDataDDE in the script for a window's RemoteRequest event.



If a client application has established a hot link with a location in your PowerBuilder application, you can call SetDataDDE in an event for the object associated with the location. As a server application, you decide how location names map to the controls in your application. For example, your application can decide that the DDE name loc1 refers to the SingleLineEdit sle_name and a client application can establish a hot link with "loc1." Then in the Modified event for sle_name, you can call SetDataDDE so that the client application



receives changes each time sle_name is changed. Likewise, if loc1 referred to a DataWindow, you can call SetDataDDE in the ItemChanged event for the DataWindow.



The applname argument refers to the client application that has established a channel or a hot link with your application. Topic and item refer to a topic and location recognized by your server application. You only need to specify these arguments to make it clear to the client application who should receive the message and what is being sent.
