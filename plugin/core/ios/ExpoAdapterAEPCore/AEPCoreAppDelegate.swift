import AEPCore
import AEPLifecycle
import AEPSignal
import AEPIdentity
import ExpoModulesCore
import SystemConfiguration

public class AEPCoreAppDelegate: ExpoAppDelegateSubscriber {
  public func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    //  Read the infoDictionary to get environment file id
    let plistDict = Bundle.main.infoDictionary

    if let plist = plistDict, let plistConfig = plist["AEPCore"] as? [String: Any], let environmentFileId = plistConfig["environmentFileId"] as? String {

        MobileCore.setLogLevel(.debug)
        MobileCore.registerExtensions([Lifecycle.self, Identity.self, Signal.self], {
        MobileCore.configureWith(appId: environmentFileId)
      })
    }
    return true
  }
}
