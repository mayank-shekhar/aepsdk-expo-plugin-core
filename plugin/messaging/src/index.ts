import { ConfigPlugin, createRunOncePlugin } from "expo/config-plugins";

// import { withCoreiOSSdk } from "./withCoreiOS";

const withMessagingSdkConfiguration: ConfigPlugin = (
  config,
) => {
  // Add the plugin code here.



  return config;
};

const pkg = require("../package.json");

export default createRunOncePlugin(withMessagingSdkConfiguration, pkg.name, pkg.version);
