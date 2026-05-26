# Note for Adaptive Server Enterprise

If your DBMS is Adaptive Server Enterprise and you call SyntaxFromSQL, PowerBuilder must determine whether the tables are updatable through a unique index. This is only possible if you set AutoCommit to true before calling SyntaxFromSQL, as shown here:



sqlca.autocommit=TRUE ls_dws=sqlca.syntaxfromsql (sqlstmt, presentation, err) sqlca.autocommit=FALSE



The presentation string can also specify object keywords followed by properties and values to customize the DataWindow. You can specify the style of a column, the entire DataWindow, areas of the DataWindow, and text in the DataWindow. The object keywords are:



Column DataWindow Group Style Text Title A full presentation string has the format:



"Style ( Type=value property=value ... ) DataWindow ( property=value ... ) Column ( property=value ... ) Group groupby_colnum1 Fby_colnum2 ... property ... ) Text property=value ... ) Title ( 'titlestring' )"



The checklists in Chapter 3, DataWindow Object Properties in DataWindow Reference identify the properties that you can use for each object keyword.



If a database column has extended attributes with font information, then font information you specify in the SyntaxFromSQL presentation string is ignored.
