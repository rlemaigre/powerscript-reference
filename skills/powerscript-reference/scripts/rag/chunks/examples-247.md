# Examples

This example saves the object in the control ole_1 back to the storage from which it was loaded, either a storage object variable or a file on disk:



integer result result = ole_1.Save()



This example saves a storage object to its file. Olestor_1 is an instance variable of type olestorage:



integer result result = olestor_1.Save()



In a window's Open script, this code creates a storage variable ole_stor, which is declared as an instance variable, and associates it with a storage file that contains several Visio drawings. The script then opens one of the drawings into the control ole_draw. After the user activates and edits the object, the script for a Save button saves the object to the storage and then to the storage's file.



The script for the window's Open event includes:



OLEStorage stg_stor stg_stor = CREATE OLEStorage stg_stor.Open("myvisio.ole") ole_draw.Open(ole_stor, "visio_drawing1")



The script for the Save button's Clicked event is:



integer result result = ole_draw.Save() IF result = 0 THEN ole_stor.Save()



See also Close SaveAs
