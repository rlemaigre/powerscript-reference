# How to override

To override the order, enclose expressions in parentheses. This identifies the group and order in which PowerBuilder will evaluate the expressions. When there are nested groups, the groups are evaluated from the inside out.



For example, in the expression (x+(y*(a+b))), a+b is evaluated first. The sum of a and b is then multiplied by y, and this product is added to x.
