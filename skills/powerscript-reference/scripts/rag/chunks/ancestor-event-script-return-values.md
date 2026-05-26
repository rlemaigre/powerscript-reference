# Ancestor event script return values

Sometimes you want to perform some processing in an event in a descendant object, but that processing depends on the return value of the ancestor event script. You can use a local variable called AncestorReturnValue that is automatically declared and assigned the value of the ancestor event.



For more information about AncestorReturnValue, see Calling functions and events in an object's ancestor.



User-defined events With an ID



When you declare a user-defined event that will be triggered by a system message, you select an event ID from the list of IDs. The pbm (PowerBuilder Message) codes listed in the Event dialog box map to system messages.



The return value and arguments associated with the event ID become part of your event declaration. You cannot modify them.



When the corresponding system message occurs, PowerBuilder triggers the event and passes values for the arguments to the event script.



Without an ID When you declare a user event that will not be associated with a system message, you do not select an event ID for the event. You can specify your own arguments and return datatype in the Event Declaration dialog box. The event will never be triggered by user actions or system activity. You trigger the event yourself in your application's scripts. For more information If you want to trigger events, including system events, see Syntax for calling PowerBuilder functions and events for information on the calling syntax. To learn more about user-defined events, see Chapter 8, Working with User Events in Users Guide.



- 9.2 Activate Description Occurs just before the window becomes active. Event ID


- Table 9.2:




|Event ID|Objects|
|---|---|
|pbm_activate|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



When an Activate event occurs, the first object in the tab order for the window gets focus. If there are no visible objects in the window, the window gets focus.



An Activate event occurs for a newly opened window because it is made active after it is opened.



The Activate event is frequently used to enable and disable menu items. Examples Example 1 In the window's Activate event, this code disables the Sheet menu item for menu m_frame on the File menu:



m_frame.m_file.m_sheet.Enabled = FALSE



Example 2 This code opens the sheet w_sheet in a layered style when the window activates:



w_sheet.ArrangeSheets(Layer!)
