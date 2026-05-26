# Return value

Real. Returns the value of stringorblob as a real. If stringorblob is not a valid PowerScript number or is an incompatible datatype, Real returns 0. If stringorblob is null, Real returns null.



Examples This statement returns 24 as a real:



Real("24")



This statement returns the contents of the SingleLineEdit sle_Temp as a real:



Real(sle_Temp.Text)



The following example, although of no practical value, illustrates how to assign real values to a blob and how to use Real to extract those values. The two BlobEdit statements store two real values in the blob, one after the other. In the statements that use Real to extract the values, you have to know where the beginning of each real value is. Specifying the correct length in BlobMid is not important because the Real function knows how many bytes to evaluate:



blob{20} lb_blob real r1, r2 integer len1, len2



len1 = BlobEdit(lb_blob, 1, 32750E0) len2 = BlobEdit(lb_blob, len1, 43750E0)



// Extract the real value at the beginning and



// ignore the rest of the blob



- r1 = Real(lb_blob) // Extract the second real value stored in the blob
- r2 = Real(BlobMid(lb_blob, len1, len2 - len1)) See also Double Integer Long Real method for DataWindows in Section 2.4.98, “Real” in DataWindow Reference.


- 10.507 RecognizeText Description Specifies that text in an InkEdit control should be recognized. Applies to InkEdit controls Syntax inkeditname.RecognizeText ( )

- Table 10.630:




|Argument|Description|
|---|---|
|inkeditname|The name of the InkEdit control in which you want to recognize text.|



Return value



- Integer. Returns 1 if text is recognized and 0 otherwise. Usage




By default, ink is recognized automatically when the user pauses while entering ink and the number of milliseconds specified in the RecognitionTimer property elapses. To enable a user to pause without having text recognized, increase the RecognitionTimer interval and code the RecognizeText function in a button clicked event or another event.



Examples



This code in the clicked event of a "Done" button causes the recognition engine to recognize the strokes entered by the user as text:



boolean lb_success lb_success = ie_1.RecognizeText()



- 10.508 RegistryDelete Description Deletes a key or a value for a key in the Windows system registry. Syntax RegistryDelete ( key, valuename )
