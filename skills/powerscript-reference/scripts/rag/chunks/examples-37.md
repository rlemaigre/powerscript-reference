# Examples

Suppose your window has two instance variables: one for specifying the exception action, and another of type Any for storing a potential substitute value. Before accessing the OLE property, a script sets the instance variables to appropriate values:



ie_action = ExceptionSubstituteReturnValue! ia_substitute = 0 li_currentsetting = ole_1.Object.Value



If the command fails, a script for the ExternalException event displays the Help topic named by the OLE server, if any. It substitutes the return value you prepared and returns control to the calling script. The assignment of the substitute value to li_currentsetting works correctly because their datatypes are compatible:



string ls_context // Command line switch for WinHelp numeric context ID ls_context = "-n " + String(helpcontext) If Len(HelpFile) > 0 THEN



Run("winhelp.exe " + ls_context + " " + helpfile) END IF action = ie_action returnvalue = ia_substitute



Because the event script must serve for every automation command for the control, you need to set the instance variables to appropriate values before each automation command.



See also Error



- 9.42 FileExists Description Occurs when a file is saved in the RichTextEdit control and the file already exists. Event ID


- Table 9.113:



|Event ID|Objects|
|---|---|
|pbm_renfileexists|RichTextEdit|



Arguments



- Table 9.114:




|Argument|Description|
|---|---|
|filename|The name of the file|
