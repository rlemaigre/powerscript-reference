# Usage

Use ProfileInt or ProfileString to get configuration settings from a profile file that you have designed for your application.



You can use SetProfileString to change values in the profile file to customize your application's configuration at runtime. Before you make changes, you can use ProfileInt and ProfileString to obtain the original settings so you can restore them when the user exits the application.



ProfileInt, ProfileString, and SetProfileString can read or write to files with ANSI or UTF16LE encoding on Windows systems, and ANSI or UTF16-BE encoding on UNIX systems.
