# Usage

When an application needs to load an object, PowerBuilder searches for the object first in the executable file and then in the dynamic libraries specified for the application. For a deployed component, PowerBuilder searches the PBD files in the component's library list. You can specify additional library files with AddToLibraryList.



Calling AddToLibraryList appends a new list of files, in the order in which they are specified in filelist, to the list of library files specified in the target. If filelist contains a file name that is already in the library list, that file name is not added to the library list. If filelist contains more than one occurrence of a given file name, the first occurrence is added to the library list.



PowerBuilder cannot check whether the libraries you specify are appropriate for the application. It is up to you to make sure the libraries contain the objects that the application or component needs.



This function has no effect in the PowerBuilder development environment. Examples



This example adds different PBDs to the library search path depending on whether product or customer processing is to be performed:



CHOOSE CASE processkind CASE "product"



AddToLibraryList("prod.pbd") CASE "customer"



AddToLibraryList("cust.pbd") END CHOOSE
