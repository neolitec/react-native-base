import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../shared/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
});

export const DetailScreen = observer(() => {
  const rootStore = useRootStore();

  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your name"
        onChangeText={value => rootStore.setName(value)}
      />
      {!!rootStore.name && <Text>Hello, {rootStore.name}!</Text>}
    </View>
  );
});
