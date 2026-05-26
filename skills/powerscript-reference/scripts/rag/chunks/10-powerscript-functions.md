# 10 PowerScript Functions

About this chapter This chapter provides syntax, descriptions, and examples for PowerScript functions. Contents The functions are listed alphabetically. See also



For information about functions that apply to DataWindows or DataStores, see also DataWindow Reference. Methods that apply to DataWindows, but not to other PowerBuilder controls, are listed only in DataWindow Reference.



- 10.1 Abs Description Calculates the absolute value of a number. Syntax Abs ( n )

- Table 10.1:




|Argument|Description|
|---|---|
|n|The number for which you want the absolute value|



Return value The datatype of n. Returns the absolute value of n. If n is null, Abs returns null. Examples All these statements set num to 4:



integer i, num i = 4 num = Abs(i) num = Abs(4) num = Abs(+4) num = Abs(-4)



This statement returns 4.2:



Abs(-4.2)



See also Abs method for DataWindows in Section 2.4.1, “Abs” in DataWindow Reference



- 10.2 ACos Description Calculates the arccosine of an angle.




ACos ( n )



- Table 10.2:




|Argument|Description|
|---|---|
|n|The ratio of the lengths of two sides of a triangle for which you want a corresponding angle (in radians). The ratio must be a value between -1 and 1.|



Return value Double. Returns the arccosine of n. Examples This statement returns 0:



ACos(1)



This statement returns 3.141593 (rounded to six places):



ACos(-1)



This statement returns 1.000000 (rounded to six places):



ACos(.540302)



This code in the Clicked event of a button catches a runtime error that occurs when an arccosine is taken for a user-entered value -- passed in a variable -- that is outside of the permitted range:



Double ld_num ld_num = Double (sle_1.text)



TRY sle_2.text = string (acos (ld_num)) CATCH (runtimeerror er)



MessageBox("Runtime Error", er.getmessage()) END TRY



See also Cos ASin ATan ACos method for DataWindows in Section 2.4.2, “ACos” in DataWindow Reference



- 10.3 AccessToken Description Sends a request to get the token information. Applies to OAuthClient objects




objectname.AccessToken ( TokenRequest tokenRequest, TokenResponse tokenResponse )



- Table 10.3:




|Argument|Description|
|---|---|
|objectname|A reference to the OAuthClient object.|
|tokenRequest|A reference to the TokenRequest object specifying the request information.|
|tokenResponse|A reference to the TokenResponse object into which the function returns the object.|



Return value Integer. Returns the value as follows. If any argument's value is null, the method returns null.



- 1 -- Success


- -1 -- A general error occurred
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timeout Examples




The following example shows the use of the AccessToken function to get the token information:



int li_return OAuthClient lnv_OAuthClient TokenRequest lnv_TokenRequest TokenResponse lnv_TokenResponse



lnv_OAuthClient = create OAuthClient li_return = lnv_OAuthClient.accesstoken(lnv_TokenRequest, lnv_TokenResponse)



See also RequestResource
