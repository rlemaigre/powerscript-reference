# Syntax

RegistryKeys ( key, subkeys )



- Table 10.633:




|Argument|Description|
|---|---|
|key|A string whose value names the key in the system registry whose subkeys you want.<br><br>To uniquely identify a key, specify the list of parent keys above it in the hierarchy, starting with the root key. The keys in the list are separated by backslashes.|
|subkeys|An array variable of strings in which you want to store the subkeys. If the array is variable size, its upper bound will reflect the number of subkeys found. If the array is fixed size, it must be large enough to hold all the subkeys. However, there will be no way to know how many subkeys were actually found.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage For more information about entries in the system registry, see RegistrySet. Examples



This example obtains the subkeys associated with the key HKEY_CLASSES_ROOT \MyApp. The subkeys are stored in the variable-size array ls_subkeylist:



string ls_subkeylist[] integer li_rtn li_rtn = RegistryKeys("HKEY_CLASSES_ROOT\MyApp", &



ls_subkeylist) IF li_rtn = -1 THEN



... // Error processing END IF



See also RegistryDelete RegistryGet RegistrySet RegistryValues
