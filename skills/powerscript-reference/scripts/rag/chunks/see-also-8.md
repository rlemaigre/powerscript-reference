# See also

ClearHeaders GetHeader GetHeaders SetHeader SetHeaders



- 10.26 ApplyTheme Description Applies the selected theme to the current application UI. Syntax ApplyTheme ( String theme )


- Table 10.33:




|Argument|Description|
|---|---|
|theme|A string whose value is the theme name (or theme path and name) you want to apply to the current application.<br><br>The theme path is optional. If not specified, the default value is "%Appeon%\Shared\PowerBuilder\theme[version]" when the app is run from the IDE (at the development environment), and the default value is the "theme[version]" under the root of the application installation directory when the application's executable file is run (at the production environment). If specified, it can be an absolute path or a relative path. The relative path is relative to the PBT file at the development environment; and relative to the root of the installation directory of the app's executable file at the production environment.<br><br>The theme name should be the sub-folder name under the specified theme path or the default path that contain the files for the theme, therefore the sub-folder name represents the theme name.<br><br>In Windows system, the maximum length for a path is defined as 260 characters. Therefore, it is recommended the theme path (including theme name) should be less than 260 characters and the path alone (excluding theme name) should be less than 200 characters.|
