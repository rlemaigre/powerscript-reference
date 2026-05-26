# Examples

In the examples application that comes with PowerBuilder, external functions are declared as local external functions in a user object called u_external_function_win32. The scripts that call the functions are user object functions, but because they are part of the same user object, you do not need to use object notation to call them.



- Example 1




These declarations allow PowerBuilder to call the functions required for playing a sound in the WINMM.DLL:



//playsoundFUNCTION boolean sndPlaySoundA (string SoundName,



uint Flags) LIBRARY "WINMM.DLL" ALIAS FOR "sndPlaySoundA;ansi" FUNCTION uint waveOutGetNumDevs () LIBRARY "WINMM.DLL"



A function called uf_playsound in the examples application provided with PowerBuilder calls the external functions. Uf_playsound is called with two arguments (as_filename and ai_option) that are passed through to sndPlaySoundA.



Values for ai_option are as defined in the Windows documentation, as commented here:



//Options as defined in mmystem.h. //These may be or'd together. //#define SND_SYNC 0x0000 //play synchronously (default)



//#define SND_ASYNC 0x0001 //play asynchronously //#define SND_NODEFAULT 0x0002 //do not use default sound //#define SND_MEMORY 0x0004 //lpszSoundName points to a memory file //#define SND_LOOP 0x0008 //loop the sound until next sndPlaySound //#define SND_NOSTOP 0x0010 //do not stop any currently playing sound



uint lui_numdevs lui_numdevs = WaveOutGetNumDevs() IF lui_numdevs > 0 THEN



sndPlaySoundA(as_filename,ai_option) RETURN 1



ELSE



RETURN -1 END IF



- Example 2 This is the declaration for the Windows GetSysColor function: FUNCTION ulong GetSysColor (int index) LIBRARY "USER32.DLL"



This statement calls the external function. The meanings of the index argument and the return value are specified in the Windows documentation:



RETURN GetSysColor (ai_index)



- Example 3 This is the declaration for the Windows GetSysColor function: FUNCTION int GetSystemMetrics (int index) LIBRARY "USER32.DLL" These statements call the external function to get the screen height and width:




RETURN GetSystemMetrics(1) RETURN GetSystemMetrics(0)
