# Examples

- Example 1




The following statements show various function calls using the most simple construction of the function call syntax.



This statement calls the system function Asc:



charnum = Asc("x")



This statement calls the DataWindow function in a script that belongs to the DataWindow:



Update( )



This statement calls the global user-defined function gf_setup_appl:



gf_setup_appl(24, "Window1")



This statement calls the system function PrintRect:



PrintRect(job, 250, 250, 7500, 1000, 50)



- Example 2 The following statements show calls to global and system functions.



This statement posts the global user-defined function gf_setup_appl. The function is executed when the calling script finishes:



POST gf_setup_appl(24, "Window1")



This statement posts the system function PrintRect. It is executed when the calling script finishes. The print job specified in job must still be open:



POST PrintRect(job, 250, 250, 7500, 1000, 50)



- Example 3



In a script for a control, these statements call a user-defined function defined in the parent window. The statements are equivalent, because FUNCTION, STATIC, and TRIGGER are the defaults:



Parent.FUNCTION STATIC TRIGGER wf_process( ) Parent.wf_process( )



- Example 4



This statement in a DataWindow control's Clicked script calls the DoubleClicked event for the same control. The arguments the system passed to Clicked are passed on to DoubleClicked. When triggered by the system, PowerBuilder passes DoubleClicked those same arguments:



This.EVENT DoubleClicked(xpos, ypos, row, dwo)



This statement posts the same event:



This.EVENT POST DoubleClicked(xpos, ypos, row, dwo)



- Example 5 The variable iw_a is an instance variable of an ancestor window type w_ancestorsheet: w_ancestorsheet iw_a



A menu has a script that calls the wf_export function, but that function is not defined in the ancestor. The DYNAMIC keyword is required so that the script compiles:



iw_a.DYNAMIC wf_export( )



At execution time, the window that is opened is a descendant with a definition of wf_export. That window is assigned to the variable iw_a and the call to wf_export succeeds.



- 6.9 Calling functions and events in an object's ancestor Description




In PowerBuilder, when an object is instantiated with a descendant object, even if its class is the ancestor and that descendant has a function or event script that overrides the ancestor's, the descendant's version is the one that is executed. If you specifically want to execute the ancestor's version of a function or event, you can use the ancestor operator (::) to call the ancestor's version explicitly.
