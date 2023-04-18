package Utilities;

public class OSUtils {

	//SystemUtils.IS_OS_LINUX
	//SystemUtils.IS_OS_WINDOWS
	//System.getProperty("os.version");
	//System.getProperty("os.arch");
	
	public enum OS {
		WINDOWS, MAC, SOLARIS, LINUX
	}
	private static OS os = null;
	
	public static OS getOS() throws Exception {
		
		if(os == null) {
			String OSName = System.getProperty("os.name").toLowerCase();
			if(OSName.contains("win")) {
				os = OS.WINDOWS;
			}else if(OSName.contains("mac")) {
				os = OS.MAC;
				
			}else if(OSName.contains("sunoS")) {
				os = OS.SOLARIS;
			}else if(OSName.contains("nix") ||
					OSName.contains("nux") ||
					OSName.contains("aix")) {
				os = OS.LINUX;
			}else{
				//System.out.println("No OS name was return");
				throw new Exception("No OS name was return");
			}
		}
		return os;

	}
}
