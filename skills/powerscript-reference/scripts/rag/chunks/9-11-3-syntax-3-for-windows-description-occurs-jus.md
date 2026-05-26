# 9.11.3 Syntax 3: For windows Description Occurs just before a window is removed from display. Event ID

- Table 9.38:




|Event ID|Objects|
|---|---|
|pbm_close|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



When you call the Close function for the window, a CloseQuery event occurs before the Close event. In the CloseQuery event, you can specify a return code to prevent the Close event from occurring and the window from closing.



Do not trigger the Close event to close a window; call the Close function instead. Triggering the event simply runs the script and does not close the window.



See also CloseQuery Open



- 9.12 CloseQuery Description Occurs when a window is closed, before the Close event. Event ID


- Table 9.39:




|Event ID|Objects|
|---|---|
|pbm_closequery|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Allow the window to be closed 1 -- Prevent the window from closing Usage



If the CloseQuery event returns a value of 1, the closing of the window is aborted and the Close event that usually follows CloseQuery does not occur.



If the user closes the window with the Close box (instead of using buttons whose scripts can evaluate the state of the data in the window), the CloseQuery event still occurs, allowing you to prompt the user about saving changes or to check whether data the user entered is valid.
