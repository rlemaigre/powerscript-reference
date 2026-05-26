# Examples

These statements create a mail session, send a message, and then log off the mail system and destroy the mail session object:



mailSession mSes mailReturnCode mRet mailMessage mMsg



// Create a mail session mSes = create mailSession



// Log on to the session mRet = mSes.mailLogon(mailNewSession!) IF mRet <> mailReturnSuccess! THEN



MessageBox("Mail", 'Logon failed.') RETURN



END IF // Populate the mailMessage structure mMsg.Subject = mle_subject.Text mMsg.NoteText = 'Luncheon at 12:15' mMsg.Recipient[1].name = 'Smith, John' mMsg.Recipient[2].name = 'Shaw, Sue' // Send the mail mRet = mSes.mailSend(mMsg)



IF mRet <> mailReturnSuccess! THEN MessageBox("Mail Send", 'Mail not sent') RETURN



END IF mSes.mailLogoff() DESTROY mSes



See also the mail examples in the samples supplied with PowerBuilder. See also mailReadMessage mailResolveRecipient



- 10.405 Match Description Determines whether a string's value contains a particular pattern of characters. Syntax Match ( string, textpattern )


- Table 10.493:



|Argument|Description|
|---|---|
|string|The string in which you want to look for a pattern of characters|
|textpattern|A string whose value is the text pattern|



Return value Boolean. Returns true if string matches textpattern and false if it does not. Match also returns false if either argument has not been assigned a value or the pattern is invalid. If any argument's value is null, Match returns null. Usage



Match enables you to evaluate whether a string contains a general pattern of characters. To find out whether a string contains a specific substring, use the Pos function.



Textpattern is similar to a regular expression. It consists of metacharacters, which have special meaning, and ordinary characters, which match themselves. You can specify that the string begin or end with one or more characters from a set, or that it contain any characters except those in a set.



A text pattern consists of metacharacters, which have special meaning in the match string, and nonmetacharacters, which match the characters themselves.The following tables explain the meaning and use of these metacharacters.



- Table 10.494: Metacharacters used by Match function




|Metacharact|erMeaning|Example|
|---|---|---|
|Caret (^)|Matches the beginning of a string|^C matches C at the beginning of a string.|



|Metacharact|erMeaning|Example|
|---|---|---|
|Dollar sign ($)|Matches the end of a string|s$ matches s at the end of a string.|
|Period (.)|Matches any character|. . . matches three consecutive characters.|
|Backslash (\)|Removes the following metacharacter's special characteristics so that it matches itself|\$ matches $.|
|Character class (a group of characters enclosed in square brackets ([ ]))|Matches any of the enclosed characters|[AEIOU] matches A, E, I, O, or U.<br><br>You can use hyphens to abbreviate ranges of characters in a character class. For example, [A-Za-z] matches any letter.|
|Complemente character class (first character inside the brackets is a caret)|dMatches any character not in the group following the caret|[^0-9] matches any character except a digit, and [^AZa-z] matches any character except a letter.|
