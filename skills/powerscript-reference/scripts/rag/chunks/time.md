# Time

The time in 24-hour format, including the hour (00 to 23), minute (00 to 59), second (00 to 59), and fraction of second (up to six digits), with a range from 00:00:00 to 23:59:59.999999.



PowerBuilder supports microseconds in the database interface for any DBMS that supports microseconds.



Using literals The time in 24-hour format, including the hour (00 to 23), minute (00 to 59), second (00 to 59), and fraction of second (up to six digits), with a range from 00:00:00 to 23:59:59.999999. You separate parts of the time with colons -- except for the fractions of seconds, which should be separated by a decimal point. For example:



21:09:15 // 15 seconds after 9:09 pm 06:00:00 // Exactly 6 am



- 10:29:59 // 1 second before 10:30 am 10:29:59.9 // 1/10 sec before 10:30 am UnsignedInteger, UnsignedInt, or UInt 16-bit unsigned integers, from 0 to 65535. UnsignedLong or ULong




32-bit unsigned integers, from 0 to 4294967295.
