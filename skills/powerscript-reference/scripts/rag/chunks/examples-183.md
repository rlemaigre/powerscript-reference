# Examples

The following example uses Lookup with the Connection object to locate the home interface of the Multiply session EJB in the Java package abc.xyz.math:



// Instance variable: // Connection myconnect Multiply myMultiply MultiplyHome myMultiplyHome long ll_result, ll_product



ll_result = & myconnect.lookup(myMultiplyHome,"Math/Multiply", &



"abc.xyz.math.MultiplyHome) IF ll_result <> = 0 THEN



MessageBox("Lookup failed", myconnect.errtext) ELSE



try



myMultiply = myMultiplyHome.create() catch (ctscomponents_createexception ce) MessageBox("Create exception", ce.getmessage()) // handle exception



end try ll_product = myMultiply.multiply(1234, 4567)



END IF



Entity beans have a findByPrimaryKey method that you can use to find an EJB saved in the previous session. This example uses that method to find a shopping cart saved for Dirk Dent:



// Instance variable: // Connection myconnect Cart myCart CartHome myCartHome long ll_result



ll_result = & myconnect.lookup(myCartHome,"Shopping/Cart", &



"com.mybiz.shopping.CartHome") IF ll_result <> = 0 THEN



MessageBox("Lookup failed", myconnect.errtext) ELSE



TRY



myCart = myCartHome.findByPrimaryKey("DirkDent") myCart.addItem(101)



CATCH ( ctscomponents_finderexception fe ) MessageBox("Finder exception", &



fe.getmessage()) END TRY



END IF



Nonvisual objects deployed from PowerBuilder to EAServer can use an instance of the TransactionServer context object to locate the home interface of an EJB component in the same server:



CalcHome MyCalcHome Calc MyCalc TransactionServer ts ErrorLogging errlog long ll_result



this.GetContextService("TransactionServer", ts) this.GetContextService("ErrorLogging", errlog) ll_result = ts.lookup(MyCalcHome, "Utilities/Calc", &



"com.biz.access.utilities.CalcHome") IF ll_result <> 0 THEN



errlog.log("Lookup failed: " + string(ll_result)) ELSE



TRY MyCalc = MyCalcHome.create() MyCalc.square(12) CATCH (ctscomponents_createexception ce)



errlog.log("Create exception: " + ce.getmessage()) END TRY



END IF



See also ConnectToServer (obsolete)



- 10.392 Lower Description Converts all the characters in a string to lowercase. Syntax




Lower ( string )



- Table 10.480:



|Argument|Description|
|---|---|
|string|The string you want to convert to lowercase letters|



Return value String. Returns string with uppercase letters changed to lowercase if it succeeds and the empty string ("") if an error occurs. If string is null, Lower returns null. Examples This statement returns babe ruth:



Lower("Babe Ruth")



See also Upper Lower method for DataWindows in Section 2.4.72, “Lower” in DataWindow Reference.



10.393 LowerBound



Description Obtains the lower bound of a dimension of an array. Syntax



LowerBound ( array {, n } )



- Table 10.481:




|Argument|Description|
|---|---|
|array|The name of the array for which you want the lower bound of a dimension|
|n (optional)|The number of the dimension for which you want the lower bound. The default is 1|



Return value Long. Returns the lower bound of dimension n of array and -1 if n is greater than the number of dimensions of the array. If any argument's value is null, LowerBound returns null. Usage



For variable-size arrays, memory is allocated for the array when you assign values to it. Before you assign values, the lower bound is 1 and the upper bound is 0.
