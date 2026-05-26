# Usage

When you are finished with an object that you created, you can call DESTROY to release its memory. However, you should call DESTROY only if you are sure that the object is not referenced by any other object. PowerBuilder's garbage collection mechanism maintains a count of references to each object and destroys unreferenced objects automatically.



For more information about garbage collection, see Garbage collection. All objects are destroyed automatically when your application terminates. Examples



- Example 1



The following statement destroys the transaction object DBTrans that was created with a CREATE statement:



DESTROY DBTrans



- Example 2




This example creates an OLEStorage variable istg_prod_pic in a window's Open event. When the window is closed, the Close event script destroys the object. The variable's declaration is:



OLEStorage istg_prod_pic



The window's Open event creates an object instance and opens an OLE storage file:



integer li_result istg_prod_pic = CREATE OLEStorage



- li_result = istg_prod_pic.Open("PICTURES.OLE") The window's Close event destroys istg_prod_pic:




integer li_result



- li_result = istg_prod_pic.Save( ) IF li_result = 0 THEN




DESTROY istg_prod_pic END IF
