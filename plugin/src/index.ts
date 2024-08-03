import { ConfigPlugin, createRunOncePlugin } from "expo/config-plugins";

import { SdkConfigurationProps } from "./types";
import { withCoreiOSSdk } from "./withCoreiOS";

const withSdkConfiguration: ConfigPlugin<SdkConfigurationProps> = (
  config,
  _props,
) => {
  // Add the plugin code here.

  const props = _props || {
    environmentFileId: "default-file-id",
    logLevel: 1,
    extensions: [],
  };
  config = withCoreiOSSdk(config, props);
  return config;
};

const pkg = require("../package.json");

export default createRunOncePlugin(withSdkConfiguration, pkg.name, pkg.version);
