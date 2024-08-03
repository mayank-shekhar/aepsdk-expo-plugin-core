import { StyleSheet, Text, View } from 'react-native';
import {MobileCore} from '@adobe/react-native-aepcore';

// import * as AepsdkExpoPluginCore from 'aepsdk-expo-plugin-core';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from the example app</Text>
      <Text>{ MobileCore.extensionVerion()}</Text>
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
