# Objects passed as read-only

When you pass an object as read-only, you get a copy of the reference to the object. You cannot change the reference to point to a new object (because read-only is equivalent to a CONSTANT declaration), but you can change properties of the object.



- 6.6.2 Passing structures Structures as arguments behave like simple variables, not like objects. Structures passed by value




When you pass a structure by value, PowerBuilder passes a copy of the structure. You can modify the copy without affecting the original.
