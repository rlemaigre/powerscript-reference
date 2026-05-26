# Declaring structures

If you have defined a global structure in the Structure painter called str_emp_data, you can declare an instance of the structure in a script or in an object's instance variables. If you define the structure in an object painter, you can only declare instances of the structure in the object's instance variables and scripts.



This declaration declares two instances of the structure str_emp_data:



str_emp_data str_emp1, str_emp2



Referring to structure variables In scripts, you refer to the structure's variables using dot notation:



structurename.variable



These statements assign values to the variables in str_emp_data:



str_emp1.emp_id = 100



- str_emp1.emp_lname = "Jones" str_emp1.emp_salary = 200 str_emp2.emp_id = 101
- str_emp2.emp_salary = str_emp1.salary * 1.05 Using structures as instance variables




If the structure is declared as part of an object, you can qualify the structure name using dot notation:



objectname.structurename.variable



Suppose that this declaration is an instance variable of the window w_customer:



str_cust_data str_cust1



The following statement in a script for the object refers to a variable of str_cust_data. The pronoun This is optional, because the structure declaration is part of the object:



This.str_cust1.name



The following statement in a script for some other object qualifies the structure with the window name:



w_customer.str_cust1.name
