# Usage

You can use RespondRemote when the PowerBuilder application is the DDE server or DDE client application.



You usually call RespondRemote after these functions: GetCommandDDE GetCommandDDEOrigin GetDataDDE GetDataDDEOrigin For more information about PowerBuilder as a client, see OpenChannel and ExecRemote. For more information about PowerBuilder as a server, see StartServerDDE. Examples



In a script for the HotLinkAlarm event, these statements tell a remote application named Gateway that its data was successfully received:



String Applname, Topic, Item, Value GetDataDDEOrigin(Applname, Topic, Item) IF Applname = "Gateway" THEN



IF GetDataDDE(Value) = 1 THEN



RespondRemote(TRUE) END IF



END IF



See also GetCommandDDE GetCommandDDEOrigin GetDataDDE GetDataDDEOrigin
