# 6.2.2 Finding events

PowerBuilder events in descendant objects are, by default, extensions of ancestor events. PowerBuilder searches for events in the object's ancestor hierarchy until it gets to the top ancestor or finds an event that overrides its ancestor. Then it begins executing the events, from the ancestor event down to the descendant event.
