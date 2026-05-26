# Package must run in a dedicated server process

To support role-checking, the COM+ package must be activated as a Server package, not a Library package. Server packages run in a dedicated server process. Library packages run in the creator's process and are used primarily for debugging.



IsCallerInRole only returns a meaningful value when security checking is enabled. Security checking can be enabled in the COM/COM+ Project wizard or the Project painter
