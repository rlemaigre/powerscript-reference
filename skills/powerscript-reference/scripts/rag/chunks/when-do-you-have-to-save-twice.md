# When do you have to save twice?

If you create a storage object variable and then open that object in an OLE control, you need to call Save twice to write changed OLE information to disk: once to save from the object in the control to the storage, and again to save the storage to its associated file.
