import { StyleSheet, Text, View } from 'react-native';
import { MobileCore, PrivacyStatus } from '@adobe/react-native-aepcore';
import { Messaging } from '@adobe/react-native-aepmessaging';
import { useEffect, useState } from 'react';

// import * as AepsdkExpoPluginCore from 'aepsdk-expo-plugin-core';

export default function App() {
  const [ privacyStatus, setPrivacyStatus ] = useState('');
  const [ logLevel, setLogLevel ] = useState('');
  const [messagingExtensionVersion, setMessagingExtensionVersion] = useState('');


  useEffect(() => {
    MobileCore.setPrivacyStatus(PrivacyStatus.OPT_IN);
    MobileCore.extensionVersion().then((version) => {
      console.log('Extension version: ', version);
    });
    MobileCore.getPrivacyStatus().then((status) => {
      console.log('Privacy status: ', status);
      setPrivacyStatus(status);
    });
    MobileCore.getLogLevel().then((level) => {
      console.log('Log level: ', level);
      setLogLevel(level);
    });

    Messaging.extensionVersion().then((version) => {
      console.log('Messaging extension version: ', version);
      setMessagingExtensionVersion(version);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello from the example app</Text>
      <Text>{privacyStatus}</Text>
      <Text>{logLevel}</Text>
      <Text>Messaging: {messagingExtensionVersion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
