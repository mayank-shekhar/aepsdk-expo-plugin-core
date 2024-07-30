import { StyleSheet, Text, View } from 'react-native';

import * as AepsdkExpoPluginCore from 'aepsdk-expo-plugin-core';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{AepsdkExpoPluginCore.hello()}</Text>
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
