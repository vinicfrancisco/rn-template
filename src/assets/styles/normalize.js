import { Platform, PixelRatio } from 'react-native';

export default {
  font: size => (Platform.OS === 'ios'
    ? Math.round(PixelRatio.roundToNearestPixel(size))
    : Math.round(PixelRatio.roundToNearestPixel(size)) - 2),
};
