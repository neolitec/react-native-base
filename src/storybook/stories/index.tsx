import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, ViewStyle } from 'react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }: { children: React.ReactNode }) => (
  <View style={style as ViewStyle}>{children}</View>
);

storiesOf('CenteredView', module).add('default view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
));
