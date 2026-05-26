# Examples

In this example, some code is processing a long task. A second window includes a button that the user can click to interrupt the loop by setting a shared boolean variable sb_interrupt. When the user clicks the button, its Clicked script sets sb_interrupt, shown here:



sb_interrupt = TRUE



The script that is doing the processing checks the shared variable sb_interrupt and interrupts the processing if it is true. The Yield function allows a break in the processing so the user has the opportunity to click the button:



integer n // sb_interrupt is a shared variable. sb_interrupt = FALSE



FOR n = 1 to 3000 Yield() IF sb_interrupt THEN // var set in other script



MessageBox("Debug","Interrupted!") sb_interrupt = FALSE EXIT



ELSE



... // Some processing END IF



NEXT



In this example, this script doing some processing runs in one window while users interact with controls in a second window. Without Yield, users could click in the second window, but they would not see focus change or their actions processed until the loop completed:



integer n FOR n = 1 to 3000



Yield()



... // Some processing NEXT



In this example, a script wants to open a DDE channel with Lotus Notes, whose executable name is stored in the variable mailprogram. If the program is not running, the script starts it and loops, waiting until the program's startup is finished and it can establish a DDE channel. The loop includes Yield, so that the computer can spend time actually starting the other program:



time starttime long hndl



SetPointer(HourGlass!) //Try to establish a handle; SendMail is the topic. hndl = OpenChannel("Notes","SendMail")



//If the program is not running, start it IF hndl < 1 then



Run(mailprogram, Minimized!) starttime = Now()



// Wait up to 2 minutes for Notes to load // and the user to log on. DO



//Yield control occasionally. Yield() //Is Notes active yet? hndl = OpenChannel("Notes","SendMail") // If Notes is active. IF hndl > 0 THEN EXIT



LOOP Until SecondsAfter(StartTime,Now()) > 120 // If 2 minutes pass without opening a channel IF hndl < 1 THEN



MessageBox("Error", &



"Can't start Notes.", StopSign!) SetPointer(Arrow!) RETURN



END IF END IF
