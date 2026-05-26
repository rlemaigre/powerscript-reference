# Examples

This example gets a list of the routines included in a performance analysis model and then gets a list of the routines that called each routine:



Long ll_cnt ProfileCall lproc_call[]



lpro_model.BuildModel() lpro_model.RoutineList(i_routinelist)



FOR ll_cnt = 1 TO UpperBound(iprort_list) iprort_list[ll_cnt].IncomingCallList(lproc_call, & TRUE)



... NEXT



See also BuildModel OutgoingCallList
