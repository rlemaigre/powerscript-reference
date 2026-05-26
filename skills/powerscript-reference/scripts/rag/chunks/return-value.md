# Return value

Long. Returns the position of the data value in the series if it succeeds and -1 if an error occurs. If any argument's value is null, AddData returns null. Usage



When you use Syntax 1, AddData adds a value to the end of the specified series or to the specified category, if it already exists. If categoryvalue is a new category, the category is added to the end of the series with a label for the data point's tick mark. If the axis is sorted, the new category is incorporated into the existing order. If the category already exists, the new data replaces the old data at the data point for the category.



For example, if the third category label specified in series 1 is March and you add data in series 4 and specify the category label March, the data is added at data point 3 in series 4.



When the axis datatype is string, you can specify the empty string ("") as the category name. Because category names must be unique, there can be only one category with a blank name. If you use AddData to add data without specifying a category, you will have data points without categories, which is not the same as a category whose name is "".



To insert data in the middle of a series, use InsertData. You can also use InsertData to add data to the end of a series, as AddData does, although it requires an additional argument to do it.



For a comparison of AddData, InsertData, and ModifyData, see Equivalent Syntax in InsertData.
