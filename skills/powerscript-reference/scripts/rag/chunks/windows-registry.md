# Windows registry

ProfileInt can also be used to obtain configuration settings from the Windows system registry. For information on how to use the system registry, see the discussion of



initialization files and the Windows registry in Chapter 32, Managing Initialization Files and the Windows Registry in Application Techniques.



Examples These examples use a file called PROFILE.INI, which contains the following:



[Pb] Maximized=1 [security] Class=7



This statement returns the integer value for the keyword Maximized in section PB of file PROFILE.INI. If there were no PB section or no Maximized keyword in the PB section, it would return 3:



ProfileInt("C:\PROFILE.INI", "PB", "maximized", 3)



The following statements display a MessageBox if the integer value for the Class setting in section Security of file C:\PROFILE.INI is less than 10. The default security setting is 6 if the profile file is not found or does not contain a Class setting:



IF ProfileInt("C:\PROFILE.INI", "Security", & "Class", 6) < 10 THEN // Class is < 10 MessageBox("Warning", "Access Denied")



ELSE



... // Some processing END IF



See also ProfileString SetProfileString ProfileInt method for DataWindows in Section 2.4.95, “ProfileInt” in DataWindow Reference.



- 10.501 ProfileString Description Obtains the string value of a setting in the profile file for your application. Syntax ProfileString ( filename, section, key, default )


- Table 10.622:




|Argument|Description|
|---|---|
|filename|A string whose value is the name of the profile file. If you do not specify a full path, ProfileString uses the operating system's standard file search order to find the file.|
|section|A string whose value is the name of a group of related values in the profile file. In the file, section names are in square brackets. Do not include the brackets in section. Section is not case sensitive.|



|Argument|Description|
|---|---|
|key|A string specifying the setting name in section whose value you want. The setting name is followed by an equal sign in the file. Do not include the equal sign in key. Key is not case sensitive.|
|default|A string value that ProfileString will return if filename is not found, if section or key does not exist in filename, or if the value of key cannot be converted to an integer.|
