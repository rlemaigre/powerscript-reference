# Usage

The theme path and name set by the ApplyTheme function takes precedence over those selected in the PowerBuilder painter. See the following code examples for illustration.



The ApplyTheme method is effective to the window, DataWindow, and all visual controls in your current application, except Line, Oval, Rectangle, RoundRectangle, Picture, PictureHyperLink, and Animation.



The ApplyTheme method should be called in the Application Open event when all of the child windows are not yet opened.



Once you apply a theme to the application, you should not check the "Windows classic style" option when building the application. If "Windows classic style" is selected, the application UI will be rendered in the Windows classic style instead of the selected theme.



When the application is run in the Windows system and if the Windows system theme is set to "Windows Classic", then the application UI will be rendered in the Windows Classic theme instead of the selected theme.



The "Use Windows XP style DPI scaling" option in Windows 7, Windows Server 2012, or earlier will be automatically selected, if the scaling percentage is set to 125% or lower. This will prevent the selected theme working correctly. In such case, you should manually uncheck the "Use Windows XP style DPI scaling" option.



If the current operating system is Windows Server 2003, 2008, or 2008 R2 (or if the “Windows classic style” option is selected when building the application), the ApplyTheme function will not take effect and will return -1.
