# Opening nested objects

Because you can specify path information within an OLE storage with a backslash as the separator, you can open a deeply nested object with a single call to Open. However, there is no error checking for the path you specify and if the Open fails, you will not know why. It is strongly recommended that you open each object in the path until you get to the one you want.
