# Usage

When a DDE client application sends a DDE request, the request includes one of the items you have declared that you support. You determine how your application responds to each of those items.



A window must be open to provide a handle for the DDE conversation. You cannot call StartServerDDE and other DDE functions in an application object's events.



When your application has established itself as a DDE server, other applications can send DDE requests that trigger these events in your application.



- Table 10.853: Events triggered by DDE requests and DDE functions available to each event




|Client action|Event triggered|Functions available|Purpose of function|
|---|---|---|---|
|Sends a request for a hot link|RemoteHotLinkStart| | |
|Sends a command to your application|RemoteExec|GetCommandDDE GetCommandDDEOrigin|Obtain the command Find out what client application sent the command|
|Sends data|RemoteSend|GetDataDDE GetDataDDEOrigin|Obtain the data Find out what client application sent the data|
|Requests data from your server application|RemoteRequest|SetDataDDE RespondRemote|Send the requested data Acknowledge the request|
|Wants to terminate the hot link|RemoteHotLinkStop| | |
