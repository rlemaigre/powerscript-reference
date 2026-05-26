# 10.593 SetAutomationLocale Description

Sets the language to be used in automation programming for an OLE object. Call SetAutomationLocale if you have programmed automation commands in a language other than the user's locale.



Applies to OLE objects Syntax



olename.SetAutomationLocale ( language, sortorder )



- Table 10.733:




|Argument|Description|
|---|---|
|olename|The name of the object for which you want to set the automation locale.|
|language|A value of the LanguageID enumerated datatype specifying the language you have used for automation commands. The OLE server must have function and property names defined in the language you specify.<br><br>Some values of LanguageID are:<br><br>• LanguageNeutral! -- No language is assumed. Automation commands match the server's default command set.<br>• LanguageUserDefault! -- The language locale is taken from the user's settings in the International control panel.<br>• LanguageSystemDefault! -- The language locale is taken from the version of Windows that is installed on the user's machine.<br><br><br>You can also specify a language or dialect, such as LanguagePolish! or LanguagePortuguese_Brazilian!<br><br>For the list of language-specific values for LanguageID, use the PowerBuilder Browser.|
|sortorder|A value of the LanguageSortID enumerated datatype specifying the sort order for the language. Values are:<br><br>• LanguageSortNative! -- Use the traditional sort order of the selected language.<br>• LanguageSortUnicode! -- Use the sort order defined for Unicode<br>|



Return value Integer.



- Returns 0 if it succeeds and -1 if an error occurs. Usage




For most situations, you do not need to call SetAutomationLocale. If an automation command fails, PowerBuilder makes additional attempts to execute it in other languages before it triggers the Error event. It attempts to execute the command using these languages:



- 1. The command as is (the command is in a language the server understands)
- 2. The current locale (if it is different from the user's default locale)
- 3. The user's default locale (LanguageUserDefault!)
- 4. The system's default locale (LanguageSystemDefault!)
- 5. English (LanguageEnglish!)




If PowerBuilder is successful in validating the name in any of the languages above, it resets the locale to the value that succeeded. While this may result in the wrong locale in ambiguous cases, it will probably simplify access to standard Microsoft Office products that ship with both localized and English function and property names.



If you specify a language with SetAutomationLocale, but the OLE server does not have function and property names in that language, your OLE automation commands will fail unless the above procedure finds a language that works. If you have called SetAutomationLocale, PowerBuilder's procedure for finding the correct language can reset it, as described in the previous paragraph.



Examples This example sets the language to German for an OLEObject called oleobj_report:



oleobj_report.SetAutomationLocale(LanguageGerman!)



This example sets the language to German for an OLE control ole_1:



ole_1.Object.SetAutomationLocale(LanguageGerman!)
