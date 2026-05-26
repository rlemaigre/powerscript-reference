# See also Print

- 10.550.2 Syntax 2: For saving an OLE control to a file Description Saves the object in an OLE control in a storage file. Applies to OLE controls Syntax olecontrol.SaveAs (OLEtargetfile )


- Table 10.678:




|Argument|Description|
|---|---|
|olecontrol|The name of the OLE control containing the object you want to save.|
|OLEtargetfile|A string specifying the name of an OLE storage file. The file can already exist. OLEtargetfile can include a path, as well as information about where to store the object in the file's internal structure.|



When you call SaveAs for an OLE control, it closes the current connection between the OLE object and its storage, either file or storage object. It establishes a new connection with the new storage, which will be the target of subsequent calls to the Save function.



Examples This example saves the object in the control ole_1:



integer result result = ole_1.SaveAs("c:\ole\expense.ole")



See also Open Save



- 10.550.3 Syntax 3: For saving an OLE control to an OLE storage Description Saves the object in an OLE control to an OLE storage object in memory. Applies to OLE controls Syntax olecontrol.SaveAs ( targetstorage, substoragename )


- Table 10.679:




|Argument|Description|
|---|---|
|olecontrol|The name of the OLE control containing the object you want to save.|
|targetstorage|The name of an object variable of OLEStorage in which to store the object in olecontrol.|
|substoragename|A string whose value is the name of a substorage within targetstorage. If substorage does not exist, SaveAs creates it.|



When you call SaveAs for an OLE control, it closes the current connection between the OLE object and its storage, either file or storage object. It establishes a new connection with the new storage, which will be the target of subsequent calls to the Save function.



Examples This example saves the object in the control ole_1 in the storage variable stg_stuff:



integer result result = ole_1.SaveAs(stg_stuff)



See also Open Save



- 10.550.4 Syntax 4: For saving an OLE storage object to a file Description




Saves an OLE storage object to a file. If OLE controls have opened the OLE storage object, this syntax of SaveAs puts them in a saved state too.



Applies to OLE storage objects Syntax



olestorage.SaveAs (OLEtargetfile )
