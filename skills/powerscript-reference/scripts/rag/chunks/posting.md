# Posting

When you post a function or event, it is added to the object's queue and executed in its turn. In most cases, it is executed when the current script is finished; however, if other system events have occurred in the meantime, its position in the queue might be after other scripts. Its return value is not available to the calling script.



Because POST makes the return value unavailable to the caller, you can think of it as turning the function or event call into a statement.



Use posting when activities need to be finished before the code checks state information or does further processing (see Example 2 below).
