# Examples

This example prompts the user to enter a PIN for a new SSL session or when a session has timed out. In practice you would want to replace the user's entry in the text box with asterisks and allow the user more than one attempt to enter a correct PIN:



//instance variables //string is_tokenName //SSLServiceProvider issp_jag



CTSSecurity_sslSessionInfo mySessionInfo is_tokenName = mySessionInfo.getProperty( "tokenName" ) w_response w_pin IF timedout THEN



MessageBox("The SSL session has expired", &



"Please reenter the PIN for access to the " + & ls_tokenName + " certificate database.")



ELSE



MessageBox("The SSL session requires a PIN", & "Please enter the PIN for access to the " + & ls_tokenName + " certificate database.")



END IF string s_PIN userabortedexception ue_cancelled // open prompt for PIN Open(w_pin) // get value entered s_PIN = Message.StringParm // set property if we're not to abort if s_PIN <> ABORT_VALUE then



issp_jag.setglobalproperty("pin", s_PIN)



// otherwise, abort.. else



ue_cancelled = CREATE userabortedexception ue_cancelled.text = "User cancelled request when " &



+ "asked for PIN."



throw ue_cancelled end if return s_PIN



See also ConnectToServer (obsolete) GetCertificateLabel (obsolete) GetCredentialAttribute (obsolete)



TrustVerify (obsolete)



- 10.257 GetRecordSet Description Returns the current ADO Recordset object. Applies to ADOResultSet objects Syntax adoresultset.GetRecordSet ( adorecordsetobject )


- Table 10.314:




|Argument|Description|
|---|---|
|adoresultset|An ADOResultSet object that contains an ADO Recordset.|
|adorecordsetobjec|tAn OLEObject object into which the function places the current ADO Recordset. This argument is passed by reference.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



Use the GetRecordSet function to return an ADO Recordset as an OLEObject object that can be used in PowerBuilder as a native ADO Recordset. The ADOResultSet object that contains the ADO Recordset must first have been populated using the SetRecordSet or SetResultSet function.
