# 2.3 System object datatypes Objects as datatypes

System object datatypes are specific to PowerScript. You view a list of all the system objects by selecting the System tab in the Browser.



In building PowerBuilder applications, you manipulate objects such as windows, menus, CommandButtons, ListBoxes, and graphs. Internally, PowerBuilder defines each of these kinds of objects as a datatype. Usually you do not need to concern yourself with these objects as datatypes -- you simply define the objects in a PowerBuilder painter and use them.



However, sometimes you need to understand how PowerBuilder maintains its system objects in a hierarchy of datatypes. For example, when you need to define instances of a window, you define variables whose datatype is window. When you need to create an instance of a menu to pop up in a window, you define a variable whose datatype is menu.



PowerBuilder maintains its system objects in a class hierarchy. Each type of object is a class. The classes form an inheritance hierarchy of ancestors and descendants.
