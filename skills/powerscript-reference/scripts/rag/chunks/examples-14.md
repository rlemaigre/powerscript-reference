# Examples

- Example 1 These statements provide different processing based on the value of the variable Weight:



CHOOSE CASE Weight



CASE IS<16 Postage=Weight*0.30 Method="USPS"



CASE 16 to 48



Postage=4.50 Method="UPS"



CASE ELSE Postage=25.00 Method="FedEx"



END CHOOSE



- Example 2




These statements convert the text in a SingleLineEdit control to a real value and provide different processing based on its value:



CHOOSE CASE Real(sle_real.Text) CASE is < 10.99999



sle_message.Text = "Real Case < 10.99999" CASE 11.00 to 48.99999



sle_message.Text = "Real Case 11 to 48.9999 CASE is > 48.9999



sle_message.Text = "Real Case > 48.9999" CASE ELSE



sle_message.Text = "Cannot evaluate!" END CHOOSE
