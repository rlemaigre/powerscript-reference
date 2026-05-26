# Examples

This example opens a print job and sends an escape sequence to a printer in IBM Proprinter mode to change the margins. There is no need to designate a character to represent zero:



long Job // Open a print job. Job = PrintOpen() /* Send the escape sequence. 1B is the escape character in hexadecimal. X indicates that you are changing the margins. 030 sets the left margin to 30 character spaces. 040 sets the right margin to 40 character spaces.



- */ PrintSend(Job," ~ h1BX ~ 030 ~ 040")



... // Print text or DataWindow // Send the job to the printer or spooler. PrintClose(Job)



This example opens a print job and sends an escape sequence to a printer in IBM Proprinter mode to change the margins. The decimal ASCII code 255 represents zero:



long Job // Open a print job. Job = PrintOpen() /* Send the escape sequence. 1B is the escape character, in hexadecimal. X indicates that you are changing the margins. 255 sets the left margin to 0. 040 sets the right margin to 40 character spaces.



- */ PrintSend(Job, "~h1BX~255~040", 255) PrintDataWindow(Job, dw_1)




// Send the job to the printer or spooler. PrintClose(Job)
