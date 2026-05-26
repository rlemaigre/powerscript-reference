# 10.178 GetApplication Description

Gets the handle of the current Application object so you can get and set properties of the application.



Syntax



GetApplication ( )



Return value Application. Returns the handle of the current application object. Usage



The GetApplication function lets you write generic code for an application, making it reusable in other applications. You do not have to code the actual name of the application when you want to set application properties.



Examples



To change whether Toolbar Tips are displayed, you can get the handle of the application object and set the ToolbarTips property:



application app app = GetApplication() app.ToolbarTips = FALSE



The previous example could be coded more simply as follows:



GetApplication().ToolbarTips = FALSE
