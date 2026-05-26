# Return value

Blob. Returns length bytes from data starting at byte n. If n is greater than the number of bytes in data, BlobMid returns an empty blob. If together length and n add up to more bytes than the blob contains, BlobMid returns the remaining bytes, and the returned blob will be shorter than the specified length. If any argument's value is null, BlobMid returns null.
