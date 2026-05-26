# Windows settings

To make sure you get correct return values for the year, you must verify that yyyy is the Short Date Style for year in the Regional Settings of the user's Control Panel. Your program can check this with the RegistryGet function.



If the setting is not correct, you can ask the user to change it manually or have the application change it (by calling the RegistrySet function). The user may need to reboot after the setting is changed.



Examples This statement returns 2005:



Year(2005-01-31)



See also Day Month Year method for DataWindows in Section 2.4.133, “Year” in DataWindow Reference.
