# Examples

This example generates a result set in a ResultSet object from an existing DataStore object. The ResultSet object is used to populate a new ADOResultSet object. The GetRecordSet function on the ADOResultSet object is used to return an ADO Recordset as an OLEObject that can be used with ADO Recordset methods.



resultset lrs_resultset ADOresultset lrs_ADOresultset OLEObject loo_ADOrecordset // Generate a result set from an existing DataStore ds_source.GenerateResultSet(lrs_resultset)



// Create a new ADOResultSet object and populate it // from the generated result set lrs_ADOresultset = CREATE ADOResultSet lrs_ADOresultset.SetResultSet(lrs_resultset)



// Pass the data in the ADOResultSet object // to an OLEObject you can use as an ADO Recordset loo_ADOrecordset = CREATE OLEObject lrs_ADOresultset.GetRecordSet(loo_ADOrecordset) // Call native ADO Recordset methods on the OLEObject loo_ADOrecordset.MoveFirst()



See also GenerateResultSet method for DataWindows in Section 9.42, “GenerateResultSet” in DataWindow Reference. SetRecordSet SetResultSet



- 10.258 GetRefreshToken Description Gets the refresh token returned by the authorization server. Applies to TokenResponse objects Syntax objectname.GetRefreshToken ( )


- Table 10.315:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenResponse object in which you want to get the refresh token.|



Return value String. Returns the refresh token if it exists. Examples



The following example shows the use of the GetRefreshToken function to get the refresh token:



string ls_refreshtoken TokenResponse lnv_TokenResponse



ls_refreshtoken = lnv_TokenResponse.getrefreshtoken()



See also GetAccessToken GetBody GetExpiresIn GetHeader GetHeaders GetStatusCode GetStatusText GetTokenError GetTokenType
