# Using other applications while retrieving data

Although the user cannot do other activities in a PowerBuilder application while retrieving data, you can allow them to use other applications on their system. Put Yield in the RetrieveRow event so that other applications can run during the retrieval.



Of course, Yield will make your PowerBuilder application run slower because processing time will be shared with other applications.
