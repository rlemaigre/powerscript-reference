# Return value

Long. Returns the long that represents the color created by combining the values specified in red, green, and blue. If an error occurs, RGB returns -1. If any argument's value is null, RGB returns null.



Usage The formula for combining the colors is:



65536 * Blue+ 256 * Green+ Red



Use RGB to obtain the long value required to set the color for text and drawing objects. You can also set an object's color to the long value that represents the color. The RGB function provides an easy way to calculate that value.
