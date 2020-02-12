import { Platform, Dimensions, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');

const metrics = {
  hairlineMargin: 2,
  tightMargin: 4,
  smallerMargin: 8,
  smallMargin: 10,
  littleMargin: 12,
  regularMargin: 15,
  bigMargin: 18,
  largeMargin: 20,
  largerMargin: 24,
  xlargeMargin: 30,
  xxlargeMargin: 40,
  xxxlargeMargin: 50,
  statusBarHeight: Platform.select({
    android: StatusBar.currentHeight,
    ios: 0,
  }),
  keyboardVerticalOffset: Platform.select({
    android: 50,
    ios: 65,
  }),
  elevation: {
    small: 2,
    little: 3,
    medium: 5,
    large: 8,
    xlarge: 99,
    top: 20,
  },
  images: {
    icon: 24,
    medium: 40,
    large: 60,
    larger: 75,
    xl: 100,
    xxl: 150,
    full: 300,
    tinyPreview: width / 4,
    smallPreview: width / 2,
  },
  radius: {
    small: 3,
    medium: 4,
    circle: Platform.select({ ios: 9999, android: 50 }),
  },
  border: {
    tiny: 0.5,
    xxsmall: 1,
    xsmall: 2,
    small: 4,
    large: 8,
  },
  lineHeight: {
    smaller: 14,
    small: 16,
    normal: 18,
    regular: 20,
    medium: 25,
    large: 30,
    xlarge: 38,
  },
  touchable: {
    noHitSlop: {},
    smallHitSlop: { top: 5, bottom: 5, left: 5, right: 5 },
    hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
    largeHitSlop: { top: 25, bottom: 25, left: 25, right: 25 },
  },
};

export default metrics;
