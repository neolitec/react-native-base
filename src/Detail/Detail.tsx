import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
    </View>
  );
}
