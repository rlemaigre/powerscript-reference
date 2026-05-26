# Return value

Boolean. Returns true if the direct caller is in the specified role and false if it is not. Usage



In COM+, a role is a name that represents the set of access permissions for a specific user or group of users. For example, a component that provides access to a sales database might have different roles for managers and salespersons.



In your code, you use IsCallerInRole to determine whether the caller of the current method is associated with a specific role before you execute code that performs a task restricted to users in that role.



IsCallerInRole only determines whether the direct caller of the current method is in the specified role. The direct caller may be either a client process or a server process.
