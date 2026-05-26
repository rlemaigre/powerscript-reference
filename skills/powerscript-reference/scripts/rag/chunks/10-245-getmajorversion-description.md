# 10.245 GetMajorVersion Description

Returns the major version for the current PowerBuilder execution context. For example, at maintenance level 11.5.1 the major version is 11.



Applies to ContextInformation objects Syntax



servicereference.GetMajorVersion ( majorversion )



- Table 10.302:




|Argument|Description|
|---|---|
|servicereference|Reference to the ContextInformation service instance.|
|majorversion|Integer into which the function places the major version. This argument is passed by reference.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage Call this function to determine the current major version. Examples This example calls the GetMajorVersion function:



String ls_name Constant String ls_currver = "8.0.3" Integer li_majver, li_minver, li_fixver ContextInformation ci



this.GetContextService ("ContextInformation", ci) GetMajorVersion(li_majver) ci.GetMinorVersion(li_minver) ci.GetFixesVersion(li_fixver) IF li_majver <> 8 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) ELSEIF li_minver <> 0 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) ELSEIF li_fixver <> 3 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) END IF



See also GetCompanyName GetFixesVersion GetHostObject GetMinorVersion GetName GetShortName GetVersionName



- 10.246 GetMessage Description Returns the error message from objects of type Throwable. Syntax throwableobject.GetMessage ( )


- Table 10.303:




|Argument|Description|
|---|---|
|throwableobject|Object of type Throwable from which you want to retrieve an error message|



Return value String. The error text for system error objects, such as RuntimeError, is preset. Usage



You can set the error message for an object of type Throwable using the SetMessage function.
