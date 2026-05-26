# Examples

- Example 1



This statement stops the application if the user enters a password in the SingleLineEdit named sle_password that does not match the value stored in a string named CorrectPassword:



IF sle_password.Text <> CorrectPassword THEN HALT



- Example 2




This statement executes the script for the Close event for the application before it terminates the application if the user enters a password in sle_password that does not match the value stored in the string CorrectPassword:



IF sle_password.Text <> CorrectPassword & THEN HALT CLOSE
