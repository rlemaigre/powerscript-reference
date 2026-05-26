# Examples

This statement removes the checkmark next to the m_grid menu selection in the drop-down menu m_view on the menu bar m_appl:



m_appl.m_view.m_grid.Uncheck()



This example checks whether the m_grid menu selection in the drop-down menu m_view of the menu bar m_appl is currently checked. If so, the script unchecks the item. If it is not checked, the script checks the item:



IF m_appl.m_view.m_grid.Checked = TRUE THEN



m_appl.m_view.m_grid.Uncheck() ELSE



m_appl.m_view.m_grid.Check() END IF
