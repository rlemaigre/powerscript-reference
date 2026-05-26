# Dynamic calls

If you use the DYNAMIC keyword in a chain of cascaded calls, it carries over to all function calls that follow.



In this example, both func1 and func2 are called dynamically:



object1.DYNAMIC func1().func2()



The compiler reports an error if you use DYNAMIC more than once in a cascaded call. This example would cause an error:



object1.DYNAMIC func1().DYNAMIC func2() // error
