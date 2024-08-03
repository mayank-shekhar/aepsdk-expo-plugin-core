import { ConfigPlugin, withInfoPlist, withPodfile } from "expo/config-plugins";
// import { config } from "process";

import { SdkConfigurationProps } from "./types";

// const fs = require("fs");
// const path = require("path");

const withCoreInfoPlist: ConfigPlugin<SdkConfigurationProps> = (
  config,
  { logLevel, environmentFileId, extensions },
) => {
  return withInfoPlist(config, (config) => {
    delete config.modResults.AEPCore;

    if (logLevel) {
      config.modResults.AEPCore = {
        logLevel,
      };
    }

    if (environmentFileId) {
      config.modResults.AEPCore = {
        ...config.modResults.AEPCore,
        environmentFileId,
      };
    }

    if (extensions) {
      config.modResults.AEPCore = {
        ...config.modResults.AEPCore,
        extensions,
      };
    }
    return config;
  });
};

const withCorePodfile: ConfigPlugin<SdkConfigurationProps> = (
  config,
  props,
) => {
  return withPodfile(config, (config) => {
    const codeToAdd = `
        installer.pods_project.targets.each do |t|
            if t.name.start_with?("AEP")
            t.build_configurations.each do |bc|
                bc.build_settings['OTHER_SWIFT_FLAGS'] = '$(inherited) -no-verify-emitted-module-interface'
            end
            end
        end
    `;
    const podFile = config.modResults;

    if (podFile.contents.includes(codeToAdd)) {
      return config;
    } else {
      podFile.contents = podFile.contents.replace(
        "post_install do |installer|",
        `post_install do |installer| ${codeToAdd}`,
      );
    }
    return config;
  });
};

// const withCoreXcodeProject: ConfigPlugin<SdkConfigurationProps> = (
//   config,
//   props,
// ) => {
//   return withXcodeProject(config, (config) => {
//     const filePath = path.resolve(
//       config.modRequest.platformProjectRoot,
//       "Podfile",
//     );
//     let podFile = fs.readFileSync(filePath, "utf8");
//     /**
//      * Add the following code in the post install hook of the Podfile of the project
//         installer.pods_project.targets.each do |t|
//             if t.name.start_with?("AEP")
//             t.build_configurations.each do |bc|
//                 bc.build_settings['OTHER_SWIFT_FLAGS'] = '$(inherited) -no-verify-emitted-module-interface'
//             end
//             end
//         end to podfile of project
//      */
//     const codeToAdd = `
//         installer.pods_project.targets.each do |t|
//             if t.name.start_with?("AEP")
//             t.build_configurations.each do |bc|
//                 bc.build_settings['OTHER_SWIFT_FLAGS'] = '$(inherited) -no-verify-emitted-module-interface'
//             end
//             end
//         end
//     `;
//     if (podFile.includes(codeToAdd)) {
//       return config;
//     }
//     podFile = podFile.replace(
//       "post_install do |installer|",
//       `post_install do |installer| ${codeToAdd}`,
//     );

//     // Add "-fcxx-modules" in Apple Clang - Custom Compiler Flags in Build Settings
//     const xcodeProjectPath = path.resolve(
//       config.modRequest.platformProjectRoot,
//       "Pods",
//       "Pods.xcodeproj",
//     );

//     const xcodeProject = require("xcode").project(xcodeProjectPath);
//     xcodeProject.parseSync();
//     const configurations = xcodeProject.pbxXCBuildConfigurationSection();
//     for (const key of Object.keys(configurations)) {
//       const buildSettings = configurations[key].buildSettings;
//       if (buildSettings["OTHER_CP"]) {
//         buildSettings["OTHER_CP"] += " -fcxx-modules";
//       }
//     }
//     fs.writeFileSync(xcodeProjectPath, xcodeProject.writeSync());

//     fs.writeFileSync(filePath, podFile);

//     return config;
//   });
// };

export const withCoreiOSSdk: ConfigPlugin<SdkConfigurationProps> = (
  config,
  props,
) => {
  config = withCorePodfile(config, props);
  config = withCoreInfoPlist(config, props);
  //   config = withCoreXcodeProject(config, props);

  return config;
};
