# Adding comment markers

In Script views and the Function painter, you can use the Comment Selection button (or select Edit>Comment Selection from the menu bar) to comment out the line containing the cursor or a selected group of lines.



For information about adding comments to objects and library entries, see the Section 5.4.13, “Modifying comments” in Users Guide.



Examples Double-slash method



// This entire line is a comment. // This entire line is another comment. amt = qty * cost // Rest of the line is comment.



// The following statement was commented out so that it // would not execute. // SetNull(amt)



Slash-and-asterisk method



/* This is a single-line comment. */ /* This comment starts here, continues to this line, and finally ends here. */ A = B + C /* This comment starts here. /* This is the start of a nested comment.



The nested comment ends here. */ The first comment ends here. */ + D + E + F
