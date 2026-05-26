# Return value

Blob. Returns the result of the HMAC if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement encrypts the data using HMACMD5.



Blob lblb_data Blob lblb_key Blob lblb_hmac



lblb_data = Blob("Test HMAC", EncodingANSI!) lblb_key = Blob("Test HMAC Key", EncodingANSI!)



CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject



// Encrypt with HMAC lblb_hmac= lnv_CrypterObject.HMAC(HMACMD5!, lblb_data, lblb_key)



See also SymmetricEncrypt SymmetricDecrypt AsymmetricEncrypt AsymmetricDecrypt AsymmetricSign AsymmetricVerifySign AsymmetricGenerateKey MD5 SHA



- 10.305 Hour Description Obtains the hour in a time value. The hour is based on a 24-hour clock. Syntax Hour ( time )


- Table 10.374:




|Argument|Description|
|---|---|
|time|The time from which you want to obtain the hour|



Return value Integer. Returns an integer (00 to 23) whose value is the hour portion of time. If time is null, Hour returns null. Examples This statement returns the current hour:



Hour(Now())



This statement returns 19:



Hour(19:01:31)



See also Minute Now Second Hour method for DataWindows in Section 2.4.48, “Hour” in DataWindow Reference.



- 10.306 HyperLinkToURL Description Opens the default Web browser, displaying the specified URL. Applies to Inet objects Syntax servicereference.HyperlinkToURL ( url )

- Table 10.375:



|Argument|Description|
|---|---|
|servicereference|Reference to the Internet service instance|
|url|String specifying the URL to open in the default Web browser|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage Call this function to display a URL from a PowerBuilder application. Examples



This example calls the HyperlinkToURL function. Iinet_base is an instance variable of type inet:



GetContextService("Internet", iinet_base) iinet_base.HyperlinkToURL(sle_url.text)



See also GetURL PostURL



10.307 Idle



Description



Sets a timer so that PowerBuilder triggers an Application Idle event when there has been no user activity for a specified number of seconds.



Syntax



Idle ( n )



- Table 10.376:






|Argument|Description|
|---|---|
|n|The number of seconds of user inactivity allowed before PowerBuilder triggers an Application Idle event. A value of 0 terminates Idle detection.|



Return value Integer. Returns 1 if it starts the timer, and -1 if it cannot start the timer or n is 0 and the timer has not been started. Note that when the timer has been started and you change n, Idle does not start a new timer; it resets the current timer interval to the new number of seconds. If n is null, Idle returns null. The return value is usually not used. Usage



Use Idle to shut off or restart an application when there is no user activity. This is often done for security reasons.



Idle starts a timer after each user activity (such as a keystroke or a mouse click), and after n seconds of inactivity it triggers an Idle event. The Idle event script for an application typically closes some windows, logs off the database, and exits the application or calls the Restart function.



The timer is reset when any of the following activities occur:



- • A mouse movement or mouse click in any window of the application
- • Any keyboard activity when a window of the PowerBuilder application is current
- • A mouse click or any mouse movement over the icon when a PowerBuilder application is minimized
- • Any keyboard activity when the PowerBuilder application is minimized and is current (its name is highlighted)
- • Any retrieval on a visible DataWindow that causes the edit control to be painted
