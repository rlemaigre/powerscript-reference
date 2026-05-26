# Examples

In this example, the client application connects to a server application using the Connection object myconnect:



// Global variable: // connection myconnect long ll_rc myconnect = create connection myconnect.driver = "jaguar" myconnect.location = "Jagserver1:2000" myconnect.application = "PB_pkg_1" myconnect.userID = "bjones" myconnect.password = "mypass" ll_rc = myconnect.ConnectToServer() IF ll_rc <> 0 THEN



MessageBox("Connection failed", ll_rc) END IF



You can enclose the ConnectToServer function in a try-catch block to catch exceptions thrown during the attempt to connect. This example uses SSLServiceProvider and SSLCallBack objects to create a secure connection. An exception or other error in any of the SSLCallback functions raises the CTSSecurity::UserAbortedException. The error-handling code shown in the example displays a message box with the text of the error message, but your code should take additional appropriate action:



SSLServiceProvider sp // set QOP getcontextservice( "SSLServiceProvider", sp ) sp.setglobalproperty( "QOP", "sybpks_simple" ) // set PB callback handler sp.setglobalproperty( "CallbackImpl", &



"uo_sslcallback_handler" )



// connect to the server connection cxn cxn.userid = "jagadmin" cxn.password = "sybase" cxn.driver = "jaguar" cxn.application = "dbgpkg" cxn.options = "ORBLogFile='d:\PBJagClient.Log'" cxn.location = "iiops://localhost:9001"



TRY



l_rc = cxn.ConnectToServer() CATCH (userabortedexception uae) MessageBox("UserAbortedException Caught", &



"ConnectToServer caught: " + uae.getMessage() ) l_rc = 999



CATCH ( CORBASystemException cse )



MessageBox("CORBASystemException Caught", &



"ConnectToServer caught: " + cse.getMessage() ) l_rc = 998



CATCH ( RuntimeError re ) MessageBox("RuntimeError Exception Caught", &



"ConnectToServer caught: " + re.getMessage() ) l_rc = 997



CATCH ( Exception ex ) MessageBox("Exception Caught", & "ConnectToServer caught: " + ex.getMessage() )



l_rc = 996 END TRY IF l_rc <> 0 THEN



MessageBox("Error", "Connection Failed - code: " &



+ string(l_rc) ) MessageBox("Error Info", "ErrorCode= " + &



string(cxn.ErrCode) + "~nErrText= " + & cxn.ErrText)



ELSE



MessageBox("OK", "Connection Established") END IF



See also DisconnectServer



- 10.83 ContainsKey Description Checks if the key name exists. It only checks the key at the first level of the JSON string.




If more than one key with the same name exists, it will only check the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage and JSONParser objects Syntax for JSONPackage



objectname.ContainsKey ( Key )
