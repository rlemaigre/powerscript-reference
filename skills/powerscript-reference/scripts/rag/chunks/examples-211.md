# Examples

This example gets a list of the routines included in a performance analysis model and then gets a list of the routines called by each routine:



Long ll_cnt ProfileCall lproc_call[]



lpro_model.BuildModel() lpro_model.RoutineList(iprort_list)



FOR ll_cnt = 1 TO UpperBound(iprort_list) iprort_list[ll_cnt].OutgoingCallList(lproc_call, & TRUE)



... NEXT
