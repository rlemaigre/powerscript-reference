# On Windows

You can specify command line arguments when you use the Run command from the Start menu or as part of the Target specification when you define a shortcut for your application.



There is no way to specify command line values when you are testing your application in the development environment.



In other events and functions, you can call the CommandParm function to get the command line arguments.



For an example of parsing the string in commandline, see CommandParm. Examples



This example populates the SQLCA global variable from the application's initialization file, connects to the database, and opens the main window:



/* Populate SQLCA from current myapp.ini settings */ SQLCA.DBMS = ProfileString("myapp.ini", "database", &



"dbms", "") SQLCA.Database = ProfileString("myapp.ini", & "database", "database", "") SQLCA.Userid = ProfileString("myapp.ini", "database", & "userid", "") SQLCA.DBPass = ProfileString("myapp.ini", "database", & "dbpass", "") SQLCA.Logid = ProfileString("myapp.ini", "database", & "logid", "") SQLCA.Logpass = ProfileString("myapp.ini", & "database", "LogPassWord", "") SQLCA.Servername = ProfileString("myapp.ini", & "database", "servername", "") SQLCA.DBParm = ProfileString("myapp.ini", "database", &



"dbparm", "") CONNECT; IF SQLCA.Sqlcode <> 0 THEN



MessageBox("Cannot Connect to Database", & SQLCA.SQLErrText)



RETURN END IF /* Open MDI frame window */ Open(w_genapp_frame)



See also Close



- 9.73.2 Syntax 2: For windows Description




Occurs when a window is opened by one of the Open functions. The event occurs after the window has been opened but before it is displayed.
