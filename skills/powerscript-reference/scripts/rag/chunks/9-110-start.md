# 9.110 Start

- 9.110.1 Syntax 1: for Animation controls Description Occurs when an animation has started playing. Event ID


- Table 9.248:




|Event ID|Objects|
|---|---|
|pbm_animatestart|Animation|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing See also Stop



- 9.110.2 Syntax 2: for CompressorObject and ExtractorObject objects Description




Occurs before the file compression or extraction starts. This event can be used to display the total number of bytes in the file that will be compressed or decompressed.
