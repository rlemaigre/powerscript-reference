# 1.6 Reserved words

The words PowerBuilder uses internally are called reserved words and cannot be used as identifiers. If you use a reserved word as an identifier, you get a compiler warning. Reserved words that are marked with an asterisk (*) can be used as function names.



- Table 1.5: PowerScript reserved words alias and autoinstantiate




execute exit external



not of on



step subroutine super



call case catch choose close* commit connect constant continue create* cursor declare delete describe* descriptor destroy disconnect do dynamic else elseif end enumerated event



false fetch finally first for forward from function global goto halt if immediate indirect insert into intrinsic is last library loop namespace native next



open* or parent post* prepare prior private privateread privatewrite procedure protected protectedread protectedwrite prototypes public readonly ref return rollback rpcfunc select selectblob shared static



system systemread systemwrite then this throw throws to trigger true try type until update* updateblob using variables while with within xor _debug



The PowerBuilder system class also includes private variables that you cannot use as identifiers. If you use a private variable as an identifier, you get an informational message and should rename your identifier.



If you are deploying a DataWindow to the Web, you cannot use JavaScript reserved words to name fields or bands in the DataWindow object. The list of reserved words is available at https://docs.microsoft.com/en-us/scripting/javascript/reference/javascript-reserved-words.
