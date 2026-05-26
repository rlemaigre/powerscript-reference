# 1.7 Pronouns Description

PowerScript has pronouns that allow you to make a general reference to an object or control. When you use a pronoun, the reference remains correct even if the name of the object or control changes.



You can use pronouns in function and event scripts wherever you would use an object's name. For example, you can use a pronoun to:



- • Cause an event in an object or control
- • Manipulate or change an object or control • Obtain or change the setting of a property The following table lists the PowerScript pronouns and summarizes their use.


- Table 1.6: PowerScript pronouns




|This pronoun|In a script for a|Refers to the|
|---|---|---|
|This|Window, custom user object, menu, application object, or control|Object or control itself|
|Parent|Control in a window|Window containing the control|
| |Control in a custom user object|Custom user object containing the control|
| |Menu|Item in the menu on the level above the current menu|
|Super|descendant object or control|Parent|
| |descendant window or user object|Immediate ancestor of the window or user object|
| |Control in a descendant window or user object|Immediate ancestor of the control's parent window or user object|
