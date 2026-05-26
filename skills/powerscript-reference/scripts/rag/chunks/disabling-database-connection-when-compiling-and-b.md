# Disabling database connection when compiling and building

When PowerBuilder compiles an application that contains embedded SQL, it connects to the database profile last used in order to check for database access errors during the build process. For applications that use multiple databases, this can result in spurious warnings during the build since the embedded SQL can be validated only against that single lastused database and not against the databases actually used by the application. In addition, an unattended build, such as a lengthy overnight rebuild, can stall if the database connection cannot be made.



To avoid these issues, you can select the Disable Database Connection When Compiling and Building check box on the general page of the System Options dialog box.
