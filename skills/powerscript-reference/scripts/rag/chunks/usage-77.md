# Usage

The ParentWindow function, along with the pronoun Parent, allows you to write more general scripts by avoiding the coding of actual window names. Parent refers to the window that contains the current object or control -- the local environment. ParentWindow returns the parent window of a specified window.



Whether a window has a parent depends on its type and how it was opened. You can specify the parent when you open the window. For windows that always have parents, PowerBuilder chooses the parent if you do not specify it. Response windows and child windows always have a parent window. The parent of a sheet in an MDI application is the MDI frame window.



Pop-up windows have a parent window when they are opened from another window but when used in an MDI application, the parent of the pop-up is the MDI frame. A pop-up window opened from the application's Open event does not have a parent.



The ParentWindow property of the Menu object can be used like a pronoun in Menu scripts. It identifies the window with which the menu is associated when your program is running. For more information, see Section 13.6.3, “Referring to objects in your application” in Users Guide.



Examples These statements return the parent of child_1. The parent is a window of the datatype Win1:



Win1 w_parent w_parent = child_1.ParentWindow()



The following script for a Cancel button in a pop-up window triggers an event for the parent window of the button's parent window (the window that contains the button). Then it closes the button's window. The parent window of that window will have a script for the cancelrequested event:



Parent.ParentWindow().TriggerEvent("cancelrequested") Close(Parent)
