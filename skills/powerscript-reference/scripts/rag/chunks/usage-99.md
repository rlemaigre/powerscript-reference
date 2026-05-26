# Usage

Long string values (more than 2048 bytes) should be stored as files and the file name stored in the registry.



- Table 10.635:




|Item|Description|
|---|---|
|Key|An element in the registry. A key is part of a tree of keys, descending from one of the predefined root keys. Each key is a subkey or child of the parent key above it in the hierarchy.<br><br>There are four root strings:<br><br>• HKEY_CLASSES_ROOT<br>• HKEY_LOCAL_MACHINE<br>• HKEY_USERS<br>• HKEY_CURRENT_USER<br><br><br>A key is uniquely identified by the list of parent keys above it. The keys in the list are separated by slashes, as shown in these examples:<br><br>HKEY_CLASSES_ROOT\Appeon.Application HKEY_USERS\MyApp\Display\Fonts<br><br>|
|Value name|The name of a value belonging to the key. A key can have one unnamed value and one or more named values.|
|Value type|A value identifying the datatype of a value in the registry.|
|Value|A value associated with a value name or an unnamed value. Several string, numeric, and binary datatypes are supported by the registry.|



Examples This example sets a value for the key Fonts and the value name Title:



RegistrySet( & "HKEY_LOCAL_MACHINE\Software\MyApp\Fonts", & "Title", RegString!, sle_font.Text)



This statement sets a value for the key Fonts and the value name NameOfEntryNum:



ulong ul_num RegistrySet( &



"HKEY_USERS\MyApp.Settings\Fonts", & "NameOfEntryNum", RegULong!, ul_num)



See also RegistryDelete RegistryGet RegistryKeys RegistryValues



- 10.512 RegistryValues Description Obtains the list of named values associated with a key. Syntax RegistryValues ( key, valuename )


- Table 10.636:




|Argument|Description|
|---|---|
|key|A string whose value is the key in the system registry for which you want the values of its subkeys.<br><br>To uniquely identify a key, specify the list of parent keys above it in the hierarchy, starting with the root key. The keys in the list are separated by backslashes.|
|valuename|An array variable of strings in which you want to store the names. If the array is variable size, its upper bound will reflect the number of named values found. If the array is fixed size, it must be large enough to hold all the names. However, there will be no way to know how many names were actually found.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage For more information about entries in the system registry, see RegistrySet. Examples



This example gets the value names associated with the key Fonts and stores them in the array ls_valuearray:



string ls_valuearray[] RegistryValues( &



"HKEY_LOCAL_MACHINE\Software\MyApp.Settings\Fonts",& ls_valuearray)



See also RegistryDelete RegistryGet RegistryKeys RegistrySet



- 10.513 RelativeDate Description Obtains the date that occurs a specified number of days after or before another date. Syntax RelativeDate ( date, n )

- Table 10.637:




|Argument|Description|
|---|---|
|date|A value of type date|
|n|An integer indicating a number of days|



Return value



Date. Returns the date that occurs n days after date if n is greater than 0. Returns the date that occurs n days before date if n is less than 0. If any argument's value is null, RelativeDate returns null.



Examples This statement returns 2006-02-10:



RelativeDate(2006-01-31, 10)



This statement returns 2006-01-21:



RelativeDate(2006-01-31, - 10)



See also DaysAfter RelativeDate method for DataWindows in Section 2.4.99, “RelativeDate” in DataWindow Reference.



- 10.514 RelativeTime Description




Obtains a time that occurs a specified number of seconds after or before another time within a 24-hour period.
