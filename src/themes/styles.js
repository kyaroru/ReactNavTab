import { StyleSheet } from 'react-native';
import * as Colors from 'themes/colors';

export const styles = StyleSheet.create({
  spinnerView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#333',
    opacity: 0.5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
