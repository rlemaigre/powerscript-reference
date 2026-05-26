# Usage

Use PrintSend to send escape sequences to specific printers (for example, to set condensed mode or to set margins). Escape sequences are printer specific.



As with any string, the number zero terminates the string argument. If the printer code you want to send includes a zero, you can use another character for zero in string and specify the character that represents zero in zerochar. The character you select should be a character you do not usually use. When PowerBuilder sends the string to the printer it converts the substitute character to a zero.



A typical print job, in which you want to make printer-specific settings, might consist of the following function calls:



- 1. PrintOpen
- 2. PrintSend, to change the printer orientation, select a tray, and so on


- 3. PrintDefineFont and PrintSetFont to specify fonts for the job
- 4. Print to output job text
- 5. PrintClose
