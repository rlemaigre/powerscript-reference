# See also

GarbageCollectGetTimeLimit GarbageCollectSetTimeLimit



- 10.173 GarbageCollectGetTimeLimit Description Gets the current minimum interval for garbage collection. Syntax GarbageCollectGetTimeLimit ( ) Return value Long. Returns the current minimum garbage collection interval. Usage Reads the current minimum period between garbage collection passes. Examples



This statement returns the interval between garbage collection passes in the variable CollectTime:



long CollectTime CollectTime = GarbageCollectGetTimeLimit()



See also GarbageCollect GarbageCollectSetTimeLimit



- 10.174 GarbageCollectSetTimeLimit Description Sets the minimum interval between garbage collection passes. Syntax




GarbageCollectSetTimeLimit ( newtimeinmilliseconds )
