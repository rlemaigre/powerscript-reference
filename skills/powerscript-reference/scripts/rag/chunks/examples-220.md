# Examples

This example calls the PostURL function using server port 8080. Iinet is an instance variable of type inet:



Blob lblb_args String ls_headers String ls_url Long ll_length



iir_msgbox = CREATE n_ir_msgbox ls_url = "https://www.appeon.com/" ls_url += "cgi-bin/pbcgi60.exe/" ls_url += "myapp/n_cst_html/f_test?" lblb_args = blob("") ll_length = Len(lblb_args) ls_headers = "Content-Length: " &



+ String(ll_length) + "~n~n" iinet.PostURL &



(ls_url, lblb_args, ls_headers, 8080, iir_msgbox)



This example shows the use of a header with the correct content-type for a form:



Blob lblb_args String ls_headers String ls_url String ls_args long ll_length integer li_rc



- li_rc = GetContextService( "Internet", iinet_base ) IF li_rc = 1 THEN ir = CREATE n_ir ls_url = "http://localhost/Site/ testurl.stm?"




ls_args = "user=MyName&pwd=MyPasswd" lblb_args = Blob( ls_args ) ll_length = Len( lblb_args ) ls_header = "Content-Type: " + &



"application/x-www-form-urlencoded~n" + & "Content-Length: " + String( ll_length ) + "~n~n"



li_rc = iinet.PostURL( ls_url, lblb_args, &



ls_header, ir ) END IF



See also GetURL HyperLinkToURL InternetData
