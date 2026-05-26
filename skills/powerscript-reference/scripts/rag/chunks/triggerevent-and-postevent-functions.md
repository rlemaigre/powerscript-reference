# TriggerEvent and PostEvent functions

For backward compatibility, the TriggerEvent and PostEvent functions are still available, but you cannot pass arguments to the called event. You must pass data to the event in PowerBuilder's Message object.



Examples of posting The following examples illustrate how to post events.



- Example 1




In a sample application, the Open event of the w_activity_manager window calls the functions uf_setup and uf_set_tabpgsystem. (The functions belong to the user object u_app_actman.) Because the functions are posted, the Open event is allowed to finish before the functions are called. The result is that the window is visible while setup processing takes place, giving the user something to look at:



guo_global_vars.iuo_app_actman.POST uf_setup() guo_global_vars.iuo_com_actman.POST uf_set_tabpgsystem(0)



- Example 2




In a sample application, the DoubleClicked event of the tv_roadmap TreeView control in the u_tabpg_amroadmap user object posts a function that processes the TreeView item. If the event is not posted, the code that checks whether to change the item's picture runs before the item's expanded flag is set:



parent.POST uf_process_item ()
