# Examples

This example shows how you might use a shared object to make an asynchronous request against a server component method and return data back to a client application window. The client has a Retrieve button on a window, a SetDW function, a shared object, and a callback handler. The component deployed to the server retrieves employee information from a database.



The Retrieve button on the window creates a shared object that communicates with the server as well as an instance of a callback handler:



// instance variables // uo_sharedobject iuo_sharedobject // uo_callback iuo_callback long ll_rv



SharedObjectRegister("uo_sharedobject","myshare") SharedObjectGet("myshare",iuo_sharedobject)



iuo_callback = CREATE uo_callback // Pass a reference to the window to // the callback object iuo_callback.passobject (parent)



iuo_sharedobject.post retrievedata(iuo_callback)



The SetDW function applies the contents of the DataWindow blob returned from the server component to a DataWindow control in the window:



long ll_rv ll_rv = dw_employee.SetFullState(ablb_data) if ll_rv = -1 then



MessageBox("Error", "SetFullState call failed!") end if return ll_rv



The Constructor event of the shared object uses a custom Connection object called n_jagclnt_connect to connect to the server. Then it creates an instance of the server component:



// Instance variables // uo_employee iuo_employee // n_jagclnt_connect myconnect



Constructor event long ll_rc myconnect = create n_jagclnt_connect ll_rc = myconnect.ConnectToServer() ll_rv = myconnect.CreateInstance(iuo_employee, &



"uo_employee")



RetrieveData The shared object has a single function called that makes a synchronous call to the RetrieveData function on the server component. When the function completes processing, it calls the Notify function asynchronously on the callback object, posting it to the DataWindow blob returned from the server component:



blob lblb_data long ll_rv ll_rv = iuo_employee.retrievedata(lblb_data) auo_callback.post notify(lblb_data) return ll_rv



When the server component has finished processing, the shared object notifies a user object called uo_callback, which in turns notifies the w_employee window. The uo_callback object has two functions, Notify and PassObject.The Notify function calls a function called SetDW on the w_employee window, passing it the DataWindow blob returned from the server component:



long ll_rv ll_rv = iw_employee.setdw(ablb_data) if ll_rv = -1 then



MessageBox("Error", "SetDW call failed!") end if return ll_rv



The callback handler's PassObject function caches a reference to the w_employee window in the iw_employee instance variable. The function takes the argument aw_employee, which is of type w_employee, and returns a long value:



iw_employee = aw_employee return 1



The server component is a PowerBuilder user object called uo_employee. The uo_employee object has a function called RetrieveData that uses a DataStore to retrieve employee rows from the database:



// instance variables // protected TransactionServer txnsrv // protected DataStore ids_datastore long ll_rv ll_rv = ids_datastore.Retrieve() ll_rv = ids_datastore.GetFullState(ablb_data) txnsrv.SetComplete() return ll_rv



See also SharedObjectRegister SharedObjectUnregister GetFullState and SetFullState method for DataWindows in Section 9.58, “GetFullState” in DataWindow Reference and Section 9.168, “SetFullState” in DataWindow Reference.



- 10.669 SharedObjectRegister Description Registers a user object so that it can be shared. Syntax SharedObjectRegister ( classname , instancename )

- Table 10.832:




|Argument|Description|
|---|---|
|classname|The name of the user object that you want to share|
|instancename|A string whose value is the name you want to assign to the shared object instance|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • SharedObjectExistsError! -- The instance name has already been used
- • SharedObjectCreateInstanceError! -- The object could not be created
- • SharedObjectCreatePBSessionError! -- The shared object session could not be created Usage




When you call the SharedObjectRegister function, PowerBuilder opens a separate runtime session for the shared object and creates the shared object. The name you specify for the object instance provides a way for you to access the object instance with the SharedObjectGet function.



Examples



In this example, the user object uo_customers is registered so that it can be shared. The name assigned to the shared object instance is share1. After registering the object, the application uses the SharedObjectGet function to store an instance of the object in an object variable:



SharedObjectRegister("uo_customers", "share1") SharedObjectGet("share1",shared_object)



See also SharedObjectGet SharedObjectUnregister



- 10.670 SharedObjectUnregister Description Unregisters a user object that was previously registered. Syntax




SharedObjectUnregister ( instancename )



- Table 10.833:



|Argument|Description|
|---|---|
|instancename|The name assigned to the shared object instance when it was first registered|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • SharedObjectNotExistsError! -- The instance name has not been registered Usage




This function marks a shared object for destruction. But the object is not actually destroyed until there are no more references to the object.



Examples In this example the application unregisters the object instance called share1:



SharedObjectUnregister("share1")



See also SharedObjectRegister



10.671 Show



Description



Makes an object or control visible, if it is hidden. If the object is already visible, Show brings it to the top.



Applies to Any object Syntax



objectname.Show ( )



- Table 10.834:




|Argument|Description|
|---|---|
|objectname|The name of the object or control you want to make visible (show)|
