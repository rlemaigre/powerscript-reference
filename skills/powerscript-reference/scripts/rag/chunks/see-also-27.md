# See also

GetTextColor SetSpacing SetTextColor SetTextStyle



- 10.282 GetTheme Description Gets the theme that is currently applied to the application UI. Syntax GetTheme ( {boolean fullpath} )

- Table 10.347:




|Argument|Description|
|---|---|
|fullpath (optional)|A boolean whose value indicates whether to get the path of the theme file.|



Return value



A string whose value is the theme name (or theme path and name) that is currently applied to the application.



An empty string will be returned if one of the following happens:



- • if no theme is applied ("Do Not Use Themes" is selected in the Themes tab of the Application Properties dialog), or
- • if a theme is applied and the "Windows classic style" option is selected when building the application, or
- • if a theme is applied and the application's executable file cannot find the "theme190" folder at runtime.




Examples This example gets the theme name that is currently applied to the application:



String ls_themename ls_themename = GetTheme()



See also ApplyTheme Specifying a theme for the application UI in Users Guide



- 10.283 GetToday Description Returns the value that the calendar uses as today's date.
