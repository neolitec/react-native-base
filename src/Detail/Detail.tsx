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
  width: 80%;
`;

export const DetailScreen = observer(() => {
  const rootStore = useRootStore();

  return (
    <Page>
      <Text>Detail Screen</Text>
      <Input
        placeholder="Firstname"
        onChangeText={(value: string) => rootStore.setFirstname(value)}
      />
      <Input
        placeholder="Lastname"
        onChangeText={(value: string) => rootStore.setLastname(value)}
      />
      <Input
        placeholder="Birth year"
        onChangeText={(value: string) =>
          rootStore.setBirthYear(parseInt(value, 10))
        }
      />
      {!rootStore.isValid ? (
        <Text>You informations are not valid.</Text>
      ) : (
        <>
          <Text>
            Hi, {rootStore.firstname} {rootStore.lastname}!
          </Text>
          <Text>
            Now I know that you&apos;re approximately {rootStore.age} years old.
          </Text>
        </>
      )}
    </Page>
  );
});
