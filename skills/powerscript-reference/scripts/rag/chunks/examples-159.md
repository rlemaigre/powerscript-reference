# Examples

These statements insert a category called Macs before the category named PCs in the graph gr_product_data:



integer CategoryNbr // Get the number of the category. CategoryNbr = FindCategory("PCs") gr_product_data.InsertCategory("Macs", CategoryNbr)



In a graph reporting mail volume in the afternoon, these statements add three categories to a time axis. If the axis is sorted, the order in which you add the categories does not matter:



catnum = gr_mail.InsertCategory(13:00, 0) catnum = gr_mail.InsertCategory(12:00, 0) catnum = gr_mail.InsertCategory(13:00, 0)
