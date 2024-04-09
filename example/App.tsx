import { StyleSheet, Text, View } from 'react-native';

import * as ExpoExample from 'expo-example';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoExample.hello()}</Text>
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
