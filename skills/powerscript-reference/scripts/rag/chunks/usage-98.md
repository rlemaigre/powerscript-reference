# Usage

Long string values (more than 2048 bytes) should be stored as files and the file name stored in the registry. For more information about keys and value names in the system registry, see RegistrySet.



Examples This statement obtains the value for the name Title and stores it in the string ls_titlefont:



string ls_titlefont RegistryGet( &



"HKEY_LOCAL_MACHINE\Software\MyApp.Settings\Fonts", & "Title", RegString!, ls_titlefont)



This statement obtains the value for the name NameOfEntryNum and stores it in the long ul_num:



ulong ul_num RegistryGet("HKEY_USERS\MyApp.Settings\Fonts", &



"NameOfEntryNum", RegULong!, ul_num)



See also RegistryDelete RegistryKeys RegistrySet RegistryValues
