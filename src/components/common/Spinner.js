import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

function Spinner(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ActivityIndicator
        size="small"
        animating
        style={styles.spinner}
      />
    </View>
  );
}

Spinner.propTypes = {
  style: PropTypes.any,
};

Spinner.defaultProps = {
  style: null,
};

export default Spinner;

