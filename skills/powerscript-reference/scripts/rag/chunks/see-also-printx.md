# See also PrintX

- 10.500 ProfileInt Description Obtains the integer value of a setting in the profile file for your application. Syntax ProfileInt ( filename, section, key, default )


- Table 10.621:




|Argument|Description|
|---|---|
|filename|A string whose value is the name of the profile file. If you do not specify a full path, ProfileInt uses the operating system's standard file search order to find the file.|
|section|A string whose value is the name of a group of related values in the profile file. In the file, section names are in square brackets. Do not include the brackets in section. Section is not case sensitive.|
|key|A string specifying the setting name in section whose value you want. The setting name is followed by an equal sign in the file. Do not include the equal sign in key. Key is not case sensitive.|
|default|An integer value that ProfileInt will return if filename is not found, if section or key does not exist in filename, or if the value of key cannot be converted to an integer.|
