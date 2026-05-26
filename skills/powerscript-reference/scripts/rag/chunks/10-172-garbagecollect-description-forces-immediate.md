# 10.172 GarbageCollect Description Forces immediate garbage collection. Syntax GarbageCollect ( ) Return value

None Usage



Forces garbage collection to occur immediately. PowerBuilder makes a pass to identify unused objects, including those with circular references, then deletes unused objects and classes.



Examples This statement initiates garbage collection:



GarbageCollect()
