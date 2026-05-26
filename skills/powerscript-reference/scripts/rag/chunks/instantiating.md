# Instantiating

When you instantiate a descendant object, PowerBuilder also instantiates all its ancestor classes. You do not have programmatic access to these ancestor instances, except in a few



limited ways, such as when you use the scope operator to access an ancestor version of a function or event script.



- 5.2.4 Garbage collection What garbage collection does




The PowerBuilder garbage collection mechanism checks memory automatically for unreferenced and orphaned objects and removes any it finds, thus taking care of most memory leaks. You can use garbage collection to destroy objects instead of explicitly destroying them using the DESTROY statement. This lets you avoid runtime errors that occur when you destroy an object that was being used by another process or had been passed by reference to a posted event or function.



When garbage collection occurs Garbage collection occurs:



- • When a reference is removed from an object



A reference to an object is any variable whose value is the object. When the variable goes out of scope, or when it is assigned a different value, PowerBuilder removes a reference to the object, counts the remaining references, and destroys the object if no references remain.



- • When the garbage collection interval is exceeded




When PowerBuilder completes the execution of a system-triggered event, it makes a garbage collection pass if the set interval between garbage collection passes has been exceeded. The default interval is 0.5 seconds. The garbage collection pass removes any objects and classes that cannot be referenced, including those containing circular references (otherwise unreferenced objects that reference each other).



When you post an event or function and pass an object reference, PowerBuilder adds an internal reference to the object to prevent it from being collected between the time of the post and the actual execution of the event or function. This reference is removed when the event or function is executed.



Exceptions to garbage collection There are a few objects that are prevented from being collected:



- • Visual objects



Any object that is visible on your screen is not collected because when the object is created and displayed on your screen, an internal reference is added to the object. When any visual object is closed it is explicitly destroyed.



- • Timing objects



Any Timing object that is currently running is not collected because the Start function for a Timing object adds an internal reference. The Stop function removes the reference.



- • Shared objects




Registered shared objects are not collected because the SharedObjectRegister function adds an internal reference. SharedObjectUnregister removes the internal reference.
