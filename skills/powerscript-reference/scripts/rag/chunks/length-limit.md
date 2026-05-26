# Length limit

FileWrite can write only 32,766 bytes at a time, which includes the string terminator character. If the length of variable exceeds 32,765 bytes, FileWrite writes the first 32,765 bytes and returns 32,765. Use FileWriteEx to handle variables that have more than 32,765 bytes.
