# Examples

If the clipboard contains the data shown below and the graph does not have any data yet, then the next statement produces a graph with two series and three categories. The clipboard data is:



- Sales 94Jan3000

- Sales 94Mar2200

- Sales 94May2500



Sales 95Jan4000



- Sales 95Mar3200


- Sales 95May3500 This statement copies all the data in the clipboard, as shown above, to gr_employee: gr_employee.ImportClipboard()






This statement copies the data from the clipboard starting with row 2 column 3 and copying to row 30 column 5 to the graph gr_employee:



gr_employee.ImportClipboard(2, 30, 3)



See also ImportFile ImportString
