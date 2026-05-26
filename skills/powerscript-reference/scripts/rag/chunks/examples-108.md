# Examples

This excerpt from a script for the RemoteExec event checks to see if the action requested by the DDE client is Open Next Sheet. If it is, the DDE server opens another instance of the sheet DataSheet. If the requested action is Shut Down, the DDE server shuts itself down. Otherwise, it lets the DDE client know the requested action was invalid.



The variables ii_sheetnum and i_DataSheet[ ] are instance variables for the window that responds to the DDE event:



integer ii_sheetnum DataSheet i_DataSheet[ ]



This script that follows uses the local variable ls_Action to store the command sent by the client application:



string ls_Action GetCommandDDE(ls_Action) IF ls_Action = "Open Next Sheet" THEN ii_sheetnum = ii_sheetnum + 1 OpenSheet(i_DataSheet[ii_sheetnum], w_frame_emp)



ELSEIF ls_Action = "Shut Down" THEN



HALT CLOSE ELSE



RespondRemote(FALSE) END IF
