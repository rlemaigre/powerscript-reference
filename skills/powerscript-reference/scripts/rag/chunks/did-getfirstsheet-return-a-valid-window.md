# Did GetFirstSheet return a valid window?

Use the IsValid function to find out if the return value is valid. If it is not, then no sheet is open.



Examples This script for a menu selection returns the top sheet in the MDI frame:



window wSheet string wName wSheet = ParentWindow.GetFirstSheet() IF IsValid(wSheet) THEN



// There is an open sheet wName = wsheet.ClassName() MessageBox("First Sheet is", wName)



END IF



See also GetNextSheet IsValid
