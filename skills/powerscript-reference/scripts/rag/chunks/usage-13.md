# Usage

The variable following the THROW reserved word must be a valid object instance or an expression that produces a valid object instance that derives from the Throwable datatype. For example, you can use an expression such as:



THROW create ExceptionType



where ExceptionType is an object of type Throwable. If you attempt to throw a noninstantiated exception, you will not get back the exception information you want, since the only exception information you retrieve will be a NullObjectError. In a method script, you can only throw an exception that you declare in the method prototype or that you handle in a try-catch block. The PowerScript compiler displays an error message if you try to throw a user-defined exception without declaring it in the prototype Throws statement and without surrounding it in an appropriate try-catch block. When a RuntimeError, or a descendant of RuntimeError, is thrown, the instance variable containing line number information will be filled in at the point where the THROW statement occurs. If the error is handled and thrown again, this information will not be updated unless it has specifically been set to null. Examples



long ll_result ll_result = myConnection.ConnectToServer()



ConnectionException ex ex = create ConnectionException ex.connectResult = ll_result THROW ex



end if
