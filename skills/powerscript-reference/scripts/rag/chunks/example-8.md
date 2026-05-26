# Example 8

This example passes the string data using POST method and retrieves data to a DataWindowChild.



int li_return string ls_data RestClient lnv_restClient DataWindowChild ldwc_dept lnv_restClient = create RestClient



//Get DataWindowChild dw_emp.getchild("dept_id", ldwc_dept)



ls_data = "{'id':100}" lnv_restClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") //Get data from web api using POST method



li_return = lnv_restClient.retrieve(ldwc_dept, "http://demo.appeon.com/pb/ webapi_client/department/RetrievePassJson", ls_data)



if li_return >= 0 then



messagebox("Success", "Rows = " + string(li_return)) else



messagebox("Error", "Failed to retrieve data.") end if
