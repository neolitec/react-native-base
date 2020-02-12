import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { metrics, colors } from '../shared/theme';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.transparent,
  },
  body: {
    backgroundColor: colors.primary,
  },
  sectionContainer: {
    marginTop: metrics.xlargeMargin,
    paddingHorizontal: metrics.largerMargin,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.darkPrimary,
  },
  sectionDescription: {
    marginTop: metrics.smallerMargin,
    fontSize: 18,
    fontWeight: '400',
    color: colors.secondary,
  },
});

type StackParamList = { Detail: undefined };
type HomeScreenNavigationProp = StackNavigationProp<StackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
