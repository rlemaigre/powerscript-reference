# Return value

grObjectType. Returns a value of the grObjectType enumerated datatype if the user clicks anywhere in the graph (including an empty area) and a null value if the user clicks outside the graph.



Values of grObjectType and the parts of the graph associated with them are:



- • TypeCategory! -- A label for a category
- • TypeCategoryAxis! -- The category axis or between the category labels
- • TypeCategoryLabel! -- The label of the category axis
- • TypeData! -- A data point or other data marker
- • TypeGraph! -- Any place within the graph control that is not another grObjectType
- • TypeLegend! -- Within the legend box, but not on a series label
- • TypeSeries! -- The line that connects the data points of a series when the graph's type is line or on the series label in the legend box
- • TypeSeriesAxis! -- The series axis of a 3D graph
- • TypeSeriesLabel! -- The label of the series axis of a 3D graph


- • TypeTitle! -- The title of the graph
- • TypeValueAxis! -- The value axis, including on the value labels
- • TypeValueLabel! -- The user clicked the label of the value axis
