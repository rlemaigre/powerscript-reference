# Examples

This example checks whether the failure was called by a bad or missing PIN and returns TRUST_FAIL to call GetPin if it was. If not, it displays the reason why the server failed to verify the certificate chain and prompts the user to choose whether to continue with the session:



long rc string stmp, stmp2 w_response w_ssl_response string ls_rc



sslSessionInfo mySessionInfo rc = thesessioninfo._narrow(mySessionInfo, &



"thesessioninfo") is_tokenName = mySessionInfo.getProperty( "tokenName" ) CHOOSE CASE reason



- CASE 4 MessageBox("The SSL session requires a PIN", & "Please enter the PIN for access to the " + & is_tokenName + " certificate database.")



return 2



- CASE 5 MessageBox("The PIN you entered is incorrect", & "Please reenter the PIN for access to the " + &




is_tokenName + " certificate database.") return 2



- CASE 1 MessageBox("Certificate verification failed", & "Server's certificate chain is incomplete.ORB " &



+ "~nis unable to complete the chain using the " &

+ "CA certificates in the " &

+ "~nSybase PKCS11 Token.")



- CASE 2 MessageBox("Certificate verification failed", & "Server's certificate chain expired. One or " &




+ " more of the certificates in the " &

+ "chain is no longer valid.")



- CASE 3 MessageBox("Certificate verification failed", & "Server's certificate chain contains an " &




+ "unknown root certification authority. " &

+ "This CA is not found in the trust data in " &

+ "the Sybase PKCS11 Token.") END CHOOSE sTmp = "~nVersion: " stmp += mySessionInfo.getProperty( "Version" ) sTmp = "~nHost: " stmp += mySessionInfo.getProperty( "host" ) stmp += "~nport: " stmp += mySessionInfo.getProperty( "port" ) stmp += "~nciphersuite: " stmp += mySessionInfo.getProperty( "ciphersuite" ) stmp += "~nCertificateLabel: " stmp += mySessionInfo.getProperty( "certificateLabel" ) stmp += "~nUserData: " stmp += mySessionInfo.getProperty( "UserData" ) stmp += "~ntokenName: " stmp += mySessionInfo.getProperty( "tokenName" ) stmp += "~npkcs11Module: " stmp += mySessionInfo.getProperty( "pkcs11Module" ) stmp += "~nPlease enter your choice: "



- stmp += "~n 1: Accept this connection"
- stmp += "~n 2: Reject this connection"
- stmp += "~n 3: Accept this connection and mark CA as trusted"
- stmp += "~n 4: Reject this connection and mark CA as untrusted"
- stmp += "~n 5: Accept this CA throughout this session"
- stmp += "~n 6: Reject this CA throughout this session" // Display information in a response window and return // response with CloseWithReturn openwithparm(w_response, stmp) ls_rc = Message.StringParm return long(ls_rc) See also ConnectToServer (obsolete) GetCertificateLabel (obsolete) GetCredentialAttribute (obsolete) GetPin (obsolete)
