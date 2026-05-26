# 6.4.2 Dynamic calls

When you specify a dynamic call in PowerBuilder, the function or event does not have to exist when you compile the code. You are indicating to the compiler that there will be a suitable function or event available at execution time.



For a dynamic call, PowerBuilder waits until it is time to execute the function or event to look for it. This gives you flexibility and allows you to call functions or events in descendants that do not exist in the ancestor.



Results of dynamic calls To illustrate the results of dynamic calls, consider these objects:



- • Ancestor window w_a with a function Set(integer).
- • Descendant window w_a_desc with two functions: Set(integer) overrides the ancestor function, and Set(string) is an overload of the function.


- Situation 1 Suppose you open the window mywindow of the ancestor window class w_a:



w_a mywindow Open(mywindow)



This is what happens when you call the Set function statically or dynamically:



Table 6.3:



|This statement|Has this result|
|---|---|
|mywindow.Set(1)|Compiles correctly because function is found in the ancestor w_a.<br><br>At runtime, Set(integer) in the ancestor is executed.|
|mywindow.Set("hello")|Fails to compile; no function prototype in w_a matches the call.|
|mywindow.DYNAMIC Set("hello")|Compiles successfully because of the DYNAMIC keyword.<br><br>An error occurs at runtime because no matching function is found.|



- Situation 2 Now suppose you open mywindow as the descendant window class w_a_desc:




w_a mywindow Open(mywindow, "w_a_desc")



This is what happens when you call the Set function statically or dynamically in the descendant window class:



- Table 6.4:




|This statement|Has this result|
|---|---|
|mywindow.Set(1)|Compiles correctly because function is found in the ancestor w_a.<br><br>At runtime, Set(integer) in the descendant is executed.|
|mywindow.Set("hello")|Fails to compile; no function prototype in the ancestor matches the call.|
|mywindow.DYNAMIC Set("hello")|Compiles successfully because of the DYNAMIC keyword.<br><br>At runtime, Set(string) in the descendant is executed.|



Disadvantages of dynamic calls Slower performance Because dynamic calls are resolved at runtime, they are slower than static calls. If you need the fastest performance, design your application to avoid dynamic calls. Less error checking When you use dynamic calls, you are foregoing error checking provided by the compiler. Your application is more open to application errors, because functions that are called dynamically might be unavailable at execution time. Do not use a dynamic call when a static call will suffice. Example using dynamic call



A sample application has an ancestor window w_datareview_frame that defines several functions called by the menu items of m_datareview_framemenu. They are empty stubs with empty scripts so that static calls to the functions will compile. Other windows that are descendants of w_datareview_frame have scripts for these functions, overriding the ancestor version.



The wf_print function is one of these -- it has an empty script in the ancestor and appropriate code in each descendant window:



guo_global_vars.ish_currentsheet.wf_print ()



The wf_export function called by the m_export item on the m_file menu does not have a stubbed-out version in the ancestor window. This code for m_export uses the DYNAMIC keyword to call wf_export. When the program runs, the value of variable ish_currentsheet is a descendant window that does have a definition for wf_export:



guo_global_vars.ish_currentsheet.DYNAMIC wf_export()



- 6.4.2.1 Errors when calling functions and events dynamically




If you call a function or event dynamically, different conditions create different results, from no effect to an execution error. The tables in this section illustrate this.
