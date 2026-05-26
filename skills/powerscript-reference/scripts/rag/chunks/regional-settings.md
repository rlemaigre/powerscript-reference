# Regional settings

If you use date formats in your graph, you must verify that yyyy is the Short Date Style for year in the Regional Settings of the user's Control Panel. Your program can check this with the RegistryGet function.



If the setting is not correct, you can ask the user to change it manually or to have the application change it (by calling the RegistrySet function). The user may need to reboot after the setting is changed.
