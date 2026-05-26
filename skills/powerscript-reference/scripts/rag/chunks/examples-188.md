# Examples

In this example, the mailSession object new_session is an instance variable of the window. The window's Open event script allocates memory for the mailSession object and logs on. During the logon process, the mail application displays a dialog box prompting for the profile and password:



new_session = CREATE mailSession new_session.mailLogon(mailNewSession!)



This example establishes a new mail session and makes the user's inbox up to date. The user will not be prompted for an ID and password because user information is provided. Here the mailSession object is a local variable:



mailSession new_session new_session = CREATE mailSession new_session.mailLogon("jpl", "hotstuff", &



mailNewSessionWithDownLoad!)



See also mailLogoff
