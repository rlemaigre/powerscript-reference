# Examples

This statement connects to the destination database using the transaction instance variable i_dst. It then updates the database with the corrections made in the Error DataWindow for pipeline i_pipe:



i_pipe.Repair(i_dst)
