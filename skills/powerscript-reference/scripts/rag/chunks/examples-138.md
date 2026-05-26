# Examples

These statements ask Microsoft Excel to get the data in row 1 column 2 of a worksheet called PROFIT.XLS and put it in a PowerBuilder string called ls_ProfData. The single GetRemote call establishes a cold link, gets the data, and ends the link:



string ls_ProfData GetRemote("R1C2", ls_ProfData, &



"Excel", "PROFIT.XLS")



See also ExecRemote SetRemote



- 10.259.2 Syntax 2: For DDE requests via an open channel Description




Asks a DDE server application to provide data and stores that data in the specified variable when you have already established a warm link by opening a channel to the server. A warm link, with an open channel, is more efficient when you intend to make several DDE requests.
