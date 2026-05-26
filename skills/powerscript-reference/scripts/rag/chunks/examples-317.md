# Examples

This statement executes the script for the Clicked event in the CommandButton cb_OK immediately:



cb_OK.TriggerEvent(Clicked!)



This statement executes the script for the user-defined event cb_exit_request in the parent window:



Parent.TriggerEvent("cb_exit_request")



This statement executes the script for the Clicked event in the menu selection m_File on the menu m_Appl:



m_Appl.m_File.TriggerEvent(Clicked!)



See also Post PostEvent Send
