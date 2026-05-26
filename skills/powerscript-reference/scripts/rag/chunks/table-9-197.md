# Table 9.197:

|Argument|Description|
|---|---|
|propertyname|String by value (the name of the property whose value changed). If propertyname is an empty string, a more general change occurred, such as changes to more than one property.|
|cancelchange|Boolean by reference; determines whether the change will be canceled. Values are:<br><br>• FALSE -- (Default) the change is allowed.<br>• TRUE -- the change is canceled.<br>|



Return Values None. Do not use a RETURN statement. Usage



Property change notifications are not supported by all OLE servers. The PropertyRequestEdit and PropertyChanged events only occur when the server supports these notifications.



Property notifications are not sent when the object is being created or loaded. Otherwise, notifications are sent for all bindable properties, no matter how the property is being changed.



The PropertyRequestEdit event gives you a chance to access the property's old value using the automation interface and save it. To cancel the change, set the cancelchange argument to true.



See also DataChange PropertyChanged Rename ViewChange



- 9.89 RButtonDown The RButtonDown event has different arguments for different objects:
