# Examples

In these declarations, the instance variables have the access specified by the label that precedes them. Another private variable is defined at the end, where private overrides the public label:



Private: integer ii_a=10, ii_b=24



string is_Name, is_Address1 Protected: integer ii_Units double idb_Results string is_Lname Public: integer ii_Weight string is_Location="Home" private integer ii_test



Some of these protected declarations have restricted write access:



Protected: integer ii_Units privatewrite double idb_Results privatewrite string is_Lname
