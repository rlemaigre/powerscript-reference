# Usage

To cycle through the open sheets in a frame, use GetFirstSheet to get the front sheet and GetNextSheet one or more times to get the rest of the sheets. Test each return value with IsValid to see if you have reached the last sheet. Do not use GetFirstSheet and GetNextSheet in combination with GetActiveSheet.
