# Table 10.70:

|Argument|Description|
|---|---|
|instancename|Instance name of the Profiling object.|
|list|An unbounded array variable of datatype ProfileClass in which ClassList stores a ProfileClass object for each class included in the model. This argument is passed by reference.|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • ModelNotExistsError! -- The function failed because no model exists Usage




You use the ClassList function to extract a list of the classes included in a performance analysis model. You must have previously created the performance analysis model from a trace file using the BuildModel function. Each class listed is defined as a ProfileClass object and provides the class name, its parent class and type, and a list of the routines associated with that class. The classes are listed in no particular order.



Examples This example lists the classes included in the performance analysis model:



ProfileClass lproclass_list[], lproclass_class Profiling lpro_model Long ll_limitclass, ll_indexclass



lpro_model = CREATE Profiling lpro_model.BuildModel()



lpro_model.ClassList(lproclass_list) ll_limitclass = UpperBound(lproclass_list)



FOR ll_indexclass = 1 TO ll_limitclass lproclass_class = lproclass_list[ll_indexclass]



... NEXT



See also BuildModel



10.60 ClassName



Determines the class of an object or the datatype of a variable.
