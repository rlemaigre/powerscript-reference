# Check return code

It is a good idea to check the return code to determine whether TriggerEvent succeeded and, based on the result, perform the appropriate processing.



You can pass information to the event script with the word and long arguments. The information is stored in the Message object. In your script, you can reference the WordParm and LongParm fields of the Message object to access the information.



If you have specified a string for long, you can access it in the triggered event by using the String function with the keyword "address" as the format parameter. Your event script might begin as follows:



string PassedString PassedString = String(Message.LongParm, "address")
