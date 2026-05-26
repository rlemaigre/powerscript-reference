# Usage

In a RichTextEdit control, any pictures in the selection are ignored. If the selection contains input fields, the names of the input fields, enclosed in brackets, become part of the string SelectedText returns. The contents of the input fields are not returned.



For example, when the salutation of a letter is selected, SelectedText might return:



Dear {title} {lastname}:
