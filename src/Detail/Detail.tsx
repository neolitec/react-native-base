import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components/native';

import { Text, Picker } from 'react-native';
import { useRootStore } from '../shared/store';
import { useI18n } from '../shared/lib/i18n/localization';

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
  const { detailStore, i18nStore } = useRootStore();
  const { tr, setLanguage } = useI18n();

  return (
    <Page>
      <Text>
        {tr('Language')}: {i18nStore.language.languageTag}
      </Text>
      <Input
        placeholder={tr('Firstname')}
        onChangeText={(value: string) => detailStore.setFirstname(value)}
      />
      <Input
        placeholder={tr('Lastname')}
        onChangeText={(value: string) => detailStore.setLastname(value)}
      />
      <Input
        placeholder={tr('Birth year')}
        onChangeText={(value: string) =>
          detailStore.setBirthYear(parseInt(value, 10))
        }
      />
      {!detailStore.isValid ? (
        <Text>{tr('Your informations are not valid.')}</Text>
      ) : (
        <>
          <Text>
            {tr('Hi, {{firstname}} {{lastname}}!', {
              firstname: detailStore.firstname,
              lastname: detailStore.lastname,
            })}
          </Text>
          <Text>
            {tr("Now I know that you're approximately {{age}} years old", {
              age: detailStore.age,
            })}
          </Text>
        </>
      )}
      <Picker
        style={{ width: '50%' }}
        selectedValue={i18nStore.language.languageTag}
        onValueChange={itemValue => {
          console.log(`Picker change lang ${itemValue}`);
          setLanguage({ languageTag: itemValue });
        }}>
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="English" value="en" />
      </Picker>
    </Page>
  );
});
