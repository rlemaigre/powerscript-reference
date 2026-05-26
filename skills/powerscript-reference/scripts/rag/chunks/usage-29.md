# Usage

When all persisted sheets are opened using the LoadDockingState and OpenSheetFromDockingState or OpenSheetWithParmFromDockingState, the CommitDocking does the work of arranging everything in place and making it all visible.



Examples Restore all sheets for register



string s1[], s2[] string is_register = "Appeon\PowerBuilder\Examples\Docking\" integer li_start, li_end, li_i, li_rtn li_rtn = LoadDockingState(is_register,s1,s2) window lw_window li_start = lowerbound(s1) li_end = upperbound(s2)



for li_i = li_start to li_end



openSheetFromDockingState(lw_window,s1[li_i], this, s2[li_i]) next CommitDocking()
