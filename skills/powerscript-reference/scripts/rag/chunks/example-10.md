# Example 10

This example gets data from a Web site with token authentication and then retrieves data to a DataWindow.



integer li_return RestClient lnv_restClient TokenRequest lnv_tokenRequest



lnv_restClient = create RestClient lnv_TokenRequest.tokenlocation = "http://demo.appeon.com/pb/identityserver/connect/ token" //Location of the token lnv_TokenRequest.method = "post" //Request method lnv_TokenRequest.granttype = "client_credentials" //Grant type lnv_TokenRequest.clientid = "GRfjNAfCg2bI47l1sX5zdFiTEmdrkCKa20zm5YVS4iM=" //client



ID lnv_TokenRequest.clientsecret = "K7gNU3sdo-OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" // client certificate



li_return = lnv_restClient.retrieve(dw_dept, "http://demo.appeon.com/pb/ webapi_client/identity/departments", lnv_tokenRequest)



if li_return >= 0 then



messagebox("Success", "Rows " + string(li_return)) else



messagebox("Error", "Failed to retrieve data.") end if
