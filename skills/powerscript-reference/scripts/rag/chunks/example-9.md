# Example 9

This example passes the blob data using POST method and retrieves data to a DataWindowChild.



int li_return blob lblb_data RestClient lnv_restClient DataWindowChild ldwc_dept



lnv_restClient = create RestClient lnv_restClient.setrequestheader("Content-Type", "Application/json;charset=utf-8")



//Convert the string to a blob



lblb_data = blob("{'id':100}", encodingutf8!) //Get DataWindowChild dw_emp.getchild("dept_id", ldwc_dept) //Pass data from web api using POST method li_return = lnv_restClient.retrieve(ldwc_dept, "http://demo.appeon.com/pb/ webapi_client/department/RetrievePassJson", lblb_data) if li_return >= 0 then



messagebox("Success", "Rows = " + string(li_return)) else



messagebox("Error", "Failed to retrieve data.") end if
