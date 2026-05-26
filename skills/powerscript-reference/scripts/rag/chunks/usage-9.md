# Usage

Use CREATE as the first reference to any class user object. This includes standard class user objects such as mailSession or Transaction.



The system provides one instance of several standard class user objects: Message, Error, Transaction, DynamicDescriptionArea, and DynamicStagingArea. You only need to use CREATE if you declare additional instances of these objects.



If you need a menu that is not part of an open window definition, use CREATE to create an instance of the menu. (See the function PopMenu.)



To create an instance of a visual user object or window, use the appropriate Open function (instead of CREATE).



You do not need to use CREATE to allocate memory for:



- • A standard datatype, such as integer or string
- • Any structure, such as the Environment object
- • Any object whose AutoInstantiate setting is true
- • Any object that has been instantiated using a function, such as Open Specifying the object type dynamically CREATE USING allows your application to choose the object type dynamically. It is usually used to instantiate an ancestor variable with an instance of one of its descendants. The particular descendant is chosen at execution time. For example, if uo_a has two descendants, uo_a_desc1 and uo_a_desc2, then the application can select the object to be created based on current conditions:




uo_a uo_a_var string ls_objectname



IF ... THEN



- ls_objectname = "uo_a_desc1" ELSE
- ls_objectname = "uo_a_desc2"




END IF uo_a_var = CREATE USING ls_objectname



Destroying objects you create When you have finished with an object you created, you can call DESTROY to release its memory. However, you should call DESTROY only if you are sure that the object is not referenced by any other object. PowerBuilder's garbage collection mechanism maintains a count of references to each object and destroys unreferenced objects automatically. For more information about garbage collection, see Garbage collection. Examples



- Example 1



These statements create a new transaction object and stores the object in the variable DBTrans:



transaction DBTrans DBTrans = CREATE transaction DBTrans.DBMS = 'ODBC'



- Example 2



These statements create a user object when the application has need of the services it provides. Because the user object might or might not exist, the code that accesses it checks whether it exists before calling its functions.



The object that creates the service object declares invo_service as an instance variable:



n_service invo_service



The Open event for the object creates the service object:



//Open event of some object IF (some condition) THEN



invo_service = CREATE n_service END IF



When another script wants to call a function that belongs to the n_service class, it verifies that invo_service is instantiated:



IF IsValid(invo_service) THEN



invo_service.of_perform_some_work( ) END IF



If the service object was created, then it also needs to be destroyed:



IF isvalid(invo_service) THEN DESTROY invo_service



- Example 3




When you create a DataStore object, you also have to give it a DataObject and call SetTransObject before you can use it:



- l_ds_delete = CREATE u_ds


- l_ds_delete.DataObject = 'd_user_delete' l_ds_delete.SetTransObject(SQLCA) li_cnt = l_ds_delete.Retrieve(lstr_data.name)


- Example 4




In this example, n_file_service_class is an ancestor object, and n_file_service_class_ansi and n_file_service_class_dbcs are its descendants. They hold functions and variables that provide services for the application. The code chooses which object to create based on whether the user is running in a DBCS environment:



n_file_service_class lnv_fileservice string ls_objectname environment luo_env GetEnvironment ( luo_env ) IF luo_env.charset = charsetdbcs! THEN



ls_objectname = "n_file_service_class_dbcs" ELSE



ls_objectname = "n_file_service_class_ansi" END IF lnv_fileservice = CREATE USING ls_objectname
