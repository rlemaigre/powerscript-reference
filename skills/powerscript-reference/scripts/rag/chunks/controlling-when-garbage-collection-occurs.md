# Controlling when garbage collection occurs

Garbage collection occurs automatically in PowerBuilder, but you can use the functions GarbageCollect, GarbageCollectGetTimeLimit, and GarbageCollectSetTimeLimit to force immediate garbage collection or to change the interval between reference count checks. By setting the interval between garbage collection passes to a very large number, you can effectively turn off garbage collection.
