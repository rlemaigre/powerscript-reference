# Caution

If you turn redraw off, you must turn it on again. Otherwise, problems may result. In addition, if redraw is off and you change the Visible or Enabled property of an object in the window, the tabbing order may be affected.



Examples This statement turns off redraw for lb_Location:



lb_Location.SetRedraw(FALSE)



If lb_Location is sorted (lb_Location.Sorted = TRUE), these statements use SetRedraw to avoid sorting and redrawing the list of lb_Location until all the new items have been added:



lb_Location.SetRedraw(FALSE) lb_Location.AddItem("Atlanta") lb_Location.AddItem("Boston") lb_Location.AddItem("Washington") lb_Location.SetRedraw(TRUE)
