# Restrictions for copying

Assignments are allowed between autoinstantiated user objects only if the object types match or if the target is a nonautoinstantiated ancestor.



- Rule 1 If you assign one autoinstantiated object to another, they must be of the same type.
- Rule 2



If you assign an autoinstantiated descendant object to an ancestor variable, the ancestor cannot have the Autoinstantiate setting. The ancestor variable will contain a reference to a copy of its descendant.



- Rule 3




If you assign an ancestor object to a descendant variable, the ancestor must contain an instance of the descendant or an execution error occurs.
