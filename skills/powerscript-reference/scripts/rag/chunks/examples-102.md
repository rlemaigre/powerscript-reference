# Examples

This example gets the ScriptDefinition object that matches the PowerBuilder window object function OpenUserObjectWithParm and looks for the version with four arguments. If it finds a match, the example calls the function uf_scriptinfo, which creates a report about the script:



string ls_args[] ScriptDefinition sd



- ls_args[1] = "ref dragobject"
- ls_args[2] = "double"
- ls_args[3] = "integer"
- ls_args[4] = "integer"




sd = c_obj.FindMatchingFunction( &



"OpenUserObjectWithParm", ls_args) IF NOT IsValid(sd) THEN



mle_1.Text = "No matching script" ELSE



mle_1.Text = uf_scriptinfo(sd) END IF



The uf_scriptinfo function gets information about the function that matched the signature and builds a string. Scriptobj is the ScriptDefinition object passed to the function:



string s, lineend integer li lineend = "~r~n"



// Script name s = s + scriptobj.Name + lineend // datatype of the return value s = s + scriptobj.ReturnType.DataTypeOf + lineend



// List argument names s = s + "Arguments:" + lineend FOR li = 1 to UpperBound(scriptobj.ArgumentList)



s = s + scriptobj.ArgumentList[li].Name + lineend



NEXT // List local variables s = s + "Local variables:" + lineend FOR li = 1 to UpperBound(scriptobj.LocalVariableList)



s = s + scriptobj.LocalVariableList[li].Name &



+ lineend



NEXT RETURN s



See also FindClassDefinition FindFunctionDefinition FindTypeDefinition
