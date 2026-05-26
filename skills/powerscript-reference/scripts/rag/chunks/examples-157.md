# Examples

This script is part of the SelectionChanged event for the ListBox lb_instruments. When the user clicks on an item in the ListBox, the selected instrument name is assigned to the input field called instrument in the RichTextEdit rte_1:



integer rtn rtn = rte_1.InputFieldChangeData &



("instrument", lb_instruments.SelectedItem()) st_status.Text = String(rtn)



If the text in rte_1 looks like this: Dear {title} {lastname}: We're happy you have rented a {instrument} for your child. Please perform regular maintenance for the {instrument} as instructed by your child's teacher. You can buy {instrument} supplies and instruction books at your local music stores. Then after the user picks trumpet in the ListBox, the script inserts trumpet for every occurrence of the {instrument} field. The other fields are not affected: Dear {title} {lastname}: We're happy you have rented a trumpet for your child. Please perform regular maintenance for the trumpet as instructed by your child's teacher. You can buy trumpet supplies and instruction books at your local music stores. See also InputFieldCurrentName InputFieldDeleteCurrent InputFieldGetData InputFieldInsert InputFieldLocate DataSource
