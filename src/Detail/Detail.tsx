import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components/native';

import { Text } from 'react-native';
import { useRootStore } from '../shared/store';

const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  padding: 0 10px;
`;

export const DetailScreen = observer(() => {
  const rootStore = useRootStore();

  return (
    <Page>
      <Text>Detail Screen</Text>
      <Input
        placeholder="Type your name"
        onChangeText={(value: string) => rootStore.setName(value)}
      />
      {!!rootStore.name && <Text>Hello, {rootStore.name}!</Text>}
    </Page>
  );
});
