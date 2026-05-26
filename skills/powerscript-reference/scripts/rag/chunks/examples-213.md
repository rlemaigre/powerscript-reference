# Examples

These statements convert 35 horizontal pixels to PowerBuilder units and set the variable Value equal to the converted value:



integer Value Value = PixelsToUnits(35, XPixelsToUnits!)



See also UnitsToPixels



- 10.458 Play Description Starts playing an animation (an AVI clip). Applies to Animation controls Syntax animationname.Play ( from, to, replay )


- Table 10.579:




|Argument|Description|
|---|---|
|animationname|The name of the animation control displaying the AVI clip.|
|from|A long value in the range 0 to 65,535 indicating the frame where playing starts.The value 0 starts playing the clip at the first frame.|
|to|A long value in the range -1 to 65,535 indicating the frame where playing ends. The value -1 stops playing the clip at the last frame.|
|replay|A long value in the range -1 to 65,535 indicating the number of times to replay the clip. The value -1 continues playing the clip indefinitely.|



Return value Integer. Returns 1 for success and -1 for failure. Usage



Start plays an opened AVI file in an animation control. If you specify a value for any argument that is not in the specified range, Start does nothing and returns -1.
