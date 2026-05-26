# Examples

These statements retrieve the command line arguments and save them in the variable ls_command_line:



string ls_command_line ls_command_line = CommandParm()



If the command line holds several arguments, you can use string functions to separate the arguments. This example stores a variable number of arguments, obtained with CommandParm, in an array. The code assumes each argument is separated by one space. For each argument, the Pos function searches for a space; the Left function copies the argument to the array; and Replace removes the argument from the original string so the next argument moves to the first position:



string ls_cmd, ls_arg[] integer i, li_argcnt



// Get the arguments and strip blanks // from start and end of string ls_cmd = Trim(CommandParm())



li_argcnt = 1 DO WHILE Len(ls_cmd) > 0



// Find the first blank i = Pos( ls_cmd, " ")



// If no blanks (only one argument), // set i to point to the hypothetical character // after the end of the string if i = 0 then i = Len(ls_cmd) + 1



// Assign the arg to the argument array. // Number of chars copied is one less than the // position of the space found with Pos ls_arg[li_argcnt] = Left(ls_cmd, i - 1)



// Increment the argument count for the next loop li_argcnt = li_argcnt + 1



// Remove the argument from the string // so the next argument becomes first ls_cmd = Replace(ls_cmd, 1, i, "")



LOOP



- 10.75 CommitDocking Description After all persisted sheets are opened, this function arranges them and makes them visible. Applies to Windows objects
