# Examples

In this example, the GetValue function is called twice, once to return separate date and time values and once to return a DateTime value. The values returned are written to a multiline edit control:



date d



time t datetime dt integer li_ret1, li_ret2



li_ret1 = dp_1.GetValue(d, t) li_ret2 = dp_1.GetValue(dt)



mle_1.text += string(d) + " ~r~n" mle_1.text += string(t) + " ~r~n" mle_1.text += string(dt) + " ~r~n"



See also GetText SetValue



- 10.290.2 Syntax 2: for JSONPackage object Description Gets the value of the key. The key item must be a string, object, or array.




If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.GetValue ( Key )



- Table 10.359:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object|
|Key|A string specifying the key. If more than one key with the same name already exists, the value of the first key will be obtained.|
