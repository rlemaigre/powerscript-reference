# Return value

Unsigned long. Returns the position at which the next data can be copied if it succeeds, and returns null if there is not enough space in blobvariable to copy the data. If any argument's value is null, BlobEdit returns null.



If the data argument is a string, the position in the blobvariable in which you want to copy data will be the length of the string + 2. If the data argument is a string converted to a blob, the position will be the length of the string + 1. This is because a string contains a null terminating character that it loses when it is converted to a blob. Thus, BlobEdit (blob_var, 1, "ZZZ'') returns 5, while BlobEdit (blob_var, 1, blob (''ZZZ'') ) returns 4.



Use the encoding parameter if the data argument is a string and you want to generate a blob with a specific encoding.
