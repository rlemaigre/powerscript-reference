# Avoiding null object references

When you pass a PowerObject as a parameter, you are passing a reference to the object. The object must exist when you refer to it later or you will get a null object reference, which causes an error. For example, if you pass the name of a control on an object that is being closed, that control will not exist when a script accesses the parameter.



See also the usage notes for OpenUserObject, all of which apply to OpenUserObjectWithParm.
