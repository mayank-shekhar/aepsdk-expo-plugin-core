import AEPCore
// import AEPLifecycle
// import AEPSignal
// import AEPIdentity
import AEPMessaging
import ExpoModulesCore
import SystemConfiguration

public class AEPMessagingAppDelegate: ExpoAppDelegateSubscriber {
  public func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    MobileCore.registerExtensions([Messaging.self])

    return true
  }
}
